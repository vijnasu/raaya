# Deploy RAAYA site to GitHub Pages (temporary)

The site is 100% static, so GitHub Pages hosts it for free. All links are
relative, so it works from a project URL like `https://USERNAME.github.io/REPO/`.

Pick **one** of the two methods below. Both take ~3 minutes.

---

## Method A — No command line (upload in the browser)

1. Go to <https://github.com/new> and create a repo, e.g. **`raaya-site`**
   (Public is required for free Pages; you can delete it later).
2. On the new repo page, click **“uploading an existing file.”**
3. Drag in **all files from the `raaya-website/` folder** — i.e. `index.html`,
   `services.html`, `approach.html`, `about.html`, `contact.html`,
   `console.html`, `.nojekyll`, and the **`assets/`** folder (with `style.css`,
   `i18n.js`, `console-i18n.js`, `firebase-config.js`, `ka2023.js`,
   `ka_ls2024.js`).
   - Tip: drag the folder's *contents* (not the outer folder) so `index.html`
     sits at the repo root.
4. Click **Commit changes**.
5. Go to **Settings → Pages**. Under **Build and deployment → Source**, choose
   **Deploy from a branch**, select branch **`main`** and folder **`/ (root)`**,
   then **Save**.
6. Wait ~1 minute, refresh the Pages settings — your live URL appears:
   **`https://USERNAME.github.io/raaya-site/`**

---

## Method B — Git command line

From inside the `raaya-website/` folder:

```bash
git init
git add .
git commit -m "RAAYA multilingual site"
git branch -M main
git remote add origin https://github.com/USERNAME/raaya-site.git
git push -u origin main
```

Then do **step 5–6** from Method A (Settings → Pages → deploy from `main` / root).

> If `git push` asks for a password, use a **Personal Access Token** (GitHub →
> Settings → Developer settings → Tokens), not your account password. Enter it
> yourself — never share it.

---

## The important bit: `.nojekyll`
This empty file is already included. It tells GitHub Pages to serve the files
as-is (skip Jekyll processing), which avoids any issues with folders and assets.
Keep it in the upload.

## Taking it down (since this is temporary)
- **Fastest:** Settings → Pages → set Source to **None** (unpublishes instantly).
- **Full removal:** Settings → scroll to **Danger Zone → Delete this repository**.
- Or make the repo **Private** (Pages then stops serving on the free plan).

## Leader Console + Firebase (one extra step)
If cloud sync is enabled (`assets/firebase-config.js` has real keys), Firebase
must be told to trust your new site's domain or **sign-in will fail** with
`auth/unauthorized-domain`:

1. Firebase console → **Authentication → Settings → Authorized domains**.
2. Click **Add domain** and enter your Pages host, e.g. `USERNAME.github.io`.

Notes:
- The apiKey in `firebase-config.js` is safe to publish — access is enforced
  by the Firestore security rules and your user accounts (see README.md).
- Client data is NOT in the uploaded files; it lives in Firestore (or in each
  browser's localStorage if cloud is not configured).
- The Console works offline after first load and syncs when back online.

## Custom domain (optional, later)
Add a `CNAME` file with your domain and point a DNS `CNAME` record to
`USERNAME.github.io`. Not needed for a temporary deploy.

_RAAYA — People. Perception. Power._
