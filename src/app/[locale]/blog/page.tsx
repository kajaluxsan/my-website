import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getPostsByLang } from "@/lib/posts";
import type { Lang } from "@/i18n/LanguageProvider";

const t = {
  de: {
    eyebrow: "Blog",
    title: "Beiträge zu KI, RAG & Backend-Engineering",
    description:
      "Praxisnahe Artikel zu RAG-Systemen, LLM-Evaluation, Vector-Databases und produktivem AI-Engineering.",
    empty: "Noch keine Beiträge veröffentlicht.",
    minutes: "Min. Lesezeit",
  },
  en: {
    eyebrow: "Blog",
    title: "Notes on AI, RAG & backend engineering",
    description:
      "Practical articles on RAG systems, LLM evaluation, vector databases and production AI engineering.",
    empty: "No posts yet.",
    minutes: "min read",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locale === "en" ? "en" : "de") as Lang;
  const tt = t[lang];
  const url = `https://kajaluxan.mathitharan.ch/${lang}/blog`;
  return {
    title: `${tt.title} – Kajaluxan Mathitharan`,
    description: tt.description,
    alternates: {
      canonical: url,
      languages: {
        de: "https://kajaluxan.mathitharan.ch/de/blog",
        en: "https://kajaluxan.mathitharan.ch/en/blog",
      },
    },
    openGraph: { title: tt.title, description: tt.description, url, type: "website" },
  };
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "en" ? "en" : "de") as Lang;
  const tt = t[lang];
  const posts = getPostsByLang(lang);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="container-wide">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            {tt.eyebrow}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {tt.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            {tt.description}
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {posts.length === 0 ? (
              <p className="text-white/50">{tt.empty}</p>
            ) : (
              posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${lang}/blog/${p.slug}`}
                  className="surface surface-hover group flex flex-col p-6"
                >
                  <time
                    dateTime={p.date}
                    className="font-mono text-xs text-white/50"
                  >
                    {new Date(p.date).toLocaleDateString(
                      lang === "de" ? "de-CH" : "en-GB",
                      { year: "numeric", month: "long", day: "numeric" },
                    )}
                    {" · "}
                    {p.readingMinutes} {tt.minutes}
                  </time>
                  <h2 className="mt-3 text-xl font-semibold text-white transition-colors group-hover:text-accent-light">
                    {p.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/65">
                    {p.description}
                  </p>
                  {p.tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
