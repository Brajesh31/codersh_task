# 🚀 Getting started

## 1. Prerequisites

- Node.js supported by the current package manifest: 20.19+, 22.13+, or 24+.
- npm.
- Git.
- A modern browser with JavaScript enabled.

The repository pins Node 22.13.0 in `.nvmrc`. Use npm with the committed `package-lock.json`.

## 2. Clone and run

```bash
git clone https://github.com/Brajesh31/codersh_task.git
cd codersh_task
npm ci
npm run dev
```

Open the address printed by Vite. The default development address is usually `http://localhost:5173`, but Vite may choose another port if it is occupied.

## 3. Explore the current directory

1. Wait for the sample data to load.
2. Search for a sample name or email.
3. Select a department from the exact-match filter.
4. Activate an employee card to open its profile dialog.
5. Close the dialog with its close button, backdrop, or Escape.
6. Reload the page to see whether search and department preferences were restored.

## 4. Run quality checks

```bash
npm run lint
npm test
npm run build
```

The automated unit tests exercise pure employee data helpers. They do not replace real browser testing of the React interface.

## 5. Before changing sample data

Read [the data contract](data-contract.md) and [privacy/security guide](privacy-security.md). The JSON file is public. Use synthetic records and reserved `@example.invalid` addresses. Do not add real contact, salary, or confidential employee information.

## 6. Where to go next

- [Running locally](running-locally.md) for a practical smoke-test sequence.
- [Architecture](architecture.md) for module boundaries and data flow.
- [Development guide](development.md) for change and verification expectations.
- [Troubleshooting](troubleshooting.md) for install, build, and runtime issues.
