# ✍️ Coding guidelines

## React components
Keep components focused on a single view responsibility. Use props for inputs and callbacks. Do not add state to a child when the parent must coordinate it with search results or selected records.

## Data logic
Pure helpers belong in `src/lib/`. Validate at the boundary where remote JSON enters the application. Ensure each rendered record has a stable identifier. Keep search semantics consistent with tests and documentation.

## Error handling
Distinguish request failure from a successful empty result. Avoid silently converting malformed top-level payloads into empty data, because that hides deployment mistakes. Keep user-facing errors clear and technical diagnostics free of personal data.

## Accessibility
Use labels for inputs, buttons for actions, visible focus indicators, meaningful dialog labels, Escape handling, and keyboard testing. Do not rely on color alone to communicate status.

## CSS and assets
Prefer reusable CSS variables for repeated values, respect reduced motion, optimize static assets, and add alt text when images communicate information.

## Pull requests
Make small cohesive changes, describe behavior and privacy impact, and attach real screenshots only when they were captured from a working build using synthetic data.
