# content/blog

MDX-Quelldateien für den Blog. Jeder Post existiert in zwei Sprachen mit
identischem Slug:

```
<slug>.de.mdx
<slug>.en.mdx
```

Beide Versionen sind unter `/de/blog/<slug>` und `/en/blog/<slug>`
erreichbar; Google bekommt via `hreflang` mit, dass es Übersetzungen
voneinander sind.

## Frontmatter

```yaml
---
title: "Titel (unter 65 Zeichen für SEO)"
description: "130-160 Zeichen, gut für Google-Snippet"
date: 2026-05-18
tags: ["RAG", "LLM"]
slug: meine-url   # ohne sprach-suffix, beide Dateien teilen ihn
---
```

## Schreiben

Inhalt unter dem Frontmatter ist standard Markdown mit MDX-Erweiterungen.

- **Code-Blöcke** via Triple-Backticks mit Sprache: ```` ```python ````
- **Tabellen** funktionieren
- **Bilder** ablegen unter `public/images/blog/` und via Markdown linken

⚠️ **MDX-Stolperstein:** `<` und `>` ausserhalb von Code-Blöcken werden als
JSX interpretiert. Schreibe `unter 1M` statt `<1M`, oder pack es in
Backticks.

## Automatisierte Drafts mit Claude Max

Es gibt **zwei Wege**, täglich automatische Draft-PRs zu generieren –
beide nutzen das Claude-Max-Abo (keine API-Kosten):

### A) Scheduled Trigger in Claude Code on the Web (empfohlen)

1. Auf <https://claude.ai/code> einloggen
2. Repo `kajaluxsan/my-website` öffnen
3. **Triggers** / **Schedule** → neuen Scheduled Trigger erstellen
4. Schedule: z.B. täglich 06:00 Schweiz-Zeit (Cron `0 5 * * *` UTC)
5. Prompt: gesamten Inhalt von `scripts/daily-blog-prompt.md` ab `## PROMPT`
   reinkopieren (alles unter dieser Zeile)
6. Speichern – läuft täglich, öffnet PRs, du reviewst und mergst manuell

Details: <https://code.claude.com/docs/en/claude-code-on-the-web>

### B) Lokal via Cron + claude -p

Wenn du einen Rechner / Server hast, der dauerhaft läuft und auf dem
Claude Code installiert ist:

```bash
crontab -e
# Folgendes hinzufügen (06:00 Schweiz = 05:00 UTC im Sommer):
0 5 * * *  cd ~/projects/my-website && ./scripts/daily-blog.sh > /tmp/blog.log 2>&1
```

Das Script liest `scripts/daily-blog-prompt.md`, gibt es an `claude -p`,
und Claude erledigt den Rest (Recherche, Schreiben, Commit, PR).

## Wichtig: niemals blind mergen

Beide Wege öffnen **nur einen PR**, sie pushen nichts auf main. Du musst
jeden PR manuell reviewen, persönliche Insights ergänzen und dann
mergen. Google straft Sites mit massenhaft un-reviewten AI-Posts ab.
