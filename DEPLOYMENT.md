# Niniverse Deployment Guide

## Overview
This guide covers deployment of the Niniverse static website to GitHub Pages.

## Prerequisites
- Node.js 20.x or higher
- npm (comes with Node.js)
- Git

## Local Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Visit http://localhost:5000

### Build for Production (GitHub Pages)
```bash
npm run build:github
```
This creates a production build in the `/docs` folder with:
- Optimized images (WebP format)
- Minified JavaScript and CSS
- Code splitting for better performance
- Relative paths for GitHub Pages compatibility

### Preview Production Build
```bash
npm run preview:github
```

## GitHub Pages Deployment

### Automated Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `main` branch.

**Setup Steps:**

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings > Pages**
   - Under "Build and deployment":
     - Source: **GitHub Actions**

2. **Push to Main Branch:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Monitor Deployment:**
   - Go to the **Actions** tab in your repository
   - Watch the "Deploy to GitHub Pages" workflow
   - Once complete, your site will be live at: `https://niniverse.github.io/web/`

### Manual Deployment

If you prefer manual deployment:

1. **Build the site:**
   ```bash
   npm run build:github
   ```

2. **Commit the docs folder:**
   ```bash
   git add docs/
   git commit -m "Build static site for GitHub Pages"
   git push origin main
   ```

3. **Configure GitHub Pages:**
   - Go to **Settings > Pages**
   - Under "Build and deployment":
     - Source: **Deploy from a branch**
     - Branch: **main**
     - Folder: **/docs**
   - Click **Save**

## Testing

### Run All Tests
```bash
npm test
```

This runs:
- Build test (ensures the build completes successfully)
- Link validation (TODO: implement link checker)
- Accessibility tests (TODO: implement a11y testing)

### Individual Test Scripts
```bash
npm run test:build          # Test build process
npm run test:links          # Validate internal/external links
npm run test:accessibility  # Check WCAG compliance
npm run test:performance    # Run Lighthouse tests
```

## Performance Optimization

The build includes:
- ✅ Image optimization (WebP conversion)
- ✅ Code splitting (separate chunks for React and UI components)
- ✅ Minification (Terser)
- ✅ Tree shaking
- ✅ Font preloading
- ✅ Relative paths for GitHub Pages

## SEO Features

- ✅ Semantic HTML
- ✅ Meta tags (Open Graph, Twitter Cards)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ PWA manifest
- ✅ Structured data (TODO: add JSON-LD)

## Accessibility

The site follows WCAG 2.1 AA guidelines:
- ✅ Semantic HTML elements
- ✅ ARIA labels where needed
- ✅ Keyboard navigation
- ✅ Color contrast ratios
- ✅ Responsive design
- ✅ Focus indicators

## Troubleshooting

### Build Fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build:github
```

### Assets Not Loading
- Ensure `base: './'` is set in `vite.config.github.ts`
- Check that all asset paths use relative imports
- Verify the routing uses hash-based navigation (`useHashLocation`)

### GitHub Pages 404
- Ensure the `/docs` folder is committed to the repository
- Check that GitHub Pages is configured correctly in Settings
- Wait 1-2 minutes for deployment to complete

### Images Not Optimized
```bash
# Run image optimization manually
npm run optimize:images
npm run build:github
```

## Updating Content

Content is stored in JSON files:
- English: `src/client/public/en.json`
- Georgian: `src/client/public/ka.json`

After editing:
```bash
npm run build:github
git add docs/
git commit -m "Update content"
git push origin main
```

## Environment Variables

No environment variables are required for the static build. All configuration is in:
- `package.json` - Build scripts and metadata
- `vite.config.github.ts` - Build configuration
- `tailwind.config.ts` - Styling configuration

## Branching Strategy

- `main` - Production branch (auto-deploys to GitHub Pages)
- `develop` - Development branch for testing changes
- Feature branches - `feature/feature-name`

## Monitoring

After deployment:
1. Check the live site: https://niniverse.github.io/web/
2. Run Lighthouse audit in Chrome DevTools
3. Test on multiple devices and browsers
4. Verify analytics (if configured)

## Support

For issues or questions:
- Check the [GitHub Issues](https://github.com/niniverse/web/issues)
- Review this deployment guide
- Contact the maintainer

---

Built with ❤️ for Niniverse
