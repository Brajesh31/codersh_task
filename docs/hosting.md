# 🌍 Hosting

## Deployment model
The application produces static files in `dist/`. It can be deployed to a static host such as GitHub Pages, Netlify, Vercel static output, or a conventional web host configured to serve the files. This repository does not currently contain a hosting provider configuration or deployed URL.

## Hosting requirements
- Publish the full `dist/` directory.
- Serve `index.html` as the root document.
- Configure a single-page-app fallback for client-side routes.
- Ensure `employeesData.json` is reachable at the Vite base path.
- Use HTTPS.
- Review the published JSON for sensitive values.

## Subpath deployment
Set Vite's `base` option to the deployment prefix, rebuild, and verify asset paths. The employee JSON request uses Vite's `BASE_URL`.

## No provider-specific claim
No live deployment, domain, CDN, monitoring stack, or hosting secret is configured by this repository. Follow the selected provider's current instructions and document provider-specific changes.
