# 🚀 Installation

## Requirements
- Node.js 20.19+ or 22.12+, matching Vite 8's supported runtimes. The `.nvmrc` selects Node 22.12.0 or newer in the 22.x line.
- npm.
- Git.
- A modern browser with JavaScript enabled.

No backend, database, account, or private API key is required.

## Install and start
```bash
git clone https://github.com/Brajesh31/codersh_task.git
cd codersh_task
npm ci
npm run dev
```
Open the local URL printed by Vite, usually `http://localhost:5173`.

## Environment configuration
The application currently reads no environment variables. `.env.example` is explanatory only. Never put secrets in Vite `VITE_*` variables because browser-delivered code can expose them.

## Verification and build
```bash
npm run lint
npm test
npm run build
npm run preview
```
Vite writes the production site to `dist/`. Preview is for local inspection, not a production server. See [deployment](deployment.md).

## Data source
The app uses the browser Fetch API to request `${import.meta.env.BASE_URL}employeesData.json`, served from `public/employeesData.json`. A malformed top-level response or request failure displays an error and retry state. Record-level invalid entries are skipped and surfaced through a warning.
