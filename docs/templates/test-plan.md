# 🧪 Test plan

## Test document control
| Field | Value |
| --- | --- |
| Feature/change | |
| Test owner | |
| Build/commit | |
| Environment | |
| Date | |
| Status | Not run / In progress / Passed / Failed |

## Scope
Describe included behavior, excluded behavior, impacted modules, and known limitations.

## Preconditions and test data
Use synthetic records only. Document required IDs, department values, optional fields, and the expected data source. Never attach real employee information.

## Test cases
| ID | Scenario | Steps | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- | --- |
| T-01 | Normal load | Open root route | Valid cards appear | | Not run |
| T-02 | Empty search result | Enter unmatched value | Empty state appears | | Not run |
| T-03 | Invalid row | Add malformed fixture | Row is skipped safely | | Not run |

## Accessibility checks
Keyboard path, dialog focus, screen-reader announcements, contrast, reflow, target size, and reduced motion.

## Regression risks
List impacted features and tests that must be rerun.

## Evidence
Link workflow runs, test output, screenshots from real builds, and relevant commit hashes. Remove all personal data.

## Sign-off
Record reviewer, date, unresolved issues, and release decision.
