# 🧪 QA test case

## Test case control
| Field | Value |
| --- | --- |
| Test ID | QA-XXX |
| Feature/component | |
| Requirement or issue | |
| Author/reviewer | |
| Priority | Critical / High / Medium / Low |
| Status | Draft / Ready / Executed / Blocked |
| Created/reviewed date | |

## Objective
State the behavior or risk this test is intended to verify. Keep one test case focused on one outcome.

## Preconditions
- Application build/commit:
- Browser and operating system:
- Viewport:
- Required user-visible state:
- Required test data:

## Test data
Use synthetic records only. Never include real employee names, email addresses, phone numbers, or compensation data.

| Field | Test value | Notes |
| --- | --- | --- |
| Employee ID | 9001 | Unique synthetic identifier |
| Name | Alex Example | Synthetic display name |
| Email | alex.example@example.invalid | Reserved non-deliverable domain |
| Department | Frontend Developer | Must match supported option |

## Steps and expected results
| Step | Action | Expected result | Actual result | Pass/Fail |
| --- | --- | --- | --- | --- |
| 1 | Open the directory | Loading state is announced | | |
| 2 | Wait for the JSON request | Valid sample cards are displayed | | |
| 3 | Search using the test name | Only matching records remain | | |
| 4 | Activate the matching card | The labelled profile dialog opens | | |
| 5 | Press Escape | Dialog closes and focus returns | | |

## Negative and boundary cases
Describe malformed values, missing optional fields, duplicate IDs, unavailable resources, empty results, and request failures relevant to this test.

## Accessibility checks
Record keyboard path, accessible name/role, focus behavior, screen-reader announcements, contrast, reflow, and reduced-motion behavior where relevant. Do not infer WCAG conformance from one passing test.

## Evidence
Link to sanitized screenshots, test output, workflow run, and commit. Screenshots must come from a real running build and contain no private records.

## Defect and follow-up
- Defect link:
- Severity:
- Owner:
- Retest commit:

## Sign-off
| Role | Reviewer | Date | Decision |
| --- | --- | --- | --- |
| QA | | | |
| Maintainer | | | |
