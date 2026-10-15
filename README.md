# Zak Guide

A responsive website for private tours and cultural adventures in Kyrgyzstan.

## Local development

Requirements: Node.js 22 or later and npm.

```sh
npm install
npm run dev
```

## Build and test

```sh
npm run build
npm test
npm run lint
```

The production site is a static client-side application and can be hosted on GitHub Pages. The GitHub Actions workflow builds the app and publishes the generated `dist/` directory automatically.

## GitHub Pages setup

In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. The workflow in `.github/workflows/deploy-pages.yml` deploys the site from the `main` branch and can also be run manually.
