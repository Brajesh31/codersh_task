# ♿ Accessibility guidelines

## Current foundations
The UI uses semantic buttons for employee cards and actions, associated labels for search/select controls, a live result summary, visible focus styling, a dialog label, Escape handling, a basic focus loop, focus restoration, and reduced-motion CSS.

## Expected interaction
- Every action must be reachable by keyboard.
- Focus must remain visible.
- Controls must have programmatic names.
- The dialog must have a clear title and dismissal method.
- Content should reflow without two-dimensional scrolling at common viewport widths.
- Error and empty states must be understandable without color alone.
- Images that convey information need an alternative; decorative images should not repeat nearby text.

## Target
Use WCAG 2.2 AA as a design and test target where appropriate. This repository has not been formally audited and makes no conformance claim. Record actual test results before claiming compliance.
