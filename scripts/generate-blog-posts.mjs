#!/usr/bin/env node
/*
 * Daily blog generator – uses Claude with web search to research current
 * AI / RAG / vector-DB / LLM trends, then drafts N blog posts in DE + EN.
 *
 * Triggered by .github/workflows/daily-blog.yml. Reads:
 *   ANTHROPIC_API_KEY      (required, GitHub secret)
 *   BLOG_POSTS_PER_RUN     (default: 1) – keep small for quality + cost
 *   ANTHROPIC_MODEL        (default: claude-sonnet-4-6)
 *
 * Writes drafts to:
 *   content/blog/<slug>.de.mdx
 *   content/blog/<slug>.en.mdx
 *
 * The action then opens a Pull Request so you (the human) can review
 * before merging. This is intentional – auto-publishing Claude content
 * straight to main is a fast way to get deindexed by Google.
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "node:fs";
import path from "node:path";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");
const POSTS_PER_RUN = parseInt(process.env.BLOG_POSTS_PER_RUN ?? "1", 10);
const MODEL = process.env.ANTHROPIC_MODEL ?? "claude-sonnet-4-6";

if (!process.env.ANTHROPIC_API_KEY) {
  console.error("ANTHROPIC_API_KEY missing");
  process.exit(1);
}

const client = new Anthropic();

function existingTitles() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf8");
      const m = raw.match(/^---[\s\S]*?title:\s*"?([^"\n]+)"?[\s\S]*?---/);
      return m ? m[1].trim() : f;
    });
}

function slugify(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

const SYSTEM = `You are Kajaluxan Mathitharan, a software engineer (BSc Computer Science ZHAW, working at LogObject AG on legal-tech RAG systems). You write practical, opinionated technical blog posts about RAG, LLM evaluation, vector databases (Qdrant, pgvector), hybrid search, prompt engineering, and AI engineering.

Voice: first person, concise, honest about trade-offs, drawing on real project experience (MRR@5 0.96, hybrid search with RRF, Qdrant + PostgreSQL on-premise stacks, Spring Boot, FastAPI). Avoid filler. Avoid emoji. Use code examples where useful.

Output requirements:
- Return a JSON object only — no prose around it
- Strict schema: { "topic": string, "slug": string, "tags": string[], "de": { "title": string, "description": string, "body": string }, "en": { "title": string, "description": string, "body": string } }
- "body" is markdown (use ##, ###, lists, code fences). NEVER use raw < or > outside code fences (write "over 1M" instead of ">1M")
- slug: kebab-case, ASCII, max 60 chars
- title: under 65 chars
- description: 130-160 chars (good for SEO)
- body: 800-1500 words, structured with H2 sections
- DE and EN must cover the same content. Native idiomatic German for DE, native English for EN.
- Pick a single, narrowly-scoped topic with practical takeaways`;

async function research() {
  const titles = existingTitles();
  const prompt = `Use web search to identify what's currently being discussed in the AI / RAG / LLM engineering community (Hacker News, LangChain releases, vector-DB updates, new papers, common practitioner questions). Then propose a single blog post topic that:

1. Is timely (last 1-3 months)
2. Aligns with the author's expertise (RAG, vector DBs, LLM evaluation, on-premise/legal AI, hybrid search, Spring Boot/FastAPI backends)
3. Has practical depth — not "what is X" listicles
4. Does NOT duplicate any of these existing post titles:

${titles.length === 0 ? "(no existing posts)" : titles.map((t, i) => `  ${i + 1}. ${t}`).join("\n")}

Now write the full blog post (DE + EN) following the system instructions. Return ONLY the JSON object.`;

  const message = await client.messages.create({
    model: MODEL,
    max_tokens: 8000,
    system: SYSTEM,
    tools: [{ type: "web_search_20250305", name: "web_search", max_uses: 5 }],
    messages: [{ role: "user", content: prompt }],
  });

  // The final assistant text block contains the JSON
  const textBlocks = message.content.filter((b) => b.type === "text");
  const text = textBlocks.map((b) => b.text).join("\n");
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("No JSON in model output:\n" + text);
  return JSON.parse(jsonMatch[0]);
}

function writePost(post) {
  fs.mkdirSync(POSTS_DIR, { recursive: true });
  const date = new Date().toISOString().slice(0, 10);
  const slug = slugify(post.slug || post.topic);
  const tagLine = JSON.stringify(post.tags || []);

  for (const lang of ["de", "en"]) {
    const meta = post[lang];
    const frontmatter = `---
title: ${JSON.stringify(meta.title)}
description: ${JSON.stringify(meta.description)}
date: ${date}
tags: ${tagLine}
slug: ${slug}
---

`;
    const file = path.join(POSTS_DIR, `${slug}.${lang}.mdx`);
    fs.writeFileSync(file, frontmatter + meta.body.trim() + "\n");
    console.log("wrote", file);
  }
  return slug;
}

(async () => {
  const slugs = [];
  for (let i = 0; i < POSTS_PER_RUN; i++) {
    try {
      console.log(`\n— Generating post ${i + 1}/${POSTS_PER_RUN}`);
      const post = await research();
      const slug = writePost(post);
      slugs.push(slug);
    } catch (e) {
      console.error("Generation failed:", e.message);
    }
  }
  console.log("\nDone:", slugs);
})();
