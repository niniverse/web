# GitHub Pages Setup Guide - Quick Reference

## 🚀 One-Time Setup (5 minutes)

### Step 1: Push Code to GitHub

```bash
# Make sure you're in the project directory
cd c:\GitHub\niniverse\web

# Add all files
git add .

# Commit with a descriptive message
git commit -m "Setup Niniverse - world-class static site with branding and best practices"

# Push to GitHub
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to: https://github.com/niniverse/web
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. That's it! 🎉

### Step 3: Wait for Deployment

1. Go to the **Actions** tab: https://github.com/niniverse/web/actions
2. Watch the "Deploy to GitHub Pages" workflow
3. Wait ~2-3 minutes for completion
4. Visit your site: **https://niniverse.github.io/web/**

---

## 🔄 Making Updates

Every time you want to update the site:

```bash
# 1. Make your changes to the code or content

# 2. Build the site (creates /docs folder)
npm run build:github

# 3. Commit and push
git add .
git commit -m "Update: [describe your changes]"
git push origin main

# 4. GitHub Actions will automatically deploy
# Check progress at: https://github.com/niniverse/web/actions
```

---

## 📝 Content Updates (No Build Required)

To update text content only:

### Edit on GitHub Website

1. Go to: https://github.com/niniverse/web
2. Navigate to: `src/client/public/en.json` or `ka.json`
3. Click the **pencil icon** (Edit this file)
4. Make your changes
5. Scroll down and click **Commit changes**
6. Wait 2 minutes for auto-deployment

### Edit Locally

```bash
# Edit the JSON files
# src/client/public/en.json (English)
# src/client/public/ka.json (Georgian)

# Build and deploy
npm run build:github
git add docs/ src/client/public/
git commit -m "Update content"
git push origin main
```

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Site loads: https://niniverse.github.io/web/
- [ ] English content displays correctly
- [ ] Georgian language switch works
- [ ] Dark/light theme toggle works
- [ ] Mobile responsive design works
- [ ] All images load
- [ ] Navigation works
- [ ] Forms work (if applicable)

---

## 🐛 Troubleshooting

### Site not loading?
- Check Actions tab for build errors
- Ensure GitHub Pages source is set to "GitHub Actions"
- Wait 2-3 minutes after first deployment

### Build failing?
```bash
# Clear and reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build:github
```

### Images not showing?
- Check that images are in `src/assets/attached_assets/`
- Verify imports use `@assets/` alias
- Rebuild with `npm run build:github`

### 404 errors?
- Ensure hash-based routing is working (URLs should have `#/`)
- Check that `useHashLocation` is used in App.tsx
- Verify `base: './'` in vite.config.github.ts

---

## 📊 Monitoring

### Check Build Status
https://github.com/niniverse/web/actions

### View Deployment Logs
1. Go to Actions tab
2. Click on latest "Deploy to GitHub Pages" workflow
3. Click on "build" or "deploy" to see logs

### Performance Testing
After deployment, test with:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- Chrome DevTools Lighthouse

---

## 🎯 Expected Performance

Your site should achieve:
- ✅ Performance: 90+
- ✅ Accessibility: 100
- ✅ Best Practices: 100
- ✅ SEO: 100

---

## 📞 Support

If you encounter issues:

1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed guide
2. Check [BEST_PRACTICES.md](./BEST_PRACTICES.md) for checklist
3. Review [GitHub Actions logs](https://github.com/niniverse/web/actions)
4. Create an issue: https://github.com/niniverse/web/issues

---

## 🎉 Success!

Once deployed, share your site:
- **Live URL**: https://niniverse.github.io/web/
- **Repository**: https://github.com/niniverse/web

The site is now:
- ✅ Branded with Niniverse colors and style
- ✅ Optimized for performance
- ✅ SEO-ready
- ✅ Accessible (WCAG 2.1 AA)
- ✅ Auto-deploying on every push
- ✅ World-class static site ready for production

---

**Last Updated:** 2025-01-14
