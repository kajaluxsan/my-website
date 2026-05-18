import { getPostsByLang } from "@/lib/posts";
import type { Lang } from "@/i18n/LanguageProvider";

const SITE = "https://kajaluxan.mathitharan.ch";

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;
  const lang = (locale === "en" ? "en" : "de") as Lang;
  const posts = getPostsByLang(lang).slice(0, 30);

  const items = posts
    .map(
      (p) => `    <item>
      <title>${escape(p.title)}</title>
      <link>${SITE}/${lang}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE}/${lang}/blog/${p.slug}</guid>
      <description>${escape(p.description)}</description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
    </item>`,
    )
    .join("\n");

  const title =
    lang === "de"
      ? "Kajaluxan Mathitharan – Blog"
      : "Kajaluxan Mathitharan – Blog";
  const desc =
    lang === "de"
      ? "Beiträge zu KI, RAG und Backend-Engineering."
      : "Posts on AI, RAG and backend engineering.";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escape(title)}</title>
    <link>${SITE}/${lang}/blog</link>
    <description>${escape(desc)}</description>
    <language>${lang === "de" ? "de-CH" : "en-US"}</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "content-type": "application/rss+xml; charset=utf-8" },
  });
}
