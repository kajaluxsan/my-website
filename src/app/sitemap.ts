import type { MetadataRoute } from "next";
import { getAllPosts, slugifyTag } from "@/lib/posts";

const SITE = "https://kajaluxan.mathitharan.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    {
      url: `${SITE}/de`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          de: `${SITE}/de`,
          en: `${SITE}/en`,
          "x-default": `${SITE}/de`,
        },
      },
    },
    {
      url: `${SITE}/en`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          de: `${SITE}/de`,
          en: `${SITE}/en`,
          "x-default": `${SITE}/de`,
        },
      },
    },
    {
      url: `${SITE}/de/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
      alternates: {
        languages: {
          de: `${SITE}/de/blog`,
          en: `${SITE}/en/blog`,
          "x-default": `${SITE}/de/blog`,
        },
      },
    },
    {
      url: `${SITE}/en/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
      alternates: {
        languages: {
          de: `${SITE}/de/blog`,
          en: `${SITE}/en/blog`,
          "x-default": `${SITE}/de/blog`,
        },
      },
    },
  ];

  const allPosts = getAllPosts();
  const slugsByLang = new Map<string, Set<string>>();
  for (const p of allPosts) {
    const set = slugsByLang.get(p.slug) ?? new Set();
    set.add(p.lang);
    slugsByLang.set(p.slug, set);
  }

  for (const post of allPosts) {
    const langs = slugsByLang.get(post.slug) ?? new Set();
    const languages: Record<string, string> = {};
    if (langs.has("de")) languages.de = `${SITE}/de/blog/${post.slug}`;
    if (langs.has("en")) languages.en = `${SITE}/en/blog/${post.slug}`;
    if (langs.has("de")) languages["x-default"] = `${SITE}/de/blog/${post.slug}`;
    else if (langs.has("en")) languages["x-default"] = `${SITE}/en/blog/${post.slug}`;

    entries.push({
      url: `${SITE}/${post.lang}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages },
    });
  }

  for (const lang of ["de", "en"] as const) {
    const tags = new Set<string>();
    for (const p of allPosts.filter((x) => x.lang === lang)) {
      for (const t of p.tags) tags.add(slugifyTag(t));
    }
    for (const t of tags) {
      const otherLangHasTag = allPosts.some(
        (p) => p.lang !== lang && p.tags.some((tt) => slugifyTag(tt) === t),
      );
      entries.push({
        url: `${SITE}/${lang}/blog/tag/${t}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.5,
        alternates: otherLangHasTag
          ? {
              languages: {
                de: `${SITE}/de/blog/tag/${t}`,
                en: `${SITE}/en/blog/tag/${t}`,
                "x-default": `${SITE}/de/blog/tag/${t}`,
              },
            }
          : undefined,
      });
    }
  }

  return entries;
}
