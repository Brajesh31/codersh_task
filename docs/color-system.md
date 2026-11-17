# 🎨 Color system and semantic usage

## 1. Current visual palette

The interface uses a pale neutral background, white surfaces, dark slate text, muted metadata, and indigo/blue emphasis. The project banner uses a violet gradient as decorative identity artwork. The UI does not currently load a dedicated theme library or external color-token package.

## 2. Semantic roles

| Role | Current usage | Guidance |
| --- | --- | --- |
| Primary accent | Retry/clear controls, links, department pills | Use for interactive emphasis, not large areas of body text |
| Main text | Page title, employee names, dialog heading | Keep strong contrast against white or pale surfaces |
| Muted text | Email, labels, supporting explanations | Do not use for essential information unless contrast is verified |
| Surface | Employee cards, dialog | Preserve clear separation from the page background |
| Border | Control and card outlines | A border alone must not be the only indication of state |
| Error | Error panel and warning copy | Pair color with explicit text and a useful action |
| Focus | Keyboard outline | Keep visible on all interactive controls |

## 3. Contrast and color independence

The current palette has not been measured against a complete WCAG 2.2 AA contrast matrix. Do not state that all combinations pass. For each new text/background combination:
1. Measure contrast with an accessible contrast analyzer.
2. Check normal text and large text separately.
3. Check focus indicators and disabled states.
4. Verify at default, hover, focus, and error states.
5. Do not rely on hue alone to convey success, error, or selection.

## 4. Design rules

- Use the accent color consistently for similar interactions.
- Keep body copy dark enough for comfortable reading.
- Avoid very pale gray for essential labels.
- Provide a text label or icon shape alongside color-coded status.
- Preserve visible focus against both white cards and the page background.
- Keep error and warning messages understandable in monochrome or high-contrast modes.

## 5. Validation record

When a formal contrast review is performed, record the tested color values, text size/weight, ratio, tool, date, reviewer, and result in the accessibility audit template. Do not claim a full audit based on checking only the primary button.
