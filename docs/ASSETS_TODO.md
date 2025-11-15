# Assets TODO - Favicon and Logo Setup

## Required Assets

To complete the Niniverse branding, the following image assets need to be created and added:

### Favicon Files
Place these in `src/client/public/`:

1. **favicon.ico** (32x32, 16x16)
   - Traditional favicon for older browsers
   - Should feature the Niniverse logo or "N" mark
   - Colors: Use brand terracotta (#D47855) or coffee brown

2. **favicon.svg** (vector)
   - Scalable SVG favicon for modern browsers
   - Recommended for best quality across all sizes

3. **apple-touch-icon.png** (180x180)
   - For iOS home screen bookmarks
   - Should have the logo on a transparent or branded background

### PWA Icons
Place these in `src/client/public/`:

4. **icon-192.png** (192x192)
   - Android Chrome PWA icon
   - Should work on light and dark backgrounds

5. **icon-512.png** (512x512)
   - High-resolution PWA icon
   - Maskable icon format recommended

### Open Graph Image
Place in `src/client/public/`:

6. **og-image.png** (1200x630)
   - For social media sharing (Facebook, LinkedIn, etc.)
   - Should include:
     - "Niniverse" text in Playfair Display
     - Tagline: "Visual Storytelling & Creative Education"
     - Brand colors: terracotta, coffee, cream
     - Optional: Nini's photo or brand graphic

### Logo Files (Optional but Recommended)
Place in `src/assets/`:

7. **logo.svg**
   - Main logo in SVG format
   - For use in header/footer

8. **logo-light.svg** and **logo-dark.svg**
   - Versions optimized for light/dark themes

## Design Guidelines

### Colors
Use the Niniverse brand palette:
- **Primary**: Warm terracotta/cappuccino (#D47855 or hsl(16 50% 58%))
- **Accent**: Coffee brown (#8B6F47 or hsl(25 45% 50%))
- **Backgrounds**: Cream, warm beige (#F5F2ED)
- **Text**: Deep brown for contrast

### Typography
- **Headings/Logo**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Style
- Minimal and elegant
- Warm and approachable
- Modern yet timeless
- Authentic and sincere

## Implementation Steps

Once assets are created:

1. **Add favicon links to HTML** (`src/client/index.html`):
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

2. **Update manifest.json** with correct icon paths:
```json
"icons": [
  {
    "src": "/icon-192.png",
    "type": "image/png",
    "sizes": "192x192",
    "purpose": "any maskable"
  },
  {
    "src": "/icon-512.png",
    "type": "image/png",
    "sizes": "512x512",
    "purpose": "any maskable"
  }
]
```

3. **Add Open Graph image**:
```html
<meta property="og:image" content="https://niniverse.github.io/web/og-image.png">
<meta name="twitter:image" content="https://niniverse.github.io/web/og-image.png">
```

4. **Rebuild and test**:
```bash
npm run build:github
npm run preview:github
```

## Tools for Creating Assets

### Favicon Generators
- [Favicon.io](https://favicon.io/) - Generate from text, image, or emoji
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Comprehensive favicon package

### Image Editors
- [Figma](https://figma.com) - Professional design tool (recommended)
- [Canva](https://canva.com) - Easy-to-use design tool
- [GIMP](https://www.gimp.org/) - Free alternative to Photoshop

### SVG Editors
- [Inkscape](https://inkscape.org/) - Free vector graphics editor
- [Boxy SVG](https://boxy-svg.com/) - Simple SVG editor

## Temporary Solution

Until proper brand assets are created, you can:

1. Generate a simple favicon from text using [Favicon.io](https://favicon.io/favicon-generator/):
   - Text: "N" or "NV"
   - Background: #D47855 (terracotta)
   - Font: Playfair Display
   - Shape: Circle or square with rounded corners

2. Create a simple OG image in Canva:
   - Use a template for "Social Media Post"
   - Add "Niniverse" in large text
   - Use brand colors
   - Export as 1200x630 PNG

---

**Priority:** Medium
**Estimated Time:** 2-4 hours for professional assets
**Skills Needed:** Graphic design, branding knowledge
