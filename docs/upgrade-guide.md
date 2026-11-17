# ⬆️ Upgrade guide

## Runtime and packages
Use the lockfile and update packages through reviewed npm/Dependabot changes. Check the release notes for React, Vite, the React plugin, and ESLint before major version upgrades. The current single-screen app relies on the browser Fetch API and does not require a third-party HTTP client or router package.

## Upgrade sequence
1. Create a focused change.
2. Update package metadata and lockfile with npm.
3. Run lint and tests.
4. Run a production build.
5. Exercise app load, search, filter, dialog, and retry.
6. Inspect browser console and built assets.
7. Update the compatibility and changelog documents.

No automated package upgrade merge is configured. Dependabot proposals require review.
