# Cleanup Plan - Remove Old React Files

## Files to DELETE (Old React/Build Stuff)

### Config Files (Not Needed Anymore)
```bash
rm components.json           # shadcn/ui config
rm drizzle.config.ts        # Database config (not used)
rm postcss.config.js        # PostCSS config
rm tailwind.config.ts       # Tailwind config
rm tsconfig.json            # TypeScript config
rm vite.config.ts           # Vite dev config
rm vite.config.github.ts    # Vite build config
rm .replit                  # Replit config
```

### Folders to DELETE
```bash
rm -rf static/              # Backup folder (not needed)
rm -rf src/                 # Old React source
rm -rf documentation/       # Old docs
rm -rf .vs/                 # Visual Studio cache
rm -rf .github/             # GitHub Actions (old build workflow)
```

### Documentation to DELETE (Too Many!)
Keep only the essential ones, delete the rest:
```bash
# KEEP these:
# - README.md (main readme)
# - START_HERE.md (quick start)

# DELETE these (redundant):
rm BEST_PRACTICES.md        # Not needed for vanilla site
rm CLEAN_README.md          # Duplicate
rm DEPLOYMENT.md            # Covered in START_HERE
rm GITHUB_PAGES_SETUP.md    # Covered in START_HERE
rm SIMPLE_DEPLOY.md         # Duplicate
rm SIMPLIFIED.md            # Duplicate
rm SUMMARY.md               # Old React summary
rm VANILLA_SOLUTION.md      # Redundant
rm YOUTUBE_ADDED.md         # Covered in docs/YOUTUBE_SETUP.md
```

---

## Files to KEEP

### Essential
- ✅ `docs/` - Your live site!
- ✅ `README.md` - Main documentation
- ✅ `START_HERE.md` - Quick start guide
- ✅ `package.json` - Simple scripts
- ✅ `.gitignore` - Git config
- ✅ `.git/` - Git repository
- ✅ `LICENSE` - Your license

### Optional
- `.claude/` - Claude Code settings (safe to keep)

---

## Automated Cleanup Script

Want me to create a script to do this automatically?

```bash
# cleanup.sh
#!/bin/bash

echo "🧹 Cleaning up old React files..."

# Remove config files
rm -f components.json drizzle.config.ts postcss.config.js
rm -f tailwind.config.ts tsconfig.json
rm -f vite.config.ts vite.config.github.ts .replit

# Remove folders
rm -rf static/ src/ documentation/ .vs/ .github/

# Remove redundant docs
rm -f BEST_PRACTICES.md CLEAN_README.md DEPLOYMENT.md
rm -f GITHUB_PAGES_SETUP.md SIMPLE_DEPLOY.md SIMPLIFIED.md
rm -f SUMMARY.md VANILLA_SOLUTION.md YOUTUBE_ADDED.md

echo "✅ Cleanup complete!"
echo ""
echo "Remaining files:"
ls -la
```

---

## After Cleanup

Your repo will have:
```
niniverse/web/
├── docs/                    # Your live site ✨
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   ├── youtube-config.js
│   └── YOUTUBE_SETUP.md
├── .git/                    # Git repo
├── .gitignore              # Git config
├── package.json            # Simple scripts
├── README.md               # Main docs
├── START_HERE.md           # Quick start
└── LICENSE                 # License
```

**Clean and simple!**

---

## Want Me to Do It?

I can run the cleanup for you, or you can review and delete manually.

Which would you prefer?

1. **Automated** - I'll delete everything listed above
2. **Manual** - You review and delete what you want
3. **Skip** - Keep everything as-is
