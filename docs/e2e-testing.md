# 🌐 End-to-end testing

There is no automated E2E framework in the current dependency set. Do not imply that end-to-end behavior is covered by Node unit tests.

## Recommended future scenarios
- Visitor loads the directory and sees the employee result count.
- Search narrows the list and returns the expected records.
- Department filtering combines with search and can be cleared.
- A card opens a correctly labelled profile dialog.
- Escape, backdrop, and close-button dismissal all work.
- Keyboard focus returns to the activated card.
- A failed dataset request exposes retry and recovers when the file is restored.
- Narrow viewports keep the filter controls and dialog usable.

Use a fresh browser context for each test. Use only synthetic fixture data. Avoid relying on remote photos or external services for deterministic test outcomes.
