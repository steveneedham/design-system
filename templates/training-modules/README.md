# Training modules template

A reference implementation of the training/course hub: a facts crawl-strip,
a six-card module grid, and a module icon gallery. Plain HTML, CSS, and
vanilla JS — no framework, no build step, matching the rest of this repo.

Open `index.html` directly, or see the live specimens for the underlying
pieces in [`guidelines/components.html#training`](../../guidelines/components.html#training)
and the icon set in [`guidelines/assets.html#training`](../../guidelines/assets.html#training).

## What's here

- `index.html` — the full hub page: nav, crawl-strip, intro, module grid,
  icon gallery, footer.
- Styles come from `components/training.css` (via `bundle.css`) — this
  template has no CSS of its own beyond a couple of page-shell rules.

## Integrating into another page

1. Load the bundle: `<link rel="stylesheet" href=".../bundle.css">` (or
   `styles.css` + `components/training.css` if you don't want the rest of
   the bundle).
2. Copy the markup block(s) you need — `.crawl-strip`, `#modules.module-grid`
   with its `.module-card`s, or `.icon-gallery` — and the matching `<script>`
   block at the bottom of `index.html` if you're reusing the crawl-strip.
3. Update paths (`../../assets/icons/...`) to match the new file's depth.

## Module cards

Each `.module-card` takes `data-track="ops"` (amber) or `data-track="sys"`
(teal), which colors the track label and the CTA link. A card is:

```
.module-card
  .module-cover              (16:9, aspect-ratio)
    .module-cover-media       — background photo; see Photography below
    .module-cover-scrim       — gradient for text legibility
    .module-icon-badge        — 40×40, aria-hidden (title already names it)
    .module-cover-meta
      .module-track-label
      .module-title (h3)
  .module-body (p)
  .module-tags                — wraps existing .tag chips
  .module-pricing              — optional; drop this block to hide pricing
    .module-price
    .module-cta (a)
```

### Photography

Photography is project-owned (see `guidelines/media.md`), not a
design-system asset — `.module-cover-media` falls back to a flat
`var(--panel)` rect when no photo is set. To supply one, set the
`--module-photo` custom property (and optionally `--module-photo-pos` for
`object-position`-style art direction) on the `.module-cover-media` element:

```html
<div class="module-cover-media" style="--module-photo:url(/path/to/photo.jpg);--module-photo-pos:center 35%"></div>
```

Follow the aspect ratio, crop, and alt-text guidance in `guidelines/media.md`.

### Pricing

The pricing row is optional per card — omit `.module-pricing` entirely for a
free/informational listing. There's no prop system (no framework here), so
toggle it by editing the markup rather than a boolean flag.

## Crawl-strip

An auto-rotating sibling of `.signal-strip` that cycles full field-note
facts (label, text, source) instead of scrolling a marquee. Behavior, all
tweakable in the `<script>` block at the bottom of `index.html`:

- Rotates every `PACE` ms (default 5600).
- On each rotation, hides the current fact, shows a "Pulling next insight…"
  spinner + bounce-dot state for `GAP` ms (default 700), then swaps content.
- Persists the current fact index to `localStorage` (`trainingCrawlState`)
  so a reload resumes roughly where it left off.
- The spinner and bounce-dot animations are removed under
  `prefers-reduced-motion: reduce` (the content rotation itself continues —
  it's a timed text refresh, not motion that needs suppressing).

To embed just the crawl-strip elsewhere (e.g. a homepage header), copy the
`#crawl-strip` markup block and its `<script>`, and edit the `FACTS` array.

## Icon set

The six module badge icons (`module-*.svg`, plus `incident.svg` and
`case-workers.svg`) and 19 supporting icons for future lesson content live
in `assets/icons/`, registered under `trainingIcons` in
`assets/manifest.json`. They use a filled, rounded ink-tile style — a
deliberate exception to the hairline single-accent-dot rule the rest of the
icon system follows, scoped to training-module cards and badges. See the
note on `guidelines/assets.html#training`.

## Not included here

- The 1200×630 social/launch promo graphic from the original design handoff
  is project-specific marketing content (a fixed headline, a specific photo,
  a specific four icons) rather than a reusable pattern, so it isn't part of
  this template. Compose one per launch using `.module-icon-badge` and the
  existing photography guidance if needed.
- Enrollment/checkout: `.module-cta` links point at `#`. Wire them to an
  actual enrollment flow downstream.
