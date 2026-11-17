# 🗂️ Project structure

```text
codersh_task/
├── .github/
│   ├── ISSUE_TEMPLATE/              # Bug, feature, docs, accessibility, performance
│   ├── workflows/                   # CI, docs, CodeQL, dependency and secret scans
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   ├── assets/                      # Logo, banner, architecture and flow SVGs
│   │   └── screenshots/             # Capture guidance; no fabricated screenshots
│   ├── decision-records/            # Accepted architecture decisions
│   └── templates/                   # Specs, audits, test and release templates
├── public/
│   ├── employee-directory.svg       # Browser favicon
│   └── employeesData.json           # Public synthetic sample records
├── scripts/
│   ├── validate_docs.py             # Local Markdown-link validation
│   └── validate_repo.py             # Structure, JSON and SVG validation
├── src/
│   ├── lib/                         # Pure employee data helpers
│   ├── Views/
│   │   ├── Components/              # Employee card and profile dialog
│   │   ├── CSS/                     # View-specific styles
│   │   └── Pages/                   # Home directory page
│   ├── App.jsx                      # BrowserRouter and root route
│   ├── App.css                      # App-level styles
│   ├── index.css                    # Global styles, focus, reduced motion
│   └── main.jsx                     # React mount entry
├── tests/                           # Node built-in unit tests
├── .nvmrc                           # Node runtime
├── eslint.config.js                 # ESLint flat configuration
├── index.html                       # Document shell and metadata
├── package.json                     # Scripts and dependencies
├── package-lock.json                # Locked dependency tree
└── vite.config.js                   # Vite React plugin
```

## Important boundaries
There is no backend directory, database model, migration, server route, API handler, auth module, or infrastructure-as-code directory. These are intentionally absent because the current system is a static frontend.

## Build output
Vite writes generated production assets to `dist/`. The output should not be committed. It includes the public JSON asset, so inspect that file before deployment.
