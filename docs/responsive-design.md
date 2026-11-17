# 📱 Responsive design

## Current behavior
The page is capped at a desktop content width and uses a CSS grid for cards. The filter toolbar uses a multi-column layout on wide screens and collapses to one column below its mobile breakpoint. The profile dialog uses two columns for the profile image and details on wider screens and a single column on small screens.

## Layout risks
- Very long names and email addresses need wrapping.
- The modal must remain scrollable when viewport height is limited.
- The close button must remain visible and reachable.
- Cards must remain wide enough to contain department labels without clipping.

## Manual checks
Test at 320px, 375px, 768px, 1024px, and desktop widths. Test browser zoom and text enlargement. Verify that the dialog does not overflow horizontally, the search field remains usable, and results can scroll normally.

No formal device support matrix or browser lab results are published yet.
