# Kirtan Portfolio Website — Vercel Deployment

## What changed
- Rebuilt the UI to match the attached executive portfolio screenshot.
- Added Vite configuration.
- Added Vercel configuration with `npm run build` and `dist` output.
- Added a cropped headshot asset under `public/assets/kirtan-headshot.png`.

## Local test
```bash
npm install
npm run dev
npm run build
```

## Deploy through GitHub + Vercel
1. Replace the existing project files with this package.
2. Commit and push to the `main` branch.
3. In Vercel Project Settings:
   - Framework Preset: Vite
   - Install Command: npm install
   - Build Command: npm run build
   - Output Directory: dist
4. Trigger a redeploy.

## Optional asset
Place your PDF resume at:
`public/Kirtan-Dave-CV.pdf`

The Download CV button already points to this path.
