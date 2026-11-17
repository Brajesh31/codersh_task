# ♿ Accessibility

The directory uses semantic main, header, section, labels, buttons, live result announcements, and a modal dialog with a labelled title. Employee cards are real buttons, so keyboard activation is available. The dialog supports Escape, a basic tab focus loop, initial focus, and focus restoration. Decorative images use empty alternative text; profile images are also treated as decorative because the employee name is provided as the dialog heading.

Additional verification is still needed with screen readers and real browsers. The current focus loop is intentionally small and should be revisited if more interactive controls are added to the dialog. Check contrast, zoom/reflow, and touch target sizes when modifying the visual design. Reduced-motion settings are respected by the global stylesheet.
