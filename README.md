# Hussain Ammar — Developer Portfolio

A personal, responsive portfolio for Hussain Ammar, a Python developer in Hyderabad. Built with React, TypeScript, and Vite, with an illustrated avatar, editorial project cards, subtle motion, and an interactive portfolio Q&A assistant.

## Requirements

- Node.js 20.19+ or 22.12+ (Vite 8 requirement)
- npm

## Getting started

```sh
npm install
npm run dev
```

Vite prints a local URL—usually `http://localhost:5173`—when the development server is ready.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server with hot reloading |
| `npm run build` | Type-check the TypeScript projects and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint on the project |

## What’s included

- **Intro and about:** An opportunity-status label, biography, location, graduation year, and CGPA based on the supplied resume.
- **Selected work:** Three resume-based projects: calorie estimation from food images, gold-price analysis, and house-price prediction. Project photography is illustrative; the descriptions and technology labels describe the actual projects.
- **Technical toolkit:** Grouped programming languages, frameworks, data and web technologies, and familiar tools.
- **Contact:** WhatsApp conversation links, a direct email link, GitHub, and LinkedIn.
- **Illustrated avatar:** `public/avatar.svg` is an original, locally served monogram illustration rather than a stock photo presented as Hussain’s real likeness.
- **Responsive layout and motion:** A dark, high-contrast visual style with electric-green accents, floating hero details, subtle avatar animation, scroll reveals, responsive layouts, and reduced-motion support.
- **Portfolio chat:** An interactive, client-side Q&A based only on the portfolio’s included profile, projects, skills, and education. It requires no API key or external chat service and does not send messages to a server. Replies are selected from the local information in `getAnswer` in `src/data/portfolio.ts`.

## Component structure

`src/App.tsx` composes the page from focused components:

| Component | Responsibility |
| --- | --- |
| `Header` | Brand, navigation, and email link |
| `Hero` | Introductory headline and portrait |
| `AboutSection` | Biography and education highlights |
| `ProjectsSection` / `ProjectCard` | Project list and reusable project card |
| `SkillsSection` | Grouped technical skills |
| `ContactSection` | Email and social links |
| `Footer` | Portfolio footer and back-to-top link |
| `ChatWidget` | Interactive portfolio Q&A |
| `SectionKicker`, `SectionHeading`, `ArrowIcon` | Shared presentation components |

Content used across components lives in `src/data/portfolio.ts`. Global component and responsive styles remain in `src/App.css`.

## Updating the portfolio

- Edit the shared profile, project cards, skill groups, and chat answers in `src/data/portfolio.ts`.
- Update section content in the corresponding component under `src/components/`.
- Replace the monogram avatar in `public/avatar.svg` with an approved portrait if desired.
- Project images use Unsplash image URLs; replace the `image` fields in `src/data/portfolio.ts` with your own local or hosted project screenshots.
- Update email, WhatsApp, and social-profile URLs in the `profile` object in `src/data/portfolio.ts` when your contact information changes. Keep the chat answers and visible portfolio content consistent.
- Global colors, fonts, and page defaults are in `src/index.css`; layout, responsive breakpoints, and animation styles are in `src/App.css`.
- The page title and search/social metadata are set in `index.html`.

## Image and font loading

The avatar is served locally. Project photographs are loaded from Unsplash, and the typography is loaded from Google Fonts; those optional visuals require an internet connection. If either external service is unavailable, the page retains its local layout, text, and background colors.

## Build and deployment

Run `npm run build` to produce the static site in `dist/`. A GitHub Actions workflow in `.github/workflows/deploy.yml` builds the project and publishes it to GitHub Pages whenever changes are pushed to `main`. Once Pages is enabled for the repository, the site URL is `https://hussainammar123.github.io/portfolio-website2/`.

The resume PDF is intentionally excluded from Git using `.gitignore`. Because this site uses no server-side routes, forms, environment secrets, or external AI API, no application backend configuration is required.
