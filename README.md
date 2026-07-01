# RAAYA — Multilingual Website

A full, static multi-page website for RAAYA, in **English / हिंदी / ಕನ್ನಡ**.

## Open it
Double-click **`index.html`** in any browser. No server or build step needed.
For best results (relative links + language memory), keep the folder structure intact.

## Pages
- `index.html` — Home (hero, stats, problem, services preview, R.A.A.Y.A. method, why, confidentiality, CTA)
- `services.html` — Six core services in detail + flagship intelligence services
- `approach.html` — The R.A.A.Y.A. method timeline + reporting outputs
- `about.html` — Who we are, principles, confidentiality
- `contact.html` — Confidential enquiry form (opens the visitor's email app; no data stored)

## Languages
Use the **EN / हिंदी / ಕನ್ನಡ** switcher in the top nav. The choice is remembered
across pages (localStorage). All copy lives in `assets/i18n.js` — edit translations
there and every page updates. Add a language by adding a block to the `I18N` object.

## Structure
```
raaya-website/
├── index.html  services.html  approach.html  about.html  contact.html
└── assets/
    ├── style.css   # all styling (navy/gold brand system, responsive)
    └── i18n.js     # translations (en/hi/kn) + language switcher
```

## To publish
Upload the whole `raaya-website/` folder to any static host (Netlify, Vercel,
GitHub Pages, S3, or plain nginx). Swap the placeholder `contact@raaya.in`
for a real address. Indic fonts use the visitor's system fonts (Nirmala UI /
Noto); optionally add Google Fonts (Noto Serif Devanagari / Kannada) for exact control.

_RAAYA — People. Perception. Power._
