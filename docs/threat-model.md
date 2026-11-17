# 🧨 Threat model

## Assets
- Public employee sample dataset.
- Application source and static build assets.
- Repository write permissions and workflow tokens.
- Contributor accounts and dependency supply chain.

## Trust boundaries
The visitor controls their browser and localStorage. The static host serves publicly reachable assets. GitHub stores source, workflows, and automation metadata. Third-party image hosts receive image requests.

## Threat scenarios
| Threat | Impact | Existing mitigation or required action |
| --- | --- | --- |
| Real data committed to public JSON | High privacy exposure | Use synthetic data; inspect source and build assets |
| Secret added to Vite variable | Secret becomes public in bundle | Keep private secrets out of client code |
| Malicious dependency update | Supply-chain compromise | Lockfile, Dependabot, dependency review, CodeQL |
| Malicious workflow permission | Repository modification or data access | Minimal workflow permissions and action review |
| Invalid JSON row | UI failure or misleading output | Normalizer and unit tests |
| External image URL changes | Broken image or tracking | Fallback avatar; review providers and licenses |
| Future fake client login | False access-control guarantee | Require server-side auth and authorization |

## Non-goals and assumptions
This threat model does not claim the app has private employee records or authenticated roles. No formal penetration test has been performed. Revisit this model before adding a server, employee writes, accounts, or integrations.
