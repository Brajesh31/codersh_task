# 📏 Code standards

- Use modern JavaScript ES modules and the existing Vite/React conventions.
- Prefer named imports and focused functional components.
- Keep pure data logic separate from browser or React effects.
- Use stable record IDs as React keys.
- Give interactive controls semantic elements and accessible names.
- Keep UI state controlled and derived results memoized only where useful.
- Handle optional data explicitly; do not assume remote JSON is well-formed.
- Use descriptive variable names and avoid console logging personal data.
- Keep CSS classes scoped to their view and preserve visible focus styles.
- Respect the reduced-motion preference.
- Update tests and documentation with behavior changes.

Run `npm run lint`, `npm test`, and `npm run build` before proposing a significant change. The linter is the executable source of truth where this guide and configuration differ.
