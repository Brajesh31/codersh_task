# 🔧 Technical overview

The codebase uses JavaScript ES modules and React functional components. Vite provides local development, JSX transformation, and static production output. The app renders a single directory screen and does not require a routing library.

## Startup path
- `index.html` defines the root mount node and document metadata.
- `src/main.jsx` mounts React under StrictMode.
- `src/App.jsx` renders the Home directory page.
- `Home.jsx` owns data loading, filters, result states, selection, and dialog visibility.

## Data path
`Home.jsx` uses the browser Fetch API to request `${import.meta.env.BASE_URL}employeesData.json`. The helper `normalizeEmployees` requires array input and validates the identity/search fields. It drops malformed records and duplicate IDs. `filterEmployees` trims the search term, compares case-insensitively against name/email, and applies exact department equality.

## Styling
Global CSS establishes typography, box sizing, visible focus, and reduced-motion behavior. View-specific CSS is stored in `src/Views/CSS/`. The current design does not use a separate component library or design-token build step.

## Tooling
The npm lockfile is the dependency installation source of truth. ESLint checks JavaScript/JSX. The Node.js built-in test runner covers data utilities. GitHub Actions runs lint, unit tests, and a Vite production build.

## What this overview does not describe
There is no server-side code, database, authentication middleware, background job, API router, or deployment infrastructure definition.
