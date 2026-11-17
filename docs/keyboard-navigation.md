# ⌨️ Keyboard navigation

## Expected path
1. Tab into the search field.
2. Enter a search term.
3. Tab to the department selector and choose a value.
4. Tab through Clear filters and employee-card buttons.
5. Press Enter or Space on a card to open its profile.
6. Use Tab and Shift+Tab to move inside the dialog.
7. Press Escape or activate the close button.
8. Confirm focus returns to the card that opened the dialog.

## Implementation notes
Employee cards are buttons rather than clickable divs. The dialog stores the previously focused element, directs focus to its close button, handles Escape, and loops Tab between its focusable elements.

## Verification gap
The focus loop is custom and intentionally small. Verify it with real browsers, keyboard-only testing, and any additional controls introduced into the dialog. Do not assume code inspection alone proves all focus edge cases.
