## TimeCam AI — Support Site (GitHub Pages)

This folder is a small static website intended for your App Store Connect **Support URL** (and Privacy URL).

### Quick setup (GitHub Pages)

1. Push this repo to GitHub.
2. In GitHub, open **Settings → Pages**
3. Under **Build and deployment**
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/docs`
4. Save. GitHub will give you a public URL like:
   - `https://<username>.github.io/<repo>/`

### What to edit

- **Support email**
  - Edit `docs/script.js` and change `SUPPORT_EMAIL`.
- **Privacy policy text**
  - Edit `docs/privacy.html`.

### URLs to paste into App Store Connect

- **Support URL**: `https://<username>.github.io/<repo>/`
- **Privacy Policy URL**: `https://<username>.github.io/<repo>/privacy.html`

