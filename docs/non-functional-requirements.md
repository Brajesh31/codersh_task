# ⚙️ Non-functional requirements

These are working quality expectations for this frontend demonstration, not a claim of formal certification.

| Area | Expectation | Verification approach |
| --- | --- | --- |
| Usability | Search and department filter remain discoverable | Manual walkthrough |
| Resilience | Invalid data and failed requests do not crash the page | Unit tests and browser failure simulation |
| Accessibility | Keyboard-operable cards and dialog controls | Keyboard and screen-reader checks |
| Responsive design | Layout adapts to narrow viewport widths | Browser viewport checks |
| Maintainability | Data helpers are separate and tested | Code review and Node tests |
| Build reliability | Lockfile install, lint, test, and build are repeatable | GitHub Actions |
| Privacy | Only public-safe records are deployed | Review built static assets |
| Performance | Avoid repeated filtering work on unrelated renders | Memoized filtered result |

No performance, accessibility, availability, or security SLA is defined for this prototype. Document measured results if future work introduces them.
