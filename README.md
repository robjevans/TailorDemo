# Tailor Investor Site

Premium one-page investor site for Tailor. Built with Vite, React, TypeScript, and TailwindCSS for a fully static deploy.

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## GitHub Pages deployment (GitHub Actions)
This repo includes a GitHub Actions workflow that builds the site and deploys the `dist` folder to GitHub Pages.

1) Set the repo to use GitHub Actions for Pages:
   - GitHub repo settings → Pages → Source: "GitHub Actions".
2) Push to the `main` branch.
3) The workflow builds and deploys automatically.

### Subpath hosting
The Vite base path is set for subpath hosting:
- Update `vite.config.ts` if your repo name changes.
- Example: `base: "/tailor-investor-site/"`.

## Demo video
Place a local demo video at:
- `public/TailorDemo2.mp4`

The Demo section will automatically load this file. You can also swap the video element for an embed if preferred.
