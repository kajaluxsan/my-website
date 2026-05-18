import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

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

  for (const post of getAllPosts()) {
    entries.push({
      url: `${SITE}/${post.lang}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
