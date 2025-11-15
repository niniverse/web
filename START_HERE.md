# 🚀 START HERE - Quick Deploy

## What You Have

A **simple, clean vanilla JavaScript portfolio site** in the `/docs` folder:
- ✅ 3 files: index.html, styles.css, app.js
- ✅ Bilingual (English/Georgian)
- ✅ Dark/Light theme
- ✅ Niniverse branding
- ✅ Zero dependencies
- ✅ < 30KB total size

## Deploy in 3 Steps (2 minutes)

### 1. Push to GitHub

```bash
git add .
git commit -m "Add simple vanilla portfolio site"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to: https://github.com/niniverse/web/settings/pages
2. Source: **Deploy from a branch**
3. Branch: **main**
4. Folder: **/docs**
5. Click **Save**

### 3. Done!

Visit: **https://niniverse.github.io/web/**

Changes go live in 1-2 minutes.

---

## Update Content

Edit `docs/app.js` and change the `translations` object:

```javascript
const translations = {
    en: {
        "hero.name": "Your Name Here",
        "hero.tagline": "Your Tagline Here",
        // ... etc
    },
    ka: {
        // Georgian translations
    }
};
```

Then:
```bash
git add docs/app.js
git commit -m "Update content"
git push
```

---

## Files Explained

| File | Purpose | Size |
|------|---------|------|
| `docs/index.html` | Page structure | 7KB |
| `docs/styles.css` | All styling | 12KB |
| `docs/app.js` | Language, theme, content | 19KB |

**Total**: 38KB (smaller than most images!)

---

## Key Features

- 🌍 Bilingual toggle (EN/KA button)
- 🌓 Theme toggle (☀️/🌙 button)
- 📱 Mobile responsive
- ⚡ Instant loading
- 🎨 Niniverse colors
- 📝 Portfolio filtering

---

## No Build Step!

Unlike the complex React version:
- ❌ No npm install
- ❌ No npm build
- ❌ No dependencies
- ✅ Just edit files
- ✅ Push to GitHub
- ✅ Live instantly

---

## Test Locally

```bash
# Option 1: Just open it
open docs/index.html

# Option 2: Run a server
cd docs
python -m http.server 8000
# Visit http://localhost:8000
```

---

## More Info

- **[SIMPLE_DEPLOY.md](SIMPLE_DEPLOY.md)** - Deployment details
- **[VANILLA_SOLUTION.md](VANILLA_SOLUTION.md)** - Technical overview
- **[static/README.md](static/README.md)** - Customization guide

---

## That's It!

**No complexity. No dependencies. Just works.**

✨ Push, enable GitHub Pages, done. ✨
