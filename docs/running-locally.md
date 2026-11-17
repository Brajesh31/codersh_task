# 🏃 Running and verifying the application locally

## 1. Requirements

- Node.js 20.19+, 22.13+, or 24+ as allowed by `package.json`.
- npm and Git.
- A modern browser with JavaScript enabled.

The repository's `.nvmrc` pins Node 22.13.0. The project uses npm and a committed `package-lock.json`; do not switch package managers without updating the documented workflows and lockfile strategy.

## 2. Clone and install

```bash
git clone https://github.com/Brajesh31/codersh_task.git
cd codersh_task
npm ci
```

Use `npm ci` for a reproducible install from the committed lockfile. If it fails, record the Node/npm version and exact error before changing dependency versions.

## 3. Start the development server

```bash
npm run dev
```

Vite prints the local address, normally `http://localhost:5173`. If that port is busy, Vite may choose another. Use the URL actually printed by the process.

## 4. Available verification commands

```bash
npm run lint
npm test
npm run build
npm run preview
```

The Node test runner covers pure normalization and filtering helpers. It does not mount the React application or replace browser interaction tests.

## 5. Typical local test sequence

1. Open the root page and wait for the employee cards to load.
2. Search by a sample name and a sample email.
3. Select each department option and verify exact filtering.
4. Clear the controls and verify the full result count returns.
5. Open a profile using keyboard and pointer.
6. Close the dialog with the close control, Escape, and backdrop.
7. Verify focus returns to the card that opened the dialog.
8. Resize the viewport and check for clipping or horizontal scrolling.
9. Inspect the network panel and confirm the JSON request succeeds.
10. Use a local test to make the JSON unavailable and verify the error/retry path.

Only use the synthetic records in `public/employeesData.json`.

## 6. Production preview

```bash
npm run build
npm run preview
```

The preview server serves `dist/` locally. It is not a production server. Check the generated `dist/employeesData.json` because Vite copies the public dataset into that output.

## 7. Troubleshooting

| Symptom | Likely cause | Action |
| --- | --- | --- |
| `npm ci` engine error | Unsupported Node version | Switch to a supported version in `.nvmrc` |
| Port already in use | Another local server is listening | Use the port printed by Vite or stop the other process |
| Blank page | Build/runtime JavaScript error | Inspect browser console and terminal |
| JSON 404 | Incorrect base path or asset not copied | Inspect the request URL and `dist/employeesData.json` |
| No results | Search or department filter still active | Clear both filters |
| Missing photo | Empty or unavailable external image | Initials fallback should appear; do not add unreviewed personal image links |

## 8. Stop the server

Use `Ctrl+C` in the terminal running Vite. Do not leave a development server exposed on a public network unless the exposure is intentional and understood.
