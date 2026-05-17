# public

Statische Assets, die unter dem Web-Root erreichbar sind.

## Profilbild

Lege dein Profilbild als **`profile.jpg`** (oder `.png` / `.webp`) genau in
diesen Ordner. Dann ist es unter `https://deine-domain/profile.jpg` abrufbar
und wird automatisch im Hero rendered.

Empfohlen:

- Quadratisches Bild (z. B. **800 × 800 px**), bereits zugeschnitten
- Format: JPG (klein) oder WebP (modern)
- Dateigrösse < 300 KB

Falls du eine andere Endung verwendest, ändere `image: "/profile.jpg"` in
`src/data/profile.ts` entsprechend (z. B. `"/profile.webp"`).
Setze den Wert auf `null`, um stattdessen das KM-Monogramm zu zeigen.
