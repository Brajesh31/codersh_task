# 📡 Monitoring

There is no application telemetry, uptime monitor, analytics package, error-reporting SDK, or health endpoint configured in the current repository.

## Current checks
GitHub Actions reports build/lint/test status. Browser DevTools can be used for a local or deployed smoke test. A static JSON request can be checked from the browser network panel.

## Before adding monitoring
Define what is monitored, the operator, event fields, alert thresholds, data retention, privacy impact, and response steps. Do not transmit employee names, emails, phone numbers, salary values, or search terms to telemetry.

Static site availability should be monitored at the host/CDN layer, not by inventing a backend health endpoint.
