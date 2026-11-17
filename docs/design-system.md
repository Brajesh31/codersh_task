# 🧩 Design system

This is a lightweight CSS design system, not a packaged component library. It documents the current visual language so new interface work remains consistent.

## Foundations
- **Canvas:** pale neutral background.
- **Surface:** white cards and dialog panel with subtle border.
- **Primary accent:** indigo/blue for actions and interactive emphasis.
- **Text:** dark slate for headings, muted slate for secondary content.
- **Shape:** rounded controls, cards, and dialog.
- **Elevation:** low-contrast shadows for separation rather than heavy borders.

## Components
| Pattern | Current implementation |
| --- | --- |
| Page header | Eyebrow, title, subtitle |
| Filter toolbar | Search, department select, clear button |
| Employee card | Portrait/fallback, name, email, department chip |
| Profile dialog | Overlay, title, close button, profile fields |
| State panel | Loading, error, and empty result feedback |
| Footer | Low-emphasis project label |

## Rules
Prefer existing patterns over introducing a new visual style. Keep focus visible and maintain text contrast. Do not add a visual "success" state unless the application has a real successful action to report.

## Evolution
Extract shared tokens into CSS custom properties when repeated values become difficult to maintain. Do not add a design-system build package for the current scale.
