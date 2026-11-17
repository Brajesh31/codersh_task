# 🧑‍🦽 Accessible component notes

## Search input
Uses a programmatic label, search input type, and controlled React value. Keep keyboard focus visible and do not hide the input behind an unlabeled icon.

## Department selector
Uses an associated label and native select semantics. Keep option text meaningful and support keyboard selection.

## Employee card
A button containing the employee summary. Avoid nesting links or other interactive elements within it. Its accessible name includes the action and employee name.

## Profile dialog
Has a title relationship, modal semantics, close button label, Escape behavior, initial focus, basic focus loop, and focus restoration. Ensure newly added interactive controls are included in the focusable sequence.

## Status panels
Loading is announced as status, failed loading as alert, and result count through a live region. Confirm announcements are useful and not excessively repetitive during actual assistive-technology tests.
