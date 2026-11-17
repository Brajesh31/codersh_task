# 📊 Test execution report

> Use one report for a meaningful test cycle or release candidate. Record actual evidence. Do not mark unexecuted checks as passed.

## 1. Execution metadata

| Field | Value |
| --- | --- |
| Report ID | |
| Project / build | |
| Commit SHA | |
| Branch / tag | |
| Test window and timezone | |
| Tester / responsible team | |
| Environment | |
| Browser and version | |
| Viewport / device | |
| Node.js / npm versions | |
| Dataset revision | Synthetic fixture only |

## 2. Scope and objective

Describe the change or release being tested, the user journeys in scope, and the behaviors deliberately excluded. Reference the acceptance criteria, issue, feature specification, or release checklist.

## 3. Test environment

Record installation commands, runtime configuration, browser/device, network assumptions, deployment base path, and test data source. Do not include credentials, tokens, private URLs, real employee records, or browser storage dumps.

## 4. Execution summary

| Measure | Count / result |
| --- | ---: |
| Planned tests | |
| Executed tests | |
| Passed | |
| Failed | |
| Blocked | |
| Not run | |
| Open severity-1/critical defects | |
| Overall result | |

## 5. Detailed execution

| Test ID | Scenario | Expected result | Actual result | Status | Evidence / defect |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

Possible statuses: **Passed**, **Failed**, **Blocked**, **Not run**, **Not applicable**. Explain any not-applicable decision.

## 6. Employee directory regression coverage

- [ ] Public JSON loads and is an array.
- [ ] Invalid records and duplicate IDs are handled as documented.
- [ ] Search matches names and emails without case sensitivity.
- [ ] Department selection uses exact matching.
- [ ] Clear filters resets both inputs.
- [ ] Loading, empty, error, and retry states work.
- [ ] Employee cards work with pointer and keyboard.
- [ ] Dialog opens with correct content and closes by button, backdrop, and Escape.
- [ ] Focus moves into the dialog, remains contained for Tab navigation, and returns on close.
- [ ] Empty image values show the initials fallback.
- [ ] Small viewport and reduced-motion preference are checked.
- [ ] Published JSON contains only synthetic, approved fields.

## 7. Defects and observations

| Defect ID | Severity | Reproduction | User impact | Owner | Status |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

Distinguish a code defect from environment instability, incomplete evidence, and known product limitation.

## 8. Accessibility and privacy review

Record exact keyboard paths, screen-reader/browser combinations, contrast checks, zoom/reflow, motion checks, and any limitations. State explicitly when a check was not performed. Verify the built public JSON rather than relying only on visible UI.

## 9. Evidence inventory

| Evidence ID | Type | File / URL | Commit | Notes |
| --- | --- | --- | --- | --- |
| | | | | |

Use screenshots captured from a real running build. Use synthetic data and remove unrelated desktop, notification, or browser personal information.

## 10. Risk and residual limitations

List issues that remain open, affected users, workarounds, owners, and the release impact. A passing lint/build pipeline is not a replacement for browser or accessibility verification.

## 11. Recommendation

**Decision:** Go / No-go / Conditional

**Rationale:**

**Conditions before release:**

**Accepted residual risks and approver:**

## 12. Sign-off

| Role | Reviewer | Decision | Date |
| --- | --- | --- | --- |
| Engineering | | | |
| QA | | | |
| Product / owner | | | |
