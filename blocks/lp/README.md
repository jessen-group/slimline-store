# Landing Page (`lp`) Block

## Overview

The `lp` block renders the D-Line marketing landing page as **hardcoded markup** (vanilla DOM in `lp.js`, styles in `lp.css`). It mirrors the Figma frame **Desktop - 4** (marketing hero, offer grid, trusted-by strip, industry solutions, pre-footer CTA, and in-block footer). It is **not** driven by authored table cells; authors only place the block on a page (typically `/lp`).

## Configuration options

No runtime configuration from the block table. Copy, structure, and image URLs are defined in **`lp.js`** (`ASSETS`, section builders). To change content or visuals, edit that module (and `lp.css` as needed).

Document Authoring exposes the block as **Landing Page (D-Line)** via **`_lp.json`** (1×1 placeholder grid).

## Integration

### Page chrome

On decorate, the block adds **`lp-page`** to `document.body`. **`lp.css`** hides the default site `<header>` and the shell `<footer>` at the end of `<body>` so the layout matches the full-page design. The marketing footer is a **`<div class="lp-footer" role="contentinfo">`** (not a `<footer>` tag) so `scripts.js` `loadFooter()` targets **`body > footer`** only and does not inject the Commerce footer fragment into the LP layout.

### Fonts

Montserrat is loaded from Google Fonts when the block decorates (`link` in `<head>`).

### Anchors and links

| Target | Purpose |
|--------|---------|
| `#lp-offer` | What we offer section |
| `#lp-trusted` | Trusted by section |
| `#lp-industry` | Industry solutions section |
| `#lp-contact` | Pre-footer CTA section |

Primary phone: **`tel:1300658808`** (aligned with nav / CTAs).

Footer legal links point to **`/privacy-policy`** and **`/terms-of-use`** (adjust if your site uses different paths).

### Commerce / drop-ins

This block does **not** mount Commerce drop-ins. Global scripts may still initialize commerce on the page; that is outside this block.

### URL parameters

None.

### Local storage

None.

### Events

None emitted or subscribed by this block.

## Behavior patterns

1. **Decorate**: Clears placeholder rows, builds sections under `.lp-layout`.
2. **Navigation**: Sticky in-block nav on large viewports; nav links hidden below the desktop breakpoint (logo, phone, primary CTA remain).
3. **Images**: Hero uses `loading="eager"`; other images lazy-load. Asset URLs default to **Figma MCP export** endpoints; **replace with permanent URLs** (repo `icons/` / CDN) before production because MCP URLs expire.

### User interaction flows

- In-page jumps via anchor links.
- **Get in touch** CTAs scroll to `#lp-contact` or use `tel:` where wired.

### Error handling

No async fetch inside the decorator. If an image URL fails, the browser shows a broken image; replace `ASSETS` with stable URLs for production.

## Local preview

```bash
npx aem up --html-folder=./drafts
```

Open **`/drafts/lp.html`** (contains minimal `main` markup so `decorateSections` / `decorateBlocks` run).

## Published usage

In Document Authoring, add a single **`lp`** block on the desired path (e.g. **`/lp`**). Empty block body is fine.
