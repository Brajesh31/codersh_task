# 🎛️ Design tokens

The current project uses CSS values directly across view stylesheets. The following token table describes the intended palette and sizing vocabulary; values are a reference for consolidating future CSS custom properties, not a claim that a token package already exists.

| Token role | Current/reference value | Usage |
| --- | --- | --- |
| Canvas | `#f5f7fb` | Page background |
| Surface | `#ffffff` | Cards, toolbar, dialog |
| Primary | `#5264c8` | Primary buttons and accents |
| Secondary accent | `#8b78d7` | Banner gradient |
| Main text | `#172033` | Headings and primary copy |
| Muted text | `#697386` | Subtitles and secondary labels |
| Border | `#e8ebf3` | Card and toolbar edges |
| Soft accent surface | `#f0f2ff` | Department chip |
| Radius | 11-22px | Controls and large surfaces |
| Content width | 1200px maximum | Main page container |

When changing the visual palette, check color contrast instead of assuming the existing combinations meet WCAG. Keep tokens consistent across page, cards, and dialog.
