# Deployment

## Deployment shape

This repository builds to a static Vite site. It has no API service or database to deploy. Run the build from the repository root:

```sh
npm ci
npm run build
```

Publish the contents of `dist/` using a static hosting provider. `npm run preview` is for local inspection, not a production server.

## Base path and data URL

The app defines only `/` and requests `./employeesData.json`. When deploying at a non-root path, verify both the Vite `base` setting and that the static JSON URL resolves correctly. No server-side route fallback is required for the current single route if it is always served at `/`; configure the hosting provider if the deployment path requires one.

## Data, images, and privacy

The entire `public/employeesData.json` is publicly downloadable, including contact and salary fields. Replace the sample with synthetic or authorized public data before deploying. Do not use this static pattern for private employee records or rely on hiding fields in the interface. Profile images load from external providers; verify their permissions and availability.

There are no secrets to configure. Never place private keys in `VITE_*` variables.
