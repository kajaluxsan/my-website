# Daily Blog Generator – Prompt

Dieser Prompt ist gedacht für eine **Scheduled Session in Claude Code on the
Web** (oder lokal via `claude -p`). Er nutzt das Max-Abo, **keine API-Kosten**.

Beim Setup als Scheduled Trigger einfach den Inhalt unter `## PROMPT` als
Prompt einfügen. Claude erledigt Recherche, schreibt, committet und öffnet PR.

---

## PROMPT

You are running as a scheduled task to write one new blog post for the
repository `kajaluxsan/my-website`. The site is a personal portfolio at
<https://kajaluxan.mathitharan.ch> by Kajaluxan Mathitharan (BSc Computer
Science ZHAW, Project Manager at LogObject AG, focus on RAG / LLM /
backend engineering for the legal domain).

Goal of this run: research one timely topic, draft a single high-quality
blog post in **both German and English**, open a Pull Request for review.
**Do not merge.** Stop once the PR is open.

### Step 1 — Inventory

Read every file under `content/blog/*.mdx` and list the existing titles.
Don't duplicate any of them.

### Step 2 — Research

Use web search to identify what's currently being discussed in the
AI / RAG / LLM engineering community (last 7 days). Good sources:

- Hacker News front page (filter for AI/RAG/LLM)
- Anthropic, OpenAI, LangChain, Qdrant release notes
- arXiv recent papers on RAG, LLM evaluation, retrieval
- Vercel / Next.js AI ecosystem updates (if relevant)

Pick **one** narrowly-scoped topic that:

- Is timely (last 1-3 months)
- Has practical depth, not a "what is X" listicle
- Aligns with the author's expertise: RAG pipelines, hybrid search
  (Qdrant + BM25 via RRF), LLM evaluation (MRR@5 / Recall@5), on-premise
  AI, legal-tech, Spring Boot, FastAPI, PostgreSQL, vector databases
- Was not already covered

### Step 3 — Write

Voice: **first person as Kajaluxan**. Concise, opinionated, honest about
trade-offs, drawing on real project experience where it fits. No emoji.
Reference real metrics from his work where natural (MRR@5: 0.96,
Recall@5: 0.99, MS SQL → PostgreSQL migration with 100+ tables, on-prem
RAG with Qdrant + PostgreSQL hybrid).

Length: **800-1500 words** per language version.

Structure with H2 (`##`) sections, bullet lists, code fences for code.
Use a real markdown table if useful for comparison.

**MDX gotcha:** never use raw `<` or `>` characters outside code fences —
the MDX parser interprets them as JSX. Always write "over 1M",
"under 500k", "more than" etc.

Write the post in **both languages**, not one translated literally —
both should read naturally to a native speaker. Cover identical material
but rephrase as needed.

### Step 4 — Save

Generate a kebab-case ASCII slug (max 60 chars) from the topic. Then
write exactly two files:

- `content/blog/<slug>.de.mdx`
- `content/blog/<slug>.en.mdx`

Each starts with this frontmatter (replace placeholders):

```yaml
---
title: "Title under 65 chars"
description: "130-160 character SEO description"
date: YYYY-MM-DD  # today's date
tags: ["RAG", "Tag2", "Tag3"]
slug: same-slug-as-filename
---
```

Verify the slug is identical in both files so hreflang works correctly.

### Step 5 — Commit & PR

Create a new branch `drafts/blog-YYYY-MM-DD` from `main`, commit both
files with message `draft: blog post – <short topic>`, push, and open a
Pull Request targeting `main` with:

- **Title:** `📝 Blog draft – <topic>`
- **Body:** brief summary of what was researched, why this topic is
  timely, and a reminder that the human reviewer should add personal
  insights before merging (Google E-E-A-T penalises pure AI content).

**Do not merge the PR.** End the session.

### Constraints

- One post per run, regardless of how compelling other topics seem
- If the chosen topic turns out to duplicate an existing post during
  writing, abort and pick a different one
- If web search is unavailable, fall back to evergreen topics in the
  author's expertise area (still narrow + practical)
