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
│   ├── styles/             # Base, section, and responsive styles
│   ├── App.vue             # Page composition
│   └── main.js             # Vue entry point and style imports
├── index.html
└── vite.config.js
```

Update project descriptions and skills in `src/data/portfolio.js`. Edit the relevant component for biography, experience, or contact content. Replace the CV at `public/Kong-Bunyim-CV.pdf` and the images under `public/images/` when needed.

The Samai visual is an existing screenshot. The Nexora and Smart Locker visuals are labeled CSS mockups, so they do not imply screenshots of finished pages.
