import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { getPostsByLang } from "@/lib/posts";
import type { Lang } from "@/i18n/LanguageProvider";

const t = {
  de: {
    eyebrow: "Blog",
    title: "Aus dem Blog",
    description:
      "Praxisartikel zu RAG, LLM-Evaluation, Vector-Databases und Backend-Engineering.",
    all: "Alle Beiträge ansehen",
    empty: "Bald erscheinen hier neue Beiträge.",
    minutes: "Min. Lesezeit",
  },
  en: {
    eyebrow: "Blog",
    title: "From the blog",
    description:
      "Practical articles on RAG, LLM evaluation, vector databases and backend engineering.",
    all: "View all posts",
    empty: "New posts will appear here soon.",
    minutes: "min read",
  },
} as const;

export default function BlogTeaser({ lang }: { lang: Lang }) {
  const tt = t[lang];
  const posts = getPostsByLang(lang).slice(0, 3);

  return (
    <section id="blog" className="py-20 sm:py-28">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionHeading
              eyebrow={tt.eyebrow}
              title={tt.title}
              description={tt.description}
            />
          </div>
          <Link
            href={`/${lang}/blog`}
            className="mb-12 inline-flex items-center gap-2 rounded-full border border-white/15 bg-brand-900/60 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:bg-brand-900/80"
          >
            {tt.all}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-white/50">{tt.empty}</p>
        ) : (
          <div className="grid gap-5 md:grid-cols-3">
            {posts.map((p) => (
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
                    { year: "numeric", month: "short", day: "numeric" },
                  )}
                  {" · "}
                  {p.readingMinutes} {tt.minutes}
                </time>
                <h3 className="mt-3 line-clamp-2 text-lg font-semibold text-white transition-colors group-hover:text-accent-light">
                  {p.title}
                </h3>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-white/65">
                  {p.description}
                </p>
                {p.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((tag) => (
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
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
