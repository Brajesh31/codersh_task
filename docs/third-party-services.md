# 🌐 Third-party services

| Service or package | Use | Data exposure |
| --- | --- | --- |
| External image hosts in sample JSON | Deliver profile photos | Browser requests go to the referenced host |
| GitHub Actions | CI and repository automation | Workflow logs and build metadata are held by GitHub |
| GitHub CodeQL/dependency review | Source and dependency analysis | Repository code and dependency metadata are analyzed |
| Shields.io | README badge images | README viewers' browsers request badge images |

No analytics, session replay, identity provider, payments, or external employee API is configured.

## Review requirements
Confirm the accuracy and rights of each external asset. Avoid sending personally identifying data to third parties. Review service terms and data handling before adding analytics, hosted search, or an image service.
