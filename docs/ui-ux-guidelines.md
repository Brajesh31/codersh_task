# 🎨 UI/UX guidelines

## Experience principles
The directory should feel calm, legible, and task-focused. Visitors arrive to locate a person, narrow the list, or inspect one profile. Keep those actions more prominent than decoration.

## Layout
- Center the content within a readable maximum width.
- Keep search and department filters in one compact toolbar on desktop.
- Reflow the toolbar into a single column on narrow screens.
- Use a responsive card grid with a predictable minimum card width.
- Keep the profile dialog within the viewport and allow its body to scroll on short displays.

## Controls
Search and department selection are controlled inputs with explicit labels. The Clear filters button is disabled when no filter is active. Employee cards are semantic buttons, not clickable generic containers.

## Feedback
Show loading while the dataset is in flight, an error with a retry action for failure, a result count for successful loads, and a dedicated empty state when no rows match. Do not use color alone to communicate a state.

## Visual language
Use the existing cool indigo/blue palette, white surfaces, restrained shadows, rounded corners, and clear spacing. Keep focus indicators visible. Respect reduced-motion settings.

## Validation
Review at 320px, tablet, and desktop widths. Check zoom/reflow, keyboard navigation, focus, contrast, long names/emails, missing images, and the dialog near the viewport edges.
