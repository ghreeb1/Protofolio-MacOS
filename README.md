# Protofolio macOS

Portfolio website that recreates the macOS desktop experience to highlight AI & ML projects built by **Mohamed Khaled**. The interface mimics Finder, Dock, Control Center, FaceTime, Typora, Music, and more while remaining a standard React/Vite app that can be deployed anywhere.

![Screenshot](./public/screenshots/light.png)

---

## ✨ Features

- macOS-like window manager (drag, resize, dock, snap).
- Multiple built-in “apps” (Finder, Safari, FaceTime, Music, Resume, Typora, Settings).
- Dynamic themes, wallpapers, dock customization, battery indicator, and sound effects.
- Markdown-based content system for case studies and blog-style documents.
- Zustand-powered state for desktop/session persistence across reloads.
- UnoCSS + CSS Modules for light footprint theming.

---

## 🗂 Project Structure

```
├── public/               # Static assets, markdown, manifest
├── src/
│   ├── components/       # Dock, windows, status bar, etc.
│   ├── configs/          # App metadata, dock layout, menu definitions
│   ├── hooks/            # Desktop/window/keyboard hooks
│   ├── pages/            # High-level app shells (Desktop, Login, etc.)
│   ├── stores/           # Zustand stores for UI state
│   ├── styles/           # Global CSS + font faces
│   ├── types/            # Shared TypeScript types
│   └── utils/            # Helpers (formatters, animation, shortcuts)
├── dist/                 # Production build (generated)
└── README.md
```

---

## 🛠 Tech Stack

- `React 18` + `TypeScript`
- `Vite` for dev/build tooling
- `Zustand` for state management
- `UnoCSS` + CSS Modules for styling
- `ESLint` + `TypeScript` configs for quality

---

## 🚀 Getting Started

### Requirements

- Node.js ≥ 18
- pnpm (preferred) or npm/yarn

### Installation

```bash
pnpm install
```

### Available Scripts

| Command        | Description                                |
| -------------- | ------------------------------------------ |
| `pnpm dev`     | Start Vite dev server with HMR             |
| `pnpm build`   | Production build into `dist/`              |
| `pnpm preview` | Preview the production build locally       |
| `pnpm lint`    | Run ESLint using the project configuration |

---

## 🧩 Customization Guide

- **Apps**: Update metadata inside `src/configs/apps.ts` (icon, bundle id, window size, component).
- **Dock & Menu**: Edit `src/configs/dock.ts` and `src/configs/menu.ts`.
- **Content**: Markdown documents live under `public/markdown`. Reference them from Typora/Notes apps via configs.
- **Profiles**: Update profile data in `src/configs/profile.ts` (name, title, badges, links).
- **Assets**: Replace screenshots, wallpapers, and logos in `public/img` or `public/logo`. Keep file names when possible to avoid cache busting.

---

## 🧪 Testing Recommendations

While this repo ships without tests, the following setup is recommended:

1. **Component Tests**: `@testing-library/react` for Dock, Window controls, and app launch behavior.
2. **Integration Tests**: Cypress/Playwright to exercise drag-and-drop, theme switching, and markdown rendering.
3. **State Tests**: Unit-test Zustand stores to verify persistence and edge cases (max windows, z-index).

Add scripts such as `pnpm test` once the test runner is configured.

---

## 🔒 Security & Performance Notes

- All dynamic content is local markdown; sanitize any external data before rendering.
- Use lazy loading for heavy apps (FaceTime, Music) if the bundle grows.
- When deploying behind a sub-path, update `vite.config.ts` `base` option.

---

## 📦 Deployment

1. Build: `pnpm build`
2. Serve `dist/` with any static host (Vercel, Netlify, GitHub Pages, S3).
3. Ensure correct MIME types for fonts (`.woff`, `.woff2`) on the hosting platform.

---

## 👤 Author

**Mohamed Khaled**  
AI & Machine Learning Specialist  
[LinkedIn](https://www.linkedin.com/in/mohamed-khaled-3a9021263) · [GitHub](https://github.com/ghreeb1) · [Email](mailto:qq11gharipqq11@gmail.com)

---

## 📝 License

Released under the [MIT License](./LICENSE). Feel free to fork, customize, and deploy your own macOS-style portfolio.
