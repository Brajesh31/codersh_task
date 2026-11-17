# 🐛 Bug reporting and triage

## 1. Choose the correct reporting route

Use the repository bug form for a reproducible behavior defect. Use the feature request form for a proposed capability, the documentation form for incorrect or missing guidance, and the accessibility form for keyboard, screen-reader, contrast, motion, or reflow problems.

A suspected security vulnerability must be reported privately through [SECURITY.md](../SECURITY.md). Do not publish exploitable details in a public issue.

## 2. Minimum useful report

A good report provides:
- One concise problem statement.
- The affected commit or deployed build, if known.
- Browser/version, operating system, viewport, and local/deployed context.
- Exact reproduction steps and the sample data used.
- Expected behavior and actual behavior.
- Frequency and user impact.
- Sanitized console or network evidence.

Avoid reports that only say “it is not working”. The maintainer must be able to reproduce the issue or understand what evidence is missing.

## 3. Project-specific reproduction hints

For this directory, include the path through the user interface:
- Initial load and JSON request.
- Search by name or email.
- Department filter and clear action.
- Open profile dialog and close it by button, backdrop, or Escape.
- Browser preference restore after reload.
- Responsive viewport and reduced-motion settings.

When reporting a data issue, use the synthetic records from `public/employeesData.json`. Do not attach the full dataset if it contains anything private.

## 4. Privacy and security rules

Never attach:
- Real employee names, personal email addresses, phone numbers, salary, home address, or staff-only identifiers.
- Browser cookies, localStorage dumps, authentication headers, passwords, or access tokens.
- Screenshots with private tabs, messages, notifications, or unrelated desktop content.
- Production employee exports or internal API responses.

Use redacted logs and synthetic examples. If a report requires private data to reproduce, arrange a private channel instead of putting it in the public issue.

## 5. Triage expectations

Maintainers should:
1. Confirm the issue on a known commit or deployment.
2. Classify defect type and severity.
3. Identify impacted behavior and any privacy/security implications.
4. Check whether a regression test can reproduce the failure.
5. Record a workaround only if it is safe and verified.
6. Link the fix commit and the verification result.

## 6. Severity guidance

| Severity | Meaning | Example |
| --- | --- | --- |
| Blocker | App cannot load or all primary user flows are unavailable | Root page fails for all visitors |
| Critical | Serious privacy/security exposure or broad data integrity failure | Confidential employee fields are published |
| High | Major workflow broken with no reasonable workaround | Employee directory JSON consistently fails |
| Medium | Limited user path or browser-specific issue | Dialog keyboard close broken in one browser |
| Low | Cosmetic or wording issue with minimal user impact | Minor spacing inconsistency |

Severity is a triage aid, not an automatic SLA. Report evidence and impact rather than inflating priority.
