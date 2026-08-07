# Sunny Theme — Bright Amber Variant

The **Sunny variant** is a bright, bold treatment of the design system intended for exceptional occasions and special edition runs. It inverts the standard dark theme to a light, warm background with vibrant amber as the primary accent.

## Color Palette

### Base Colors
- **Ink** — `#FDF8F0` (warm cream, page background)
- **Panel** — `#FBF5ED` (light cream, component background)
- **Panel Line** — `#EBE4DA` (warm beige, borders)

### Accent Colors
- **Amber (ops)** — `#F4A538` (bright, energetic)
- **Amber Dim** — `#D9851F` (dimmed state)
- **Teal (sys)** — `#2BA4A8` (secondary accent)
- **Teal Dim** — `#1F7A7E` (dimmed state)

### Text Colors
- **Text Primary** — `#1F1810` (very dark brown)
- **Muted** — `#8B8370` (warm gray)
- **Muted Dim** — `#6B6250` (darker warm gray)

### Status Colors
- **Red (alert)** — `#E05252`
- **Red Dim** — `#C23E3E`
- **Green (success)** — `#4FD1C5`

## Usage

### Enabling the Sunny Theme

Add the `data-theme="sunny"` attribute to your root element:

```html
<html data-theme="sunny">
  <!-- Your content -->
</html>
```

Or use a CSS class toggle:

```html
<body data-theme="sunny">
```

### CSS Variables

All theme variables are accessible via CSS custom properties. The sunny variant automatically applies when `data-theme="sunny"` is present:

```css
:root[data-theme="sunny"] {
  --ink: #FDF8F0;
  --amber: #F4A538;
  --text: #1F1810;
  /* etc. */
}
```

### Importing Styles

Include the sunny stylesheet in your build:

```html
<link rel="stylesheet" href="tokens/colors-sunny.css">
<link rel="stylesheet" href="styles-sunny.css">
```

Or use CSS `@import`:

```css
@import url('./tokens/colors-sunny.css');
@import url('./styles-sunny.css');
```

## Visual Characteristics

### Hero/Cover Sections
Sunny variant includes a **gradient background** for hero sections:
```
linear-gradient(135deg, #FFE4A3 0%, #FFD478 50%, #FFFAED 100%)
```

Plus a subtle radial glow effect:
```
radial-gradient(circle, rgba(255, 212, 120, 0.2) 0%, transparent 70%)
```

### Component Borders
All key components (KPIs, cards, tables) use bold `2px` borders in the amber accent color, creating a sunny, energetic visual presence.

### Shadows
Light shadows with warm amber tint to complement the bright theme:
```css
box-shadow: 0 4px 12px rgba(244, 165, 56, 0.1);
```

## Navigation

The sunny nav includes:
- Light cream background with transparency and backdrop blur
- Bold **2px amber bottom border**
- White text with amber accent on hover
- Subtle warm shadow

## Interaction States

- **Links** — Amber by default, darken to `#D9851F` on hover
- **Buttons** — Amber background with white text, slight lift on hover
- **Focus rings** — Bright amber outline

## Exceptional Occasions

The sunny theme is designed for:
- Special edition marketing materials
- Holiday/seasonal campaigns
- Award submissions or showcase pages
- High-impact client presentations
- Celebration pages and milestone announcements

## Accessibility

The sunny variant maintains WCAG AAA contrast ratios:
- Text on light backgrounds: **#1F1810** ensures strong contrast
- Focus indicators use **#F4A538**, which is bright and accessible
- Status colors (red, green) are distinct from text colors

## Browser Support

The sunny variant uses CSS custom properties (CSS variables) and `data-*` attributes, supported in all modern browsers (IE11+ with fallbacks not provided).
