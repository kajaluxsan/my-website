import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Lang } from "@/i18n/LanguageProvider";

export type PostMeta = {
  slug: string;
  lang: Lang;
  title: string;
  description: string;
  date: string; // ISO
  tags: string[];
  readingMinutes: number;
  cover?: string;
};

export type Post = PostMeta & { content: string };

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

function ensureDir() {
  if (!fs.existsSync(POSTS_DIR)) fs.mkdirSync(POSTS_DIR, { recursive: true });
}

function read(file: string): Post | null {
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const match = file.match(/^(.+)\.(de|en)\.mdx?$/);
  if (!match) return null;
  const [, slug, lang] = match;
  if (!data.title || !data.date) return null;

  return {
    slug: (data.slug as string) ?? slug,
    lang: lang as Lang,
    title: data.title as string,
    description: (data.description as string) ?? "",
    date: new Date(data.date).toISOString(),
    tags: (data.tags as string[]) ?? [],
    readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
    cover: data.cover as string | undefined,
    content,
  };
}

export function getAllPosts(): Post[] {
  ensureDir();
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.(de|en)\.mdx?$/.test(f))
    .map(read)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByLang(lang: Lang): Post[] {
  return getAllPosts().filter((p) => p.lang === lang);
}

export function getPost(slug: string, lang: Lang): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug && p.lang === lang);
}

export function getAllSlugs(): { slug: string; lang: Lang }[] {
  return getAllPosts().map(({ slug, lang }) => ({ slug, lang }));
}
