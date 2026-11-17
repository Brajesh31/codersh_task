# 💻 Local development

## Install
Use `npm ci` from the repository root. This uses the committed package lock and should be preferred over an unreviewed package installation.

## Run Vite
`npm run dev` launches the local development server. Vite prints the available local URL. Hot Module Replacement updates the page when source files change.

## Data changes
Edit `public/employeesData.json` with valid JSON. Each record needs a unique ID, name, email, and department. Validate the dataset before committing. Use only synthetic or explicitly approved public data.

## CSS changes
Global browser behavior belongs in `src/index.css`. Home, card, and modal rules are separated under `src/Views/CSS/`. Check a narrow viewport and reduced-motion settings.

## Verify before commit
Run lint, Node tests, and build. For interactions, manually test the loading/retry flow, search, department selector, dialog, keyboard focus, and browser storage behavior.
