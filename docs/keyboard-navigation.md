# ⌨️ Keyboard navigation and focus behavior

## 1. Expected directory path

1. Tab to the search input and enter a search term.
2. Tab to the department selector and choose a department.
3. Tab to Clear filters and activate it when enabled.
4. Continue to employee cards. Each card is a semantic button.
5. Press Enter or Space to open a profile dialog.
6. Tab and Shift+Tab between focusable dialog controls.
7. Press Escape or activate the close button.
8. Confirm focus returns to the card that opened the dialog.

## 2. Implementation behavior

- Search and department controls have associated visually hidden labels.
- Employee cards are buttons rather than clickable `div` elements.
- The dialog has `role="dialog"`, `aria-modal="true"`, a labelled title, and a description reference.
- On open, the dialog stores the previously focused element and focuses the close button.
- Escape closes the dialog.
- The basic Tab loop keeps keyboard focus within the dialog.
- On close, the previously focused element is focused again.
- The body scroll is locked while the dialog is mounted.

## 3. Focus visibility

Interactive controls inherit a visible `:focus-visible` outline from the global stylesheet. Do not remove outlines without supplying a clear replacement with sufficient contrast and offset.

Hover styling is not a replacement for keyboard focus. Disabled controls should remain visibly disabled and should not appear actionable.

## 4. Manual verification

- [ ] Complete the entire directory path without using a pointer.
- [ ] Test Enter and Space on employee cards.
- [ ] Test Escape from the dialog.
- [ ] Test Tab and Shift+Tab at both ends of dialog focus order.
- [ ] Verify focus restoration to the opening card.
- [ ] Verify focus remains visible at 200% zoom.
- [ ] Test with keyboard-only navigation at a narrow viewport.

## 5. Known limitation

The current dialog uses a small custom focus loop. It must be retested if more interactive controls are added or if the dialog markup changes. This guide does not claim complete WCAG conformance or substitute for screen-reader testing.
