# 🤝 Contributing

Thank you for considering a contribution. This repository is a React/Vite employee directory with one frontend route and a static JSON data source. Keep changes focused and document user-visible effects and data exposure.

## 1. Before starting
1. Read [README.md](README.md) and the relevant [documentation](docs/README.md).
2. Search existing issues and pull requests before opening new work.
3. Open an issue before adding major infrastructure such as a backend, authentication, or a database.
4. Never submit real employee information, private contact details, compensation data, credentials, or secrets.

## 2. Local setup
```bash
npm ci
npm run dev
```
Node.js 22 is used by CI. See [installation](docs/installation.md) and [local development](docs/local-development.md).

## 3. Engineering guidelines
- Use functional React components and the existing module conventions.
- Keep UI state local unless a concrete cross-page requirement appears.
- Use stable record identifiers as React keys.
- Normalize and validate incoming data before filtering or rendering.
- Keep public data genuinely safe for public disclosure; `public/` is not a private data store.
- Use semantic controls, accessible names, visible focus, keyboard support, and reduced-motion behavior.
- Avoid unnecessary dependencies. Prefer browser and Node built-ins where practical.
- Update documentation and diagrams when the architecture or data contract changes.
- Do not add placeholder badges, fake metrics, fabricated screenshots, or unimplemented feature claims.

## 4. Verification
Run these commands from the repository root:
```bash
npm ci
npm run lint
npm test
npm run build
python scripts/validate_repo.py
python scripts/validate_docs.py
``
State any check that could not be run. Lint and build success are not substitutes for browser or assistive-technology testing.

## 5. Pull request expectations
Use the pull request template. Explain the problem, implementation, data/schema impact, privacy implications, accessibility considerations, screenshots for meaningful visual changes, and test evidence. Keep the diff focused and review generated files before submission.

## 6. Commit style
Use concise conventional-style subjects, for example:
- `feat: add a department filter`
- `fix: handle empty photo URLs`
- `docs: clarify public data boundary`
- `test: cover duplicate employee identifiers`

## 7. Licensing and assets
Only contribute material you are entitled to submit. Identify third-party code, images, fonts, and data sources. The repository's MIT grant does not cover sample employee records or third-party artwork; see [LICENSE](LICENSE).

Please follow the [Code of Conduct](CODE_OF_CONDUCT.md).
