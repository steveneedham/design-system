# Contributing

## Placement

- Shared visual decision: add it here first.
- Project content, data, analytics, legal language, or client information: keep
  it downstream.
- Editable identity master: `assets/`.
- Rendered derivative: downstream repository.

## Component status

Every new component should be classified in its documentation:

- **Stable** — safe for production consumption.
- **Provisional** — under evaluation; API may change.
- **Deprecated** — retained only for migration.

## Acceptance

Before release:

1. Validate JSON, JavaScript, CSS imports, SVGs, and local references.
2. Run `git diff --check`.
3. Render component specimens on dark and paper surfaces.
4. Check desktop and 390px mobile layouts.
5. Check reduced motion and keyboard focus.
6. Check print output for paper components.
7. Record the release in `CHANGELOG.md`.

Do not change the meaning of amber and teal, introduce a new mark, or add a
status color without updating tokens, specimens, the asset manifest, and brand
architecture together.
