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
Build output is generated in `docs/` for GitHub Pages.

## GitHub Pages deployment (main + /docs)
This site is deployed with GitHub Pages from the `/docs` folder on the `main` branch.

Steps:
```bash
npm install
npm run build
git add -A
git commit -m "Rebuild docs"
git push
```

GitHub settings:
Repo Settings -> Pages -> Source: Deploy from a branch -> Branch: main -> Folder: /docs

Site URL:
https://robjevans.github.io/TailorDemo/

### Subpath hosting
The Vite base path is set for subpath hosting:
- Update `vite.config.ts` if your repo name changes.
- Example: `base: "/TailorDemo/"`.

## Demo video
Place a local demo video at:
- `public/TailorDemo2.mp4`

The Demo section will automatically load this file. You can also swap the video element for an embed if preferred.
