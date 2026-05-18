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
      alternates: { languages: { de: `${SITE}/de`, en: `${SITE}/en` } },
    },
    {
      url: `${SITE}/en`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { de: `${SITE}/de`, en: `${SITE}/en` } },
    },
    {
      url: `${SITE}/de/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE}/en/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const allPosts = getAllPosts();
  for (const post of allPosts) {
    entries.push({
      url: `${SITE}/${post.lang}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Tag pages — give Google more entry points
  for (const lang of ["de", "en"] as const) {
    const tags = new Set<string>();
    for (const p of allPosts.filter((x) => x.lang === lang)) {
      for (const t of p.tags) tags.add(slugifyTag(t));
    }
    for (const t of tags) {
      entries.push({
        url: `${SITE}/${lang}/blog/tag/${t}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.5,
      });
    }
  }

  return entries;
}
