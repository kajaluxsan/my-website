import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getAllSlugs, getPost } from "@/lib/posts";
import type { Lang } from "@/i18n/LanguageProvider";

export async function generateStaticParams() {
  return getAllSlugs().map(({ slug, lang }) => ({ slug, locale: lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang = (locale === "en" ? "en" : "de") as Lang;
  const post = getPost(slug, lang);
  if (!post) return {};

  const url = `https://kajaluxan.mathitharan.ch/${lang}/blog/${slug}`;
  const altLang = lang === "de" ? "en" : "de";
  const altPost = getPost(slug, altLang);

  return {
    title: `${post.title} – Kajaluxan Mathitharan`,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: url,
      languages: {
        de: altPost || lang === "de"
          ? `https://kajaluxan.mathitharan.ch/de/blog/${slug}`
          : undefined,
        en: altPost || lang === "en"
          ? `https://kajaluxan.mathitharan.ch/en/blog/${slug}`
          : undefined,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Kajaluxan Mathitharan"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang = (locale === "en" ? "en" : "de") as Lang;
  const post = getPost(slug, lang);
  if (!post) notFound();

  const minLabel = lang === "de" ? "Min. Lesezeit" : "min read";
  const backLabel = lang === "de" ? "← Zurück zum Blog" : "← Back to blog";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: lang === "de" ? "de-CH" : "en-US",
    author: {
      "@type": "Person",
      name: "Kajaluxan Mathitharan",
      url: "https://kajaluxan.mathitharan.ch",
    },
    publisher: {
      "@type": "Person",
      name: "Kajaluxan Mathitharan",
      url: "https://kajaluxan.mathitharan.ch",
    },
    mainEntityOfPage: `https://kajaluxan.mathitharan.ch/${lang}/blog/${slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <article className="container-narrow">
          <Link
            href={`/${lang}/blog`}
            className="mb-8 inline-block text-sm text-white/55 transition-colors hover:text-accent-light"
          >
            {backLabel}
          </Link>

          <header className="mb-10">
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-white/50">
              <time dateTime={post.date} className="font-mono">
                {new Date(post.date).toLocaleDateString(
                  lang === "de" ? "de-CH" : "en-GB",
                  { year: "numeric", month: "long", day: "numeric" },
                )}
              </time>
              <span>·</span>
              <span>
                {post.readingMinutes} {minLabel}
              </span>
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
              {post.description}
            </p>
            {post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose-blog">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
