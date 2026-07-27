# Steven Needham Design System

The canonical source for Steven Needham’s identity, interface tokens, editorial
components, document and presentation patterns, and reusable brand assets.

## Use

Homepage-compatible core:

```html
<link rel="stylesheet"
  href="https://steveneedham.github.io/design-system/styles.css">
<script defer
  src="https://steveneedham.github.io/design-system/scripts/components.js"></script>
```

Complete component bundle:

```html
<link rel="stylesheet"
  href="https://steveneedham.github.io/design-system/bundle.css">
```

Paper surface:

```html
<link rel="stylesheet" href="bundle.css">
<link rel="stylesheet" href="paper.css">
<html data-theme="paper">
```

## Repository map

- `styles.css` — portfolio core and responsive behavior
- `bundle.css` — core plus every optional component layer
- `paper.css` — paper and print overrides
- `tokens/` — color, type, spacing, status, media, motion, and layer tokens
- `components/project-detail.css` — case studies and evidence flows
- `components/documents.css` — reports, forms, agreements, and proposals
- `components/status.css` — written status, KPIs, and reporting lists
- `components/presentations.css` — slide geometry and presentation structures
- `scripts/components.js` — progressive SignalStrip, reveal, and theme behavior
- `assets/manifest.json` — versioned asset and identity inventory
- `assets/consulting/` — editable Urban Strategist source masters
- `guidelines/assets.html` — visual asset catalog
- `guidelines/components.html` — interactive component specimens
- `guidelines/brand-architecture.md` — identity and sub-brand boundaries
- `guidelines/media.md` — photography, motion, and accessibility rules
- `guidelines/office.md` — Word and PowerPoint translation
- `SKILL.md` — voice, editorial philosophy, and implementation guidance

## Governance

This repository is upstream of the portfolio and consulting exports. Shared
tokens, components, interaction behavior, and editable brand assets belong here
first. Project content, analytics, client details, legal terms, data, and
downloads remain with their projects.

When direct consumption is unavailable, copy an asset from a tagged release,
record its canonical path and version downstream, and regenerate it when the
source changes. Do not hand-edit downstream exports.

Run `node scripts/validate.mjs` before release.
