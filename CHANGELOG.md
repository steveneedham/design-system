# Changelog

## Unreleased

- Added the provisional training-modules component (`components/training.css`): module cards, a module icon gallery, and a facts crawl-strip (an auto-rotating sibling of `.signal-strip` that cycles full field-note facts instead of scrolling a marquee). Added matching specimens to `guidelines/components.html` (section 08) and `templates/training-modules/` as a reference hub page + integration guide.
- Added 25 training-module icons (6 course badges plus 19 supporting glyphs for future lesson content), registered under a new `trainingIcons` list in `assets/manifest.json` and validated by `scripts/validate.mjs`. **Flagged for review**: these use a filled, rounded ink-tile style with a single accent color, not the hairline single-accent-dot style the rest of the icon system follows (see `SKILL.md` → Iconography and the section-07 note in `guidelines/components.html`). Kept as designed and scoped to training-module cards/badges rather than redrawn, since the source handoff called for pixel-exact recreation; called out here rather than silently folded into the general icon set.
- Added `newsletter.html` — a send-ready implementation of the bi-weekly dispatch, built for real mail-client delivery (table-based layout, inlined styles, Outlook MSO conditionals, web-safe font fallbacks, pre-blended opacity colors) rather than the provisional `components/email.css` rendering, which assumes a modern-browser preview. Same content and visual design as the `#email` specimen in `guidelines/components.html`.

## 1.4.0 — 2026-08-20

- Added the provisional email dispatch component (`components/email.css`) for the bi-weekly newsletter: header/cadence, section label, item, item meta, tag, insight, and CTA link, tokenized to the existing color/type/spacing system.
- Added a matching specimen to `guidelines/components.html` (section 07).
- Added four hairline-weight, single-accent-dot functional icons — `console`, `compass`, `dashboard`, `stack` — registered in `assets/manifest.json`.

## 1.3.0 — 2026-07-28

- Added accessibility as a required acceptance layer for stable components and public artifacts.
- Published the accessibility standard, definition of done, accommodations commitment, and review record.
- Added inclusive-practice and accessibility evidence patterns for portfolio and consulting work.
- Registered the North Market editorial photograph and Civic Data presentation masters in the public asset catalog.

## 1.2.1 — 2026-07-28

- Added the canonical Hey Famm social glyph and linked profile specimen.

## 1.2.0 — 2026-07-26

- Completed the visual specimen inventory for every documented component layer.
- Added a first-class voice-and-tone standard.
- Added mobile table wrapping for document specimens.

## 1.1.0 — 2026-07-26

- Added complete portfolio icon and lockup inventory.
- Added canonical color, type, spacing, media, and status token files.
- Added paper and print as first-class surfaces.
- Added project-detail, evidence, document, status, and presentation layers.
- Added progressive SignalStrip, reveal, and theme-control behavior.
- Added consulting identity source masters and brand architecture.
- Added asset and component specimens.
- Added media, Office, contribution, and validation guidance.

## 1.0.0

- Established the portfolio-compatible core stylesheet and primary identity.
