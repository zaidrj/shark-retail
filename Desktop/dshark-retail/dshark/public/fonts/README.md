# Font Setup Instructions

To use the "Itcavantgardestd Bk" font globally in your project:

## 1. Add Font Files
Place your font files in this directory:
- `itcavantgardestd-bk.woff2` (recommended format)
- `itcavantgardestd-bk.woff` (fallback)
- `itcavantgardestd-bk.ttf` (fallback)

## 2. Font Configuration
The font is already configured in:
- `app/globals.css` - @font-face declaration and global body font
- `tailwind.config.ts` - Tailwind font family configuration

## 3. Usage
The font is now available as:
- Default font for the entire application
- Tailwind class: `font-avant-garde`
- CSS: `font-family: 'Itcavantgardestd Bk'`

## 4. Font Loading
The font uses `font-display: swap` for optimal loading performance.
