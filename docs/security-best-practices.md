# 🔒 Security best practices

- Treat all content under `public/` as downloadable by everyone.
- Use synthetic employee records in the public sample.
- Never add access tokens or private API keys to frontend source or `VITE_*` values.
- Do not log complete employee records or localStorage contents.
- Keep npm lockfile changes reviewed and use dependency update automation.
- Resolve high-severity dependency findings before release.
- Restrict GitHub Actions permissions to the minimum job scope.
- Review external images, URLs, and licenses.
- Validate incoming JSON even when it is maintained in the same repository.
- Keep UI filtering separate from actual access-control claims.
- Report suspected vulnerabilities privately.

Before a public release, inspect the entire build output and the dataset file. A successful build does not establish that the published data is safe.
