# tvergho.me

A single static page. Astro builds it; PostHog provides browser analytics.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve dist/
```

## Layout

```
src/
  data/site.ts        title and description
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

## Fonts

EB Garamond is self-hosted from `public/fonts/` (latin subset, weights 400 and
500 plus 400 italic), so the page makes no third-party requests.

The files are **not** taken from Google Fonts or `@fontsource`. Those builds are
subsetted with the OpenType layout features stripped — no `smcp`/`c2sc` (small
caps) and no `onum` (oldstyle figures), both of which this page uses. Asking
for them anyway just makes the browser synthesise small caps by shrinking
capitals, which comes out visibly thin and mismatched.

Instead `scripts/build-fonts.sh` pulls the upstream OTFs from
[octaviopardo/EBGaramond12](https://github.com/octaviopardo/EBGaramond12)
(OFL-1.1) and subsets them here, keeping the features we use. The resulting
`.woff2` files are committed, so a normal build never touches the network:

```bash
npm run build:fonts   # only needed to pick up an upstream font revision
```

It needs `fonttools` with brotli (`pip install fonttools brotli`). Real small
caps cost about 25 KB more across the three faces than the stripped builds —
the italic is subsetted without them, since no acronyms are set in italic.

## Adding /writing later

A writing section is planned. Nothing is built or linked yet.
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

- Paths from the old site are not served; they 404 by design.
- PostHog runs only on `tvergho.com` and `www.tvergho.com` in production builds.
- Tracks pageviews, page leaves, and explicitly tagged project/contact/social links.
- Session replay, automatic click capture, surveys, and person profiles are disabled.
- IDs use session storage rather than persistent cookies; repeat visits across sessions are not linked.
- The browser project key is public by design. The ingestion host is the US region.
- Add `data-analytics-event` and `data-analytics-destination` to new links to track them.
- No résumé download is currently present; tag one when it is added.
