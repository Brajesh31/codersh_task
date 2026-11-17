# 🚢 Deployment

## Deployment model
This repository builds to a static Vite site. There is no API service or database to deploy.

```bash
npm ci
npm run lint
npm test
npm run build
```

Publish the full contents of `dist/`. `npm run preview` is a local verification server, not a production host.

## Base path and data URL
The frontend builds the data request from `import.meta.env.BASE_URL`. If deploying under a path prefix, set Vite's `base` option and verify that the JavaScript bundles, favicon, and `employeesData.json` resolve under that prefix. BrowserRouter currently declares only `/`; configure a static-host fallback if future routes need deep links.

## Data and privacy
The entire public JSON file is downloadable. The current example dataset uses synthetic names, reserved `@example.invalid` addresses, no contact/salary fields, and empty photo values. Keep it that way unless additional records are expressly authorized for public disclosure. Review the final `dist/employeesData.json`, not only the UI.

## Hosting and security
Use HTTPS and configure the host to serve `index.html` for app routes. No private secret is required by the current frontend. Never put private credentials into `VITE_*` variables.

See [hosting](hosting.md), [production setup](production-setup.md), and [rollback](rollback.md).
