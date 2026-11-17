# 🚢 Deployment checklist

## Build
- [ ] Correct commit and branch selected.
- [ ] `npm ci`, lint, tests, and build completed.
- [ ] Output directory is `dist/`.
- [ ] Vite base path matches the deployment location.

## Content and privacy
- [ ] `dist/employeesData.json` inspected.
- [ ] No real employee or confidential data is present.
- [ ] Photo/media permissions verified.
- [ ] Metadata and favicon resolve.

## Hosting
- [ ] Static assets uploaded.
- [ ] HTTPS enabled.
- [ ] SPA fallback configured.
- [ ] Cache behavior checked.

## Verification
- [ ] Root page loads.
- [ ] Search/filter works.
- [ ] Profile dialog works by keyboard and pointer.
- [ ] Error/retry path checked where feasible.
- [ ] Last-known-good build is available for rollback.
