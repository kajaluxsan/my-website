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

## Automatisierte Drafts mit Claude Max (keine API-Kosten)

Drei Optionen – nimm die, die für dich am einfachsten ist.

### A) GitHub Action mit Claude Code Action (empfohlen)

Läuft auf GitHub-Servern, nutzt dein Max-Abo via OAuth-Token, kein API.

**Einmalige Einrichtung (5 Min):**

1. **Lokal** im Terminal (egal welcher Computer, wichtig: du musst bei
   Claude Code mit deinem Max-Account eingeloggt sein):
   ```bash
   claude setup-token
   ```
   → kopiert dir einen langen OAuth-Token in die Zwischenablage

2. **Auf GitHub**:
   - <https://github.com/kajaluxsan/my-website/settings/secrets/actions>
   - "New repository secret"
   - Name: **`CLAUDE_CODE_OAUTH_TOKEN`**
   - Value: Token aus Schritt 1 einfügen
   - "Add secret"

3. **GitHub-App installieren** (einmalig pro Repo):
   - <https://github.com/apps/claude>
   - "Install" → Repo `my-website` auswählen

4. Optional: erstes Mal **manuell triggern** unter
   <https://github.com/kajaluxsan/my-website/actions/workflows/daily-blog.yml>
   → "Run workflow"

Danach läuft `.github/workflows/daily-blog.yml` täglich 05:00 UTC und
öffnet PRs.

### B) Scheduled Trigger in Claude Code on the Web

Falls deine Account-Version die Schedule-Funktion zeigt:

1. <https://claude.ai/code> öffnen
2. Repo `kajaluxsan/my-website` öffnen
3. Schedule / Scheduled Trigger erstellen
4. Schedule: `0 5 * * *` (täglich 06-07 Uhr Schweiz)
5. Als Prompt den Inhalt von `scripts/daily-blog-prompt.md` ab `## PROMPT`
   reinkopieren

### C) Lokal via Cron + claude -p

Wenn du einen Rechner / Server hast, der durchläuft und Claude Code
installiert ist:

```bash
crontab -e
# Folgendes hinzufügen:
0 5 * * *  cd ~/projects/my-website && ./scripts/daily-blog.sh > /tmp/blog.log 2>&1
```

## Wichtig: niemals blind mergen

Beide Wege öffnen **nur einen PR**, sie pushen nichts auf main. Du musst
jeden PR manuell reviewen, persönliche Insights ergänzen und dann
mergen. Google straft Sites mit massenhaft un-reviewten AI-Posts ab.
