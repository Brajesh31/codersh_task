# 🧾 Use cases

| ID | Actor | Use case | Preconditions | Expected result |
| --- | --- | --- | --- | --- |
| UC-01 | Visitor | View directory | Site is reachable | Cards display after JSON load |
| UC-02 | Visitor | Search for a person | Dataset contains valid records | Name/email matches are shown |
| UC-03 | Visitor | Filter department | Selector is available | Only exact department matches remain |
| UC-04 | Visitor | Clear filters | A filter is active | Full list returns |
| UC-05 | Visitor | Inspect profile | At least one card exists | Profile dialog opens |
| UC-06 | Visitor | Dismiss dialog | Dialog is open | Dialog closes and focus returns |
| UC-07 | Visitor | Recover failed load | Request failed | Retry performs another request |
| UC-08 | Maintainer | Update sample data | Maintainer edits repository | Valid public-safe records display after build |

## Not supported
The current application does not support create/update/delete employee operations, account registration, login, access-control administration, or data export. These use cases require a separate server architecture and privacy assessment.
