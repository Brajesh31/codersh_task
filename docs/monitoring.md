# 📡 Monitoring and operational visibility

## 1. Current state

There is no application telemetry, uptime monitor, analytics package, error-reporting SDK, backend health endpoint, or production host configured in this repository. The frontend is a static React/Vite build. Do not describe GitHub Actions status as end-user uptime monitoring.

## 2. Existing signals

| Signal | Where it comes from | What it proves | What it does not prove |
| --- | --- | --- | --- |
| CI workflow | GitHub Actions | Dependencies install, lint/tests/build pass on a commit | Does not prove a deployment is live or the UI works in every browser |
| Documentation validation | GitHub Actions | Required paths, SVG, JSON fixture, and local links satisfy scripts | Does not prove every documentation statement is accurate |
| CodeQL | GitHub Actions | Static analysis completed against source | Does not prove absence of vulnerabilities |
| Security Scan | npm audit and Gitleaks | Production audit gate and secret scan status | Does not make the whole dev dependency graph vulnerability-free |
| Browser DevTools | Manual test | Local/deployed request, console, and rendering observations | Not central monitoring or durable telemetry |

## 3. Static hosting checks

If the site is deployed later, monitor the host/CDN layer for:
- Root HTML response.
- Availability of the hashed JS and CSS assets referenced by the HTML.
- Availability and valid JSON response of `employeesData.json`.
- Correct MIME types and cache behavior.
- SPA fallback to `index.html` for root-level navigation if client routing is introduced.
- TLS certificate and custom-domain configuration through the selected provider.

Do not add a fake `/health` route to a static-only application.

## 4. Privacy-first telemetry requirements

If telemetry is proposed, define its purpose before selecting an SDK. Do not transmit employee names, emails, phone values, salary, IDs, profile contents, or search terms. Establish:
- Exact event names and minimum fields.
- Data controller/operator and lawful purpose.
- Consent or notice obligations where applicable.
- Retention and deletion process.
- Access permissions and incident response.
- Vendor, subprocessor, region, and data-transfer review.
- A way to disable or remove telemetry without breaking the directory.

## 5. Alert design for a future deployment

| Condition | Suggested signal | Response owner | Response |
| --- | --- | --- | --- |
| Root page unavailable | Host HTTP check | Hosting maintainer | Inspect deployment and rollback if needed |
| JSON asset missing or invalid | Synthetic smoke check | Maintainer | Restore matching build artifact |
| Unexpected public data change | Repository review / artifact diff | Data owner | Stop deployment and review privacy boundary |
| Build or security gate failure | GitHub Actions | Maintainer | Inspect logs before merging or release |

Thresholds and notification channels must be selected after a real host and support owner exist.

## 6. Operational review

For each release, record:
- Deployed commit and artifact.
- CI, docs, CodeQL, and security run links.
- Smoke-test result and browser/viewport.
- Public JSON review.
- Known issues and rollback point.

Do not invent uptime percentages, visitor counts, error rates, or service-level objectives without measurements.
