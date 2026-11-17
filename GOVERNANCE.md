# 🏛️ Project governance

## 1. Purpose

This file explains how decisions, maintenance responsibilities, contributions, and project changes are handled for Employee Directory. It is intentionally lightweight because this repository is a small, owner-maintained React/Vite frontend rather than a multi-organization project.

## 2. Current governance model

The repository is currently maintained by its owner, **Brajesh Kumar** ([GitHub @Brajesh31](https://github.com/Brajesh31)). The maintainer is responsible for protecting the default branch, reviewing scope and architecture, handling security/privacy risks, maintaining documentation and workflows, and deciding whether proposed work fits the project's goals.

No additional maintainer team, steering committee, company policy, or voting body is currently declared. Do not infer governance authority from a GitHub role that is not documented here.

## 3. Decision-making

Small, reversible changes may be made by the maintainer after checking tests and documentation. Significant changes should be recorded in an Architecture Decision Record (ADR), especially when they introduce:
- A backend, database, authentication, or authorization.
- New public employee fields or a different privacy boundary.
- A new routing, state-management, UI, or test framework.
- External integrations, analytics, monitoring, or a deployment provider.
- A major dependency or runtime change.

Decision records should include context, constraints, realistic alternatives, decision, consequences, and implementation evidence. See [the decision log](docs/decision-log.md).

## 4. Contribution path

1. Read CONTRIBUTING.md and the relevant documentation.
2. Search existing issues for related work.
3. Use a focused issue for non-trivial changes.
4. Submit a small, reviewable change with tests and documentation.
5. Explain any public-data, privacy, accessibility, or dependency impact.
6. Follow the Code of Conduct.

The repository owner may commit routine maintenance directly to the default branch. External contributions should use the review mechanism described in CONTRIBUTING.md. Direct write access is not implied for contributors.

## 5. Review and acceptance

A change is ready when its purpose and scope are clear, it does not introduce private employee data or secrets, relevant tests and validation pass, documentation describes the implementation honestly, visual changes have evidence, and known risks are disclosed.

A green build is necessary but does not prove security, accessibility, or production readiness.

## 6. Security and conduct

Security vulnerabilities must be reported privately through SECURITY.md, not through public discussion. Conduct concerns should be raised through the contact route in CODE_OF_CONDUCT.md.

## 7. Changes to governance

The current maintainer may update this document. A change in ownership, maintainer set, or project decision process should be recorded in version control and reflected in MAINTAINERS.md, CODEOWNERS, and the relevant GitHub settings.

## 8. Governance limitations

This document is not a legal entity charter, corporate policy, contributor agreement, or promise of a response-time SLA. It records the current public project governance model only.
