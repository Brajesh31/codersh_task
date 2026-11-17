# 🎞️ Animation guidelines

Animations are used sparingly for dialog entry, backdrop appearance, card hover feedback, and the loading indicator.

## Rules
- Motion should clarify state changes or interaction feedback.
- Avoid animations that delay access to content.
- Keep hover movement subtle and never make essential content appear only on hover.
- Respect `prefers-reduced-motion`; the global stylesheet reduces animation and transition duration.
- Avoid flashing, parallax, autoplay, and decorative movement that competes with reading.

Test the interface with reduced motion enabled. If a future animation communicates information, provide an equivalent non-motion cue.
