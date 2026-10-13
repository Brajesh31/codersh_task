# Installation

## Requirements

- Node.js and npm
- Git
- A modern browser

No backend, database, account, or API key is required.

## Install and start

From the repository root:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`. The app is configured for the root path `/`.

## Environment configuration

The current app reads no environment variables. `.env.example` is comment-only. If a future Vite setting is added, use `VITE_` only for non-secret configuration; client build values are visible to users.

## Build and preview

```sh
npm run build
npm run preview
```

Vite writes the production site into `dist/`. `preview` serves that build locally for inspection and is not a production host. See [deployment.md](deployment.md).

## Data source

The home page requests `./employeesData.json`, which is provided from `public/employeesData.json`. A failed fetch is currently logged to the browser console; the page does not display a dedicated loading or error state.
