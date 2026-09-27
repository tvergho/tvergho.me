# tvergho.me

A single static page. Astro builds it; no JavaScript is shipped to the browser.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve dist/
```

## Layout

```
src/
  data/site.ts        title, description, and the colophon's "last revised" date
  layouts/Base.astro  <head>, metadata, font preload
  pages/index.astro   the page copy
  pages/404.astro
  styles/global.css   @font-face, theme tokens, type scale, print styles
public/
  fonts/              EB Garamond, self-hosted (see below)
  favicon.svg         a "T", ink on paper, theme-aware
```

Editing copy means editing `src/pages/index.astro`. Editing the look means
editing the tokens at the top of `src/styles/global.css`.

## Colophon date

`site.lastRevised` in `src/data/site.ts` is the date in the colophon. It tracks
when the *content* changed, not when the site was built — update it by hand when
you edit the copy.

## Fonts

EB Garamond is self-hosted from `public/fonts/` (latin subset, weights 400 and
500 plus 400 italic), so the page makes no third-party requests. The files are
committed so a fresh clone builds without a network fetch. To refresh them after
bumping `@fontsource/eb-garamond`:

```bash
npm run sync-fonts
```

## Adding /writing later

The spec calls for a writing section eventually. Nothing is built or linked yet.
When it's time:

1. `npx astro add mdx` (or use plain `.md`).
2. Define a `writing` collection in `src/content.config.ts` with a glob loader
   over `src/content/writing/`.
3. Add `src/pages/writing/index.astro` and `src/pages/writing/[...slug].astro`,
   both wrapped in `Base.astro`.
4. Add prose styles to `global.css` — the tokens and type scale are already
   there; a writing page mostly needs headings, lists, and blockquotes.

`Base.astro` takes `title` and `description` props so new pages get correct
metadata without touching the layout.

## Notes

- The old Next.js site is gone. `/resume.pdf`, `/scribble/scribble.html`, and
  `/deepfakes-poster.pdf` now 404 by design; the old résumé is not carried over.
- No analytics.
