# Personal Website – Kajaluxan Mathitharan

Modulare Portfolio-Webseite gebaut mit **Next.js 14**, **TypeScript** und **Tailwind CSS**. Mobile-first, optimiert für ein Deployment auf **Vercel**.

## Stack

- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS 3.4
- Inter (Google Fonts via `next/font`)

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Öffne <http://localhost:3000>.

## Build

```bash
npm run build
npm start
```

## Deployment auf Vercel

1. Repository auf GitHub pushen.
2. Auf <https://vercel.com/new> "Import Git Repository" auswählen.
3. Framework: **Next.js** (wird automatisch erkannt). Keine weiteren ENV-Variablen nötig.
4. "Deploy" klicken.

Alternativ via CLI:

```bash
npm i -g vercel
vercel
```

## Projektstruktur

```
src/
├── app/
│   ├── globals.css       # Tailwind base + custom utilities
│   ├── layout.tsx        # Root layout, Metadata, Fonts
│   └── page.tsx          # Single-page layout (komponiert die Sections)
├── components/           # Modulare Section-Komponenten
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Achievements.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── SectionHeading.tsx
└── data/
    └── profile.ts        # Single Source of Truth für CV-Inhalte
```

## Inhalte anpassen

Alle Inhalte (Experience, Projects, Skills, Contact, …) liegen zentral in `src/data/profile.ts` – einfach dort editieren, der Rest der UI rendert automatisch neu.

## Design-Token

Tailwind-Theme in `tailwind.config.ts` – Farben `brand` (Dark Navy) und `accent` (Blau) lassen sich global anpassen.
