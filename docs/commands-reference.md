# ⌨️ Command reference

| Command | What it does | When to use it |
| --- | --- | --- |
| `npm ci` | Installs exact lockfile dependencies | Fresh setup and CI |
| `npm run dev` | Starts Vite development server | Local UI work |
| `npm run lint` | Executes ESLint | Before commit and in CI |
| `npm test` | Executes Node built-in tests | After logic changes and in CI |
| `npm run build` | Creates the production bundle | Before deployment and in CI |
| `npm run preview` | Serves the production bundle locally | Final smoke testing |

Repository scripts are declared in `package.json`. Python validation scripts are run directly:
```bash
python scripts/validate_repo.py
python scripts/validate_docs.py
``

There are no database migration, seed, server start, Docker, or API generation commands in this project.
