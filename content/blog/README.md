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
- **Bilder** ablegen unter `public/images/blog/` und via Markdown linken:
  `![alt](/images/blog/foo.png)`

⚠️ **MDX hat einen Stolperstein:** `<` und `>` ausserhalb von Code-Blöcken
werden als JSX interpretiert. Schreibe `unter 1M` statt `<1M`,
`über 500k` statt `>500k`, oder pack es in Backticks.

## Automatisch generierte Drafts

Der GitHub Action `.github/workflows/daily-blog.yml` lässt Claude
täglich recherchieren und Drafts schreiben. Diese landen als PR – bitte
manuell prüfen, ergänzen und mergen, nicht blind auto-mergen
(Google straft "scaled AI content" inzwischen sehr hart ab).
