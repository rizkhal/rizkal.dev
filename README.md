# rizkal.lamaau.space

Personal developer portfolio and blog — built with [Astro](https://astro.build) v7 and [Tailwind CSS](https://tailwindcss.com) v3.

## Tech Stack

- **Framework** — Astro v7 (static site generation)
- **Styling** — Tailwind CSS v3 + `@tailwindcss/typography`
- **Font** — Geist (CDN), Geist Mono for code
- **Content** — Markdown/MDX with Astro Content Collections
- **Search** — Pagefind (static search index)
- **Icons** — Astro Icon + Material Design Icons
- **Syntax Highlighting** — Expressive Code
- **Deployment** — Static export (`dist/`)

## Getting Started

```bash
# install dependencies
pnpm install

# start dev server
pnpm dev

# build for production
pnpm build

# preview production build
pnpm preview
```

## Project Structure

```
src/
├── components/
│   ├── blog/         # Blog-specific (Hero, PostPreview, TOC)
│   └── layout/       # Layout components (Header, Footer)
├── data/
│   ├── post.ts       # Blog post data helpers
│   └── projects.ts   # Projects data
├── layouts/          # Base and BlogPost layouts
├── pages/            # Route pages
│   ├── posts/        # Blog listing
│   ├── projects/     # Projects listing
│   └── tags/         # Tag pages
├── styles/
│   └── global.css    # Geist fonts, HSL tokens, glass/card utilities
└── utils/            # scrollReveal, generateToc, date formatting
```

## Design System

- **Accent** — Emerald (HSL 160deg)
- **Theme** — Light/dark via `data-theme` attribute
- **Cards** — Double-bezel pattern (`.card-outer` / `.card-inner`)
- **Glass** — `.glass` / `.glass-strong` with backdrop blur
- **Motion** — IntersectionObserver-based scroll reveal (`.reveal` / `.revealed`), GPU-accelerated transforms only
- **Typography** — Geist (sans), Geist Mono (mono), 0.6875rem uppercase eyebrows

## Customization

Edit `src/site.config.ts` for site metadata and navigation links.

Update `src/data/projects.ts` to add or modify projects.
