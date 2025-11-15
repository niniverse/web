# Niniverse - Simple Portfolio Site

A clean, simple bilingual portfolio built with **vanilla HTML, CSS, and JavaScript**.

🌐 **Live Site**: https://niniverse.github.io/web/

## Features

- 🌍 Bilingual (English/Georgian)
- 🌓 Dark/Light theme
- 📱 Fully responsive
- ⚡ Zero dependencies
- 🎨 Niniverse branding

## Quick Start

```bash
# View locally
npm run dev
# Visit http://localhost:8000

# Deploy
npm run deploy
# Then push to GitHub
```

## Files

All site files are in `/docs`:
- `index.html` - Page structure (7KB)
- `styles.css` - All styling (12KB)
- `app.js` - Interactivity (19KB)

**Total size: 38KB**

## Update Content

Edit `docs/app.js`:

```javascript
const translations = {
    en: {
        "hero.name": "Your Name",
        "hero.tagline": "Your Tagline",
        // ... change any text
    },
    ka: {
        // Georgian translations
    }
};
```

Then:
```bash
git add docs/
git commit -m "Update content"
git push
```

## Deploy to GitHub Pages

1. Push to GitHub: `git push origin main`
2. Go to Settings > Pages
3. Source: main branch, Folder: /docs
4. Save

Done! Live at https://niniverse.github.io/web/

## Documentation

- **[START_HERE.md](START_HERE.md)** - Quick start
- **[SIMPLE_DEPLOY.md](SIMPLE_DEPLOY.md)** - Deployment guide
- **[VANILLA_SOLUTION.md](VANILLA_SOLUTION.md)** - Technical details

## No Build Step

Unlike complex frameworks:
- ✅ No npm install
- ✅ No build process
- ✅ No dependencies
- ✅ Just edit and push

## License

MIT - Feel free to use for your own portfolio!

---

Built with vanilla JS by Nini Chaladze
