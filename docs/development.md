# Development

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite with hot reload |
| `npm run build` | Build static files in `dist/` |
| `npm run preview` | Preview the built site locally |
| `npm run lint` | Run ESLint |

There is no test script or automated test suite in the current package.

## Change workflow

1. Create a focused branch from the current default branch.
2. Install dependencies with `npm ci`.
3. Make a cohesive UI or behavior change.
4. Run the relevant lint/build command if useful, and report only checks actually performed.
5. Exercise the flow in a browser: load data, search, filter, open/close details, reload and confirm saved filters.
6. Review the final diff for secrets, real employee data, generated `dist/`, and unrelated dependency changes.
7. Update relevant docs when behavior or configuration changes.

## Data conventions

The sample dataset currently has `id`, `name`, `photo`, `department`, `email`, `contact`, and `salary` fields. The UI expects `name`, `email`, and `department` for filtering. Validate or safely handle missing fields if the schema is changed. Use stable `employee.id` keys for rendered rows.

The JSON file is public static content. Use synthetic or expressly authorized records only. Do not commit employee data that should be protected by access control.

## Accessibility and UI behavior

The modal currently closes by backdrop click or button; it has no Escape-key handling or focus trap. The card wrapper is a clickable `div`. Prefer semantic controls, keyboard access, focus management, and accessible labels when changing these flows.
