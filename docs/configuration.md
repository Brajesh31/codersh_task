# ⚙️ Configuration

## Vite configuration
`vite.config.js` enables the React plugin. Vite's `base` option is left at its default root value. When deploying to a subpath, set `base` to the deployment prefix and verify that both JavaScript chunks and the public JSON asset resolve correctly.

## Application configuration
The employee data URL is built from `import.meta.env.BASE_URL`. The list of department options is currently a constant in `src/Views/Pages/Home.jsx`. If the dataset is changed, maintain consistency or derive unique departments from the validated records.

## ESLint
`eslint.config.js` uses the flat config format, browser globals, recommended JavaScript rules, React Hooks rules, and React Refresh rules. Do not disable rules globally to hide new warnings.

## Environment files
The application currently requires no environment variables. `.env.example` is explanatory only. Never place a secret in a Vite client variable because the build can expose it.

## Local preferences
The browser keys `savedSearchTerm` and `savedDepartment` store UI preferences. Changing either key name should include a compatibility/migration decision and tests.
