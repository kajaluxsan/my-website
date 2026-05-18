# Daily Blog Generator – Prompt

Dieser Prompt wird von der GitHub Action `.github/workflows/daily-blog.yml`
oder von einem Scheduled Trigger / lokalem Cron mit `claude -p` aufgerufen.
Authentifizierung über Claude Max via OAuth – **keine API-Kosten**.

Ziel: täglich **3 unterschiedliche Posts** mit jeweils einer **erzwungenen
Praxis-Sektion** veröffentlichen. So bekommen wir Volume (gut für neue
Domain) ohne reines AI-Content-Farming (Google-Penalty-Risiko).

---

## PROMPT

You are running as a scheduled task to write **three** new blog posts for
the repository `kajaluxsan/my-website`. The site is the personal portfolio
of Kajaluxan Mathitharan (BSc Computer Science ZHAW, working at LogObject
AG on legal-tech RAG systems).

Goal: research and draft 3 high-quality posts in **both German and
English**, each on a distinct topic and with a different format. Open a
single Pull Request that contains all 6 MDX files. **Do not merge.**

### Step 1 — Inventory existing posts

Read every file under `content/blog/*.mdx`, collect their titles and
slugs. Do not duplicate. Vary the topics across the 3 new posts (don't
publish 3 RAG-evaluation posts in one day — mix it up).

### Step 2 — Research

Use web search to identify what's currently being discussed (last 7 days):

- Hacker News front page (AI / dev tooling)
- Anthropic, OpenAI, LangChain, Qdrant, Pinecone release notes
- arXiv recent papers (RAG, LLM evaluation, retrieval)
- Vercel / Next.js / Cloudflare AI ecosystem
- Practitioner threads on r/LocalLLaMA, r/MachineLearning

### Step 3 — Pick 3 topics in 3 different formats

Each post must have a **different format**. Pick one from each row:

| Slot | Format | Examples |
|---|---|---|
| 1 | **Tutorial / How-to** | "How to evaluate RAG with MRR@5", "Setting up Qdrant with PostgreSQL" |
| 2 | **Opinion / Take** | "Why I stopped using pgvector for production RAG", "RAG is solved, embedding choice isn't" |
| 3 | **Comparison / Deep-Dive** | "LangChain vs LangGraph vs LlamaIndex", "Ollama on bare metal vs Docker" |

Each topic must:

- Be timely (last 1-3 months) or evergreen + currently relevant
- Align with author expertise: RAG, vector DBs, LLM eval, hybrid search,
  on-prem AI, legal-tech, Spring Boot, FastAPI, PostgreSQL
- NOT duplicate existing posts

### Step 4 — Write each post (3 × 2 languages = 6 files)

**Mandatory structure for every post**:

1. **TL;DR (3-4 lines)** at the very top after frontmatter
2. **Body** in H2 (`##`) sections: 800-1500 words
3. **Aus der Praxis / From my work** section (H2): at least one of:
   - A real metric from Kajaluxan's projects (MRR@5: 0.96, Recall@5: 0.99,
     100+ table MS SQL → PostgreSQL migration, on-prem RAG with Qdrant +
     PostgreSQL hybrid via RRF, semantic quality 87.2%)
   - A concrete trade-off he encountered (chunk size, embedding choice,
     timeouts, latency)
   - A failure / lesson learned ("we tried X, abandoned because Y")
   This section is the most important — it's what makes the post rank
   over generic AI content. It must contain something Claude could not
   have guessed from training data.
4. **Internal links**: link to at least 2 other posts on the site that
   are topically related. Use `/de/blog/<slug>` or `/en/blog/<slug>`.
5. **Honest closing** in the author's voice (no marketing-speak,
   no emoji).

**Hard rules**:

- 800-1500 words per language version
- First-person as Kajaluxan, German that reads natively in DE, English
  that reads natively in EN (not literal translations)
- Markdown only — no MDX components
- NEVER raw `<` or `>` outside code fences (MDX-JSX trap). Use words
  ("over 1M", "under 500k") or backticks
- No emoji anywhere
- Code fences must have a language tag (```python, ```bash, etc.)

### Step 5 — Frontmatter

Each MDX file gets this frontmatter (replace all placeholders):

```yaml
---
title: "Title under 65 chars — punchy, keyword-first"
description: "130-160 char SEO description with the main keyword early"
date: YYYY-MM-DD  # today's date
tags: ["primary-topic", "secondary-topic", "format"]
slug: kebab-case-slug
aiAssisted: true
format: tutorial | opinion | comparison  # one of these three
---
```

`aiAssisted: true` lets the site render a small disclosure badge.
Honesty signals (E-E-A-T) help, not hurt, with Google.

### Step 6 — Filenames

For each of the 3 topics, write **two** files:

- `content/blog/<slug>.de.mdx`
- `content/blog/<slug>.en.mdx`

The slug must be identical across the two language files of the same
topic (hreflang depends on this).

### Step 7 — Commit & open one PR

- Create branch `drafts/blog-YYYY-MM-DD` from `main`
- Commit all 6 files (3 topics × 2 languages) with message
  `draft: 3 blog posts — <topic1>, <topic2>, <topic3>`
- Push and open ONE Pull Request titled
  `📝 Daily blog drafts – YYYY-MM-DD (3 topics)`
- PR body lists the 3 topics with one-line summaries and reminds the
  reviewer to: read the "From my work" section of each post and replace
  generic claims with real specifics from Kajaluxan's projects.

**Do not merge.** End the session.

### If something blocks you

- Web search unavailable → fall back to evergreen topics in the author's
  expertise area, still 3 different formats
- Can only write 1-2 quality posts (rest would be filler) → only commit
  those, mention in PR body why fewer than 3
- Existing posts cover most obvious topics → go deeper (e.g. specific
  embedding model benchmarks, specific failure modes)

Quality beats quantity. Drop a draft if it would be generic filler.
