# 📋 Functional requirements

| ID | Requirement | Current status |
| --- | --- | --- |
| FR-01 | Load the employee dataset from the public JSON asset | Implemented |
| FR-02 | Reject a payload that is not an array | Implemented in normalization helper |
| FR-03 | Skip rows missing required ID, name, email, or department | Implemented |
| FR-04 | Skip duplicate identifiers | Implemented |
| FR-05 | Search name and email without case sensitivity | Implemented |
| FR-06 | Filter by selected department | Implemented |
| FR-07 | Show an empty state when no record matches | Implemented |
| FR-08 | Show a loading state while fetching | Implemented |
| FR-09 | Show an error state and allow retry | Implemented |
| FR-10 | Open an employee profile dialog from a result | Implemented |
| FR-11 | Close dialog by button, backdrop, and Escape | Implemented |
| FR-12 | Restore prior keyboard focus after dialog close | Implemented |
| FR-13 | Remember search and department in local browser storage | Implemented |
| FR-14 | Create or edit employee records | Not implemented |
| FR-15 | Authenticate visitors or restrict record access | Not implemented |

## Requirement change control
A proposed change should identify the visible behavior, impacted data properties, empty/error behavior, accessibility implications, and tests. Do not change a requirement to "implemented" until the behavior is present in code and verified.
