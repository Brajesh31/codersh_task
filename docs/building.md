# 🏗️ Building the application

## Production build
```bash
npm ci
npm run lint
npm test
npm run build
```

Vite writes the production site to `dist/`. The output contains the compiled application and assets copied from `public/`, including the employee data file and favicon.

## Base path
The data request uses `import.meta.env.BASE_URL`. If the site is served from a subpath, configure Vite's `base` option, rebuild, and verify both the JS bundles and `employeesData.json` use the configured prefix.

## Build artifact review
Before publication, inspect the generated output:
- Confirm `index.html` points at generated assets.
- Confirm `employeesData.json` is present.
- Inspect the JSON content for private or unapproved fields.
- Check there are no local environment files or development secrets.
- Confirm file names and asset references resolve.

The `preview` command can serve the built output locally for a final smoke test.
