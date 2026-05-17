# public/images

Hier kommt dein **Profilbild** rein.

## So gehts

1. Speichere dein Bild als **`profile.png`** (genauer Dateiname, alles klein).
2. Lege es **direkt in diesen Ordner** (`public/images/profile.png`).
3. Browser-Tab neu laden – das Bild erscheint im Hero.

## Testen

Im Browser öffnen: <http://localhost:3000/images/profile.png>
→ wenn dort dein Bild angezeigt wird, ist es korrekt platziert.

## Andere Dateiendungen

Wenn du `.png`, `.webp` o. ä. benutzt, ändere in
`src/data/profile.ts`:

```ts
image: "/images/profile.png"
```

## Bild komplett deaktivieren

In `src/data/profile.ts`:

```ts
image: null
```

→ es wird stattdessen das KM-Monogramm angezeigt.
