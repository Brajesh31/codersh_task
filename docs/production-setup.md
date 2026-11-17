# 🏁 Production setup

## Build
```bash
npm ci
npm run lint
npm test
npm run build
```

## Pre-publication review
1. Inspect `dist/index.html` and generated asset paths.
2. Confirm the employee JSON is present and contains synthetic/authorized public data only.
3. Confirm profile image URLs and rights, or use the initials fallback.
4. Verify metadata, favicon, and responsive layout.
5. Test root route and SPA fallback.
6. Confirm HTTPS is enforced by the host.
7. Retain a known-good build for rollback.

## Hosting
Upload the complete `dist/` folder to a static host. Do not run `vite preview` as a production service. No backend or runtime secrets are needed for this current app.

## After deployment
Open the deployed URL, test a search and department filter, open/close a profile, and request the JSON asset directly to confirm that only intended public sample values are present.
