# 🌐 Third-party services

| Service or package | Use | Current data exposure |
| --- | --- | --- |
| GitHub Actions | CI and repository automation | Workflow logs and build metadata held by GitHub |
| GitHub CodeQL/dependency review | Source and dependency analysis | Repository source and dependency metadata |
| Shields.io | README badge images | README viewers' browsers request badge images |
| External photo hosts | Supported by optional `photo` field | Current sample uses empty photo values and makes no profile-photo requests |

No analytics, session replay, identity provider, payment service, or external employee API is configured.

## Review requirements
Confirm asset rights and provider behavior before adding integrations. Avoid sending employee information to third parties. Review service terms, data handling, and any required user notice before adding analytics, hosted search, or remote image services.
