# 🔒 Security best practices

## Public data and assets
- Treat every file under `public/` as downloadable by anyone who can visit the site.
- Keep the checked-in employee sample synthetic, with reserved `.invalid` email addresses and no contact or salary values.
- Do not rely on React conditional rendering, CSS visibility, or client-side filters to hide fields.
- Inspect the production `dist/` output before publishing.
- Review every external image host and its licensing/privacy implications. Prefer local reviewed artwork for a stable demo.

## Data handling
- Validate fetched JSON before rendering.
- Require a finite numeric or non-empty string ID and non-empty required text values.
- Retain only HTTPS or root-relative photo paths. This reduces unsafe URL schemes but does not make remote hosts trusted.
- Do not log complete employee records or localStorage contents.
- Do not persist employee profiles in browser storage.

## Client configuration
- Never add private tokens, passwords, signing keys, or database credentials to client source.
- Vite `VITE_*` variables are public after bundling. They are not a secret store.
- Keep `.env.example` free of live credentials.

## Repository and CI
- Keep dependency lockfile changes reviewed and use Dependabot.
- Resolve high-severity dependency findings before release, including development-tool findings where appropriate.
- Restrict GitHub Actions permissions to the minimum required.
- Run lint, tests, production build, repository validation, documentation-link validation, CodeQL, and secret scanning.
- Report suspected vulnerabilities privately through [SECURITY.md](../../SECURITY.md).

A green build or passing static scan does not prove the published dataset is safe. Review the actual files and deployed output.
