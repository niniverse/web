# Niniverse - Visual Storytelling & Creative Education

A beautiful, modern bilingual static profile website showcasing **Niniverse** - a personal universe of visual storytelling, education, and aesthetics by **Nini Chaladze**, Georgian visual storyteller and creative educator.

> **Repository:** https://github.com/niniverse/web
> **Live Site:** https://niniverse.github.io/web/

## 🌟 Features

### Core Functionality
- 🌍 **Bilingual Support** - Seamless English/Georgian language switching
- 🎨 **Niniverse Branding** - Warm cappuccino, terracotta, and coffee brown palette
- 📱 **Fully Responsive** - Perfect on all devices (mobile, tablet, desktop)
- 🌓 **Dark/Light Theme** - Complete theme support with smooth transitions
- 🖼️ **Portfolio Gallery** - Beautiful showcase of visual work
- ✉️ **Contact Section** - Professional contact integration

### Technical Excellence
- ⚡ **Lightning Fast** - Optimized build with code splitting and lazy loading
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🔍 **SEO Optimized** - Meta tags, sitemap, structured data ready
- 📦 **PWA Ready** - Progressive Web App capabilities
- 🚀 **CI/CD** - Automated deployment via GitHub Actions
- 🎯 **Type Safe** - Built with TypeScript and React

## 🚀 Quick Start

### Prerequisites
- Node.js 20.x or higher
- npm (comes with Node.js)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/niniverse/web.git
cd web

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:5000

### Building for Production

```bash
# Build for GitHub Pages
npm run build:github

# Preview production build
npm run preview:github
```

## 📦 Deployment

### Automated Deployment (Recommended)

This project uses GitHub Actions for automatic deployment:

1. **Push to main branch:**
   ```bash
   git push origin main
   ```

2. **GitHub Actions will automatically:**
   - Build the site
   - Run tests
   - Deploy to GitHub Pages

3. **Monitor deployment:**
   - Go to **Actions** tab on GitHub
   - Watch the "Deploy to GitHub Pages" workflow

**Live URL:** https://niniverse.github.io/web/

### Manual Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📝 Content Management

### Updating Content

Content is managed through JSON files:
- English: [src/client/public/en.json](src/client/public/en.json)
- Georgian: [src/client/public/ka.json](src/client/public/ka.json)

After editing content:
```bash
npm run build:github
git add docs/ src/client/public/
git commit -m "Update content"
git push origin main
```

Changes will be live in 1-2 minutes!

## 🧪 Testing

```bash
# Run all tests
npm test

# Individual test suites
npm run test:build          # Build verification
npm run test:links          # Link validation (TODO)
npm run test:accessibility  # A11y testing (TODO)
npm run test:performance    # Lighthouse tests (TODO)
```

## 📁 Project Structure

```
niniverse/web/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions CI/CD
├── src/
│   ├── assets/                  # Images and static assets
│   ├── client/
│   │   ├── public/
│   │   │   ├── en.json          # English content
│   │   │   ├── ka.json          # Georgian content
│   │   │   ├── manifest.json    # PWA manifest
│   │   │   ├── robots.txt       # SEO crawler instructions
│   │   │   └── sitemap.xml      # SEO sitemap
│   │   ├── src/
│   │   │   ├── components/      # React components
│   │   │   │   └── ui/          # shadcn/ui components
│   │   │   ├── contexts/        # React contexts (Language, Theme)
│   │   │   ├── hooks/           # Custom React hooks
│   │   │   ├── lib/             # Utilities and helpers
│   │   │   ├── pages/           # Page components
│   │   │   ├── App.tsx          # Main app component
│   │   │   ├── index.css        # Global styles & theme
│   │   │   └── main.tsx         # App entry point
│   │   └── index.html           # HTML template
│   └── scripts/                 # Build scripts
├── docs/                        # Built static files (GitHub Pages)
├── DEPLOYMENT.md                # Deployment guide
├── BEST_PRACTICES.md            # Best practices checklist
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite dev config
└── vite.config.github.ts        # Vite production config
```

## 🎨 Design System

### Brand Colors
- **Primary**: Warm cappuccino/terracotta `hsl(16 50% 58%)`
- **Accent**: Coffee brown `hsl(25 45% 50%)`
- **Secondary**: Creamy beige `hsl(30 20% 88%)`

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, clean)
- **Mono**: Menlo (code/technical)

### Brand Values
- Authentic and warm
- Intellectual aesthetics
- Calm and inspiring
- Professional yet approachable

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **UI Components**: shadcn/ui + Radix UI
- **Routing**: Wouter (hash-based for GitHub Pages)
- **State Management**: React Context + TanStack Query
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages + GitHub Actions

## 📚 Documentation

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Comprehensive deployment guide
- [BEST_PRACTICES.md](./BEST_PRACTICES.md) - Best practices and checklist
- [docs/ASSETS_TODO.md](./docs/ASSETS_TODO.md) - Logo and favicon setup guide

## 🤝 Contributing

This is a personal portfolio site, but suggestions and bug reports are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this as inspiration for your own portfolio!

## 📧 Contact

**Nini Chaladze**
- Website: https://niniverse.github.io/web/
- GitHub: [@niniverse](https://github.com/niniverse)

---

Built with ❤️ in Georgia 🇬🇪 | Niniverse © 2025
