# 🚀 Getting started

## Prerequisites
Install Node.js 22 and npm, then clone the repository.

```bash
git clone https://github.com/Brajesh31/codersh_task.git
cd codersh_task
npm ci
npm run dev
```

Open the URL printed by Vite. The normal development URL is `http://localhost:5173`.

## Explore the app
1. Wait for the directory data to load.
2. Search a name or email from the sample JSON.
3. Choose a department.
4. Activate an employee card to open its profile.
5. Close the profile with the button, backdrop, or Escape.
6. Reload to see whether browser preferences are restored.

## Before changing sample data
Read [the data contract](data-contract.md) and [privacy/security guide](privacy-security.md). The JSON is public. Do not add confidential employee details.

## Quality checks
```bash
npm run lint
npm test
npm run build
```
