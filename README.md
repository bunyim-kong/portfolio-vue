# Kong Bunyim Portfolio (Vue)

A standalone Vue 3 portfolio built with Vite. This project lives beside the original static portfolio in `../portfolio`; the two sites do not share code.

## Start

```bash
npm install
npm run dev
```

`npm run build` creates the production site in `dist/`. `npm run preview` serves that build locally. `npm run format` formats the source files with Prettier.

## Structure

```text
portfolio-vue/
├── public/                 # CV, favicon, and images copied into the build
├── src/
│   ├── components/         # Page sections, navigation, and project card
│   ├── data/portfolio.js   # Project and skill content
│   ├── styles/             # portfolio.css: theme, layout, and responsive styles
│   ├── App.vue             # Page composition
│   └── main.js             # Vue entry point and stylesheet import
├── index.html
└── vite.config.js
```

Update project descriptions and skills in `src/data/portfolio.js`. Edit the relevant component for biography, experience, or contact content. Replace the CV at `public/Kong-Bunyim-CV.pdf` and the images under `public/images/` when needed.

## Design and themes

The portfolio uses a warm neutral palette, orange accents, and a shared set of theme variables in `src/styles/portfolio.css`. The header toggle switches between light and dark themes. The first visit follows the device preference; a chosen theme is saved under `portfolio-theme` in local storage. Theme initialization runs before the page renders to avoid a flash of the wrong theme.

## Projects

The selected work includes five public GitHub Pages websites verified on October 1, 2026: LMLP Tourism, Apple Real Estate, X-Tra Interior, Cafe Shop, and Khmer Organic. Each has a live website link and a repository link. Samai Rum Map has a source link and uses the existing application screenshot.

Project images were downloaded from the corresponding published websites into `public/images/project-*`. They are images used by those websites, rather than full-page screenshots. Live links and repository URLs are maintained in `src/data/portfolio.js`.
