import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getAllPosts, getPostsByLang } from "@/lib/posts";
import type { Lang } from "@/i18n/LanguageProvider";

function slugifyTag(tag: string) {
  return tag
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function generateStaticParams() {
  const params: { locale: string; tag: string }[] = [];
  for (const lang of ["de", "en"] as const) {
    const tags = new Set<string>();
    for (const p of getPostsByLang(lang)) {
      for (const t of p.tags) tags.add(slugifyTag(t));
    }
    for (const t of tags) params.push({ locale: lang, tag: t });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; tag: string }>;
}): Promise<Metadata> {
  const { locale, tag } = await params;
  const lang = (locale === "en" ? "en" : "de") as Lang;
  const title =
    lang === "de"
      ? `Beiträge zu "${tag}" – Kajaluxan Mathitharan`
      : `Posts tagged "${tag}" – Kajaluxan Mathitharan`;
  const url = `https://kajaluxan.mathitharan.ch/${lang}/blog/tag/${tag}`;
  return {
    title,
    alternates: { canonical: url },
    openGraph: { title, url, type: "website" },
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ locale: string; tag: string }>;
}) {
  const { locale, tag } = await params;
  const lang = (locale === "en" ? "en" : "de") as Lang;

  const posts = getPostsByLang(lang).filter((p) =>
    p.tags.some((t) => slugifyTag(t) === tag),
  );
  if (posts.length === 0) notFound();

  const tt =
    lang === "de"
      ? { eyebrow: "Tag", titlePrefix: "Beiträge zu", back: "← Alle Beiträge", minutes: "Min." }
      : { eyebrow: "Tag", titlePrefix: "Posts tagged", back: "← All posts", minutes: "min" };

  const displayTag =
    posts[0]?.tags.find((t) => slugifyTag(t) === tag) ?? tag;

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="container-wide">
          <Link
            href={`/${lang}/blog`}
            className="mb-6 inline-block text-sm text-white/55 transition-colors hover:text-accent-light"
          >
            {tt.back}
          </Link>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            {tt.eyebrow}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {tt.titlePrefix} &ldquo;{displayTag}&rdquo;
          </h1>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/${lang}/blog/${p.slug}`}
                className="surface surface-hover group flex flex-col p-6"
              >
                <time dateTime={p.date} className="font-mono text-xs text-white/50">
                  {new Date(p.date).toLocaleDateString(
                    lang === "de" ? "de-CH" : "en-GB",
                    { year: "numeric", month: "short", day: "numeric" },
                  )}
                  {" · "}
                  {p.readingMinutes} {tt.minutes}
                </time>
                <h2 className="mt-3 text-lg font-semibold text-white transition-colors group-hover:text-accent-light">
                  {p.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/65">
                  {p.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
