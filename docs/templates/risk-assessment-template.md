# ⚠️ Project risk assessment

> Apply this assessment to a specific change, deployment, or operating decision. Use evidence and explicit assumptions. A numeric score is only useful when its scale is defined.

## 1. Assessment metadata

| Field | Value |
| --- | --- |
| Assessment ID | |
| System / change | |
| Date and version | |
| Assessor | |
| Decision owner | |
| Review date | |

## 2. Scope and assumptions

Describe the feature, data, users, services, deployment environment, and trust boundaries in scope. Record assumptions separately from verified facts.

## 3. Rating model

Suggested qualitative scale:
- **Likelihood:** Low, Medium, High, with a short explanation of exposure and frequency.
- **Impact:** Low, Medium, High, based on confidentiality, integrity, availability, user harm, and recovery effort.
- **Residual risk:** assessed after controls, not copied from the inherent rating.

Do not add likelihood and impact numbers together unless a defined scoring method exists.

## 4. Risk register

| ID | Threat / uncertainty | Asset or user affected | Likelihood | Impact | Existing control | Proposed mitigation | Residual risk | Owner |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R-01 | | | | | | | | |

## 5. Project-specific prompts

Consider, where relevant:
- Public disclosure of names, email addresses, phone values, salaries, or staff identifiers in `public/employeesData.json`.
- Treating client-side search or hidden UI fields as if they were access control.
- Unsafe or unreviewed external image URLs and rights to use portrait assets.
- Malformed JSON, duplicate IDs, unavailable localStorage, and request failures.
- Keyboard traps, missing focus restoration, insufficient contrast, and motion sensitivity.
- Dependency advisories in build tooling and the risk of an incompatible automatic downgrade.
- Static-host base path, cache behavior, missing JSON asset, and rollback compatibility.
- Claims in documentation or marketing that imply a backend, login, private database, or employee management feature that does not exist.

## 6. Mitigation plan

| Action | Risk ID | Owner | Priority | Target date | Completion evidence |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

Mitigations should be concrete. “Improve security” is not an action. “Remove contact and salary properties from the public fixture and add a validator that fails if they reappear” is testable.

## 7. Accepted risks

| Risk ID | Residual exposure | Accepting owner | Reason | Conditions / expiry |
| --- | --- | --- | --- | --- |
| | | | | |

A risk should not be marked accepted merely because a fix is inconvenient.

## 8. Review triggers

Reassess when:
- A backend, database, API, login, authorization, or admin workflow is added.
- The data schema or public sample fields change.
- A production host or third-party integration is selected.
- A dependency advisory or runtime-support change affects the build.
- An incident, privacy complaint, or accessibility regression occurs.

## 9. Decision

**Outcome:** Proceed / Proceed with conditions / Hold

**Rationale and evidence:**

**Next review date:**
