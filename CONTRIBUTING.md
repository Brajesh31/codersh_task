# Contributing

Thanks for considering a contribution. This is a small React/Vite directory UI backed by a static JSON file. Keep changes focused and make the user-visible behavior and data implications clear.

## Before starting

1. Read the README and the relevant pages under `docs/`.
2. Check existing issues and pull requests for duplicate work.
3. Open an issue before larger changes such as introducing a backend, employee editing, authentication, or persistence.
4. Do not submit real employee data, credentials, private photo URLs, or personal contact details.

## Local setup

Install from the root lockfile with `npm ci` and start Vite with `npm run dev`. No server or database is required. See [docs/installation.md](docs/installation.md).

## Change guidelines

- Follow the existing React component structure and Vite/ES module conventions.
- Keep search, filter, and localStorage behavior documented and predictable.
- Use stable employee IDs as list keys for new or changed list rendering.
- Keep the JSON schema consistent and handle missing optional fields safely.
- Do not treat data in `public/` as private; static public files can be downloaded directly.
- Preserve third-party image attribution and usage rights. The MIT grant does not cover the sample dataset or third-party artwork.
- Use semantic controls and accessible modal behavior when changing interaction.
- Run available lint/build checks when appropriate and state exactly what you ran. There is no test script.

## Pull requests

Describe the problem, behavior change, data/schema effects, screenshots for material UI changes, and validation performed. Never include real personal records or credentials. Review the complete diff for generated `dist/`, local dependencies, and unrelated files.

Follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Licensing

Submit work you have the right to contribute. Identify reused code, photos, fonts, and datasets. The existing app code has a Brajesh Kumar MIT grant; sample employee data and third-party artwork are excluded by [LICENSE](LICENSE).
