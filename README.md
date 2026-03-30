# SeboTech Portfolio

Premium, high-performance static portfolio website for a Full-Stack Software Engineer specializing in .NET and Flutter.

## Tech Stack

- **Framework**: Astro 6.x (Static Site Generator)
- **Language**: TypeScript (strict mode)
- **Styling**: CSS Variables with modular architecture
- **Deployment**: Static hosting ready

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (Button, Card, etc.)
│   └── layout/       # Layout components (Header, Footer, etc.)
├── styles/           # Global styles and CSS variables
├── content/          # Content collections
├── assets/           # Images and static assets
└── pages/            # Route pages (index, about, projects, etc.)
```

## Architecture

- Clean Code principles - small, modular files
- Single Responsibility Principle for components
- Performance-first design (100/100 Lighthouse target)

## Commands

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `npm run dev`  | Start development server at localhost:4321 |
| `npm run build`| Build production site to ./dist/           |
| `npm run lint` | Run Astro type checking                    |
| `npm run preview` | Preview production build locally        |

## Performance Targets

- Lighthouse Performance: 100
- First Contentful Paint: < 1s
- Total Blocking Time: < 50ms
- Cumulative Layout Shift: < 0.1

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## License

Proprietary - SeboTech
