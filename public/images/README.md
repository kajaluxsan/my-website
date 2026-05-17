# public/images

**Profilbilder werden hier ausgeliefert.**

| Datei | Verwendung | Größe |
|---|---|---|
| `profile.webp` | Hero & Profil-Popup | ~20 KB |
| `profile-avatar.webp` | Navbar-Avatar | ~1.4 KB |

Das Original-PNG liegt unter `../assets/profile-original.png` (nicht im Deploy).

## Neues Bild hinzufügen

1. Neues Original als `assets/profile-original.png` ablegen.
2. Optimierte WebP-Varianten generieren:

```bash
node -e "
const sharp = require('sharp');
const src = 'assets/profile-original.png';
(async () => {
  await sharp(src).resize(720, 720, { fit: 'cover' }).webp({ quality: 88 })
    .toFile('public/images/profile.webp');
  await sharp(src).resize(96, 96, { fit: 'cover' }).webp({ quality: 85 })
    .toFile('public/images/profile-avatar.webp');
})();
"
```

(Vorher `npm install --no-save sharp`.)
