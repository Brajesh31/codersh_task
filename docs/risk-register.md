# ⚠️ Risk register

| ID | Risk | Likelihood | Impact | Current treatment | Follow-up |
| --- | --- | --- | --- | --- | --- |
| R-01 | Sensitive records placed in public JSON | Medium | High | Privacy warning and data guidelines | Replace with clearly synthetic dataset |
| R-02 | Third-party photos fail or have unclear rights | Medium | Medium | Initials fallback and rights warning | Verify or localize licensed images |
| R-03 | No backend authorization | Certain | High for private use | Explicitly out of scope | Do not use private records |
| R-04 | Browser-only tests miss dialog regressions | Medium | Medium | Unit tests and manual checklist | Add browser E2E coverage |
| R-05 | Department options drift from dataset | Medium | Low | Documented constant list | Derive list from validated data |
| R-06 | Dependency vulnerabilities | Medium | Medium | CodeQL, Dependabot, review workflow | Review alerts and npm audit |
| R-07 | SPA deep link fails on static hosting | Medium | Medium | Deployment guidance | Configure fallback and verify host |

Risk levels are qualitative. Reassess after meaningful architecture, data, or deployment changes. Do not mark a risk closed solely because documentation was added.
