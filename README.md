# RAAYA — Multilingual Website + Leader Console

A static multi-page website for RAAYA in **English / हिंदी / ಕನ್ನಡ**, plus the
**RAAYA Leader Console** — a full political-leader management system
(onboarding, campaign plan, execution tracker, booth management, budget,
printable reports) with optional Firebase cloud sync for teams.

## Open it
Double-click **`index.html`** in any browser. No build step needed.
The Console (`console.html`) also works from `file://`, but for full testing a
local server is nicer: `python -m http.server 8437 --directory raaya-website`.

## Pages
- `index.html` — Home (hero, stats, problem, services preview, method, CTA)
- `services.html` — Six core services in detail
- `approach.html` — The R.A.A.Y.A. method timeline
- `about.html` — Who we are, principles, confidentiality
- `contact.html` — Confidential enquiry form (mailto; no data stored)
- `console.html` — **Leader Console** (see below)

## The Leader Console
`console.html` is a single-file app. Features:
- **Onboarding wizard** — leader profile, election target (Lok Sabha …
  Gram Panchayat), constituency, RAAYA services, budget band.
- **Live constituency data** — picking Vidhan Sabha or Lok Sabha offers all
  Karnataka seats with auto-filled sitting MLA/MP, runner-up, party and margin.
- **Campaign plan** — 7 dated phases generated from the election date, actions
  filtered by engaged services; importable into the tracker as tasks.
- **Execution tracker** — tasks with owner, due date, status, overdue alerts.
- **Booth management** — strong/swing/weak classification, in-charge, voters.
- **Budget** — planned vs actual per line, band-based suggested allocation.
- **Leader Directory** — browse/search all 252 scraped seats, one-click
  onboarding of any incumbent as a prospect (sign-in required).
- **Print Report / PDF** — clean confidential campaign brief per leader.
- **Command dashboard** + JSON export/import backup.

### Storage: local vs cloud
Out of the box the Console stores data in the browser (`localStorage`) —
single-device, private, zero setup. To share data across a team, fill in
**`assets/firebase-config.js`** (apiKey + projectId from your Firebase
project). The Console then shows a sign-in screen (accounts are created only
by you in Firebase → Authentication → Users), syncs live via Firestore, works
offline, and migrates existing browser data to the cloud on first login.

### Roles & permissions
Two roles, enforced by Firestore security rules:
- **Admin** — sees all leaders, grants/revokes staff access per leader
  (Team Access card on each profile). Admins are the documents in the
  `admins` collection: create one document per admin with the **document ID
  set to their email** (Firestore → Start collection → `admins` → doc ID
  `you@example.com`, no fields needed).
- **Staff** — sees only leaders whose `access` list contains their email.
  They can work on those leaders but cannot change access lists.

Every account must also exist in Firebase → Authentication → Users.

Required Firestore security rules (Firestore → Rules → Publish):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isAdmin() {
      return request.auth != null &&
        exists(/databases/$(database)/documents/admins/$(request.auth.token.email));
    }
    match /admins/{email} {
      allow read: if request.auth != null && request.auth.token.email == email;
      allow write: if isAdmin();
    }
    match /leaders/{doc} {
      allow read, delete: if isAdmin() ||
        (request.auth != null && request.auth.token.email in resource.data.access);
      allow create: if isAdmin() ||
        (request.auth != null && request.auth.token.email in request.resource.data.access);
      allow update: if isAdmin() ||
        (request.auth != null && request.auth.token.email in resource.data.access
         && request.resource.data.access == resource.data.access);
    }
  }
}
```

## Languages
Use the **EN / हिंदी / ಕನ್ನಡ** switcher in the nav; the choice is remembered
across pages. Static-page copy lives in `assets/i18n.js`; the Console's
JS-rendered UI is translated by `assets/console-i18n.js` (phrase map — add new
strings there). Leader-entered data stays in the language it was typed.

## Structure
```
raaya-website/
├── index.html  services.html  approach.html  about.html  contact.html
├── console.html          # Leader Console (app + styles + logic in one file)
├── .nojekyll             # keep — makes GitHub Pages serve files as-is
└── assets/
    ├── style.css         # brand system (navy/gold, min font size 15px)
    ├── i18n.js           # site translations (en/hi/kn) + language switcher
    ├── console-i18n.js   # Console UI translations (en/hi/kn)
    ├── firebase-config.js# cloud keys (placeholders = local-only mode)
    ├── ka2023.js         # 224 KA assembly seats — 2023 results (ECI/Wikipedia)
    └── ka_ls2024.js      # 28 KA Lok Sabha seats — 2024 results (ECI/Wikipedia)
```

## To publish
Upload the whole `raaya-website/` folder to any static host — see
**DEPLOY.md** for the GitHub Pages walkthrough. Notes:
- The Firebase apiKey in `firebase-config.js` is safe to publish; access is
  controlled by the security rules and your user accounts, not by the key.
- The election datasets are public record; client data never ships with the
  site — it lives in the browser or in your Firestore project.
- Data freshness: results are as of the 2023 assembly / 2024 general election;
  by-elections and defections are not reflected until the files are re-scraped.

_RAAYA — People. Perception. Power._
