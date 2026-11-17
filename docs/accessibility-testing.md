# 🧪 Accessibility testing

## Automated checks
Run lint and inspect semantic attributes, but recognize that ESLint is not an accessibility auditor. Add an automated accessibility scanner only when a browser test harness is selected and its limits are understood.

## Manual verification
- Navigate all controls with Tab, Shift+Tab, Enter, Space, Escape, and arrow keys where native controls support them.
- Verify visible focus and restored focus after closing the dialog.
- Test browser zoom and narrow-width reflow.
- Check text, focus, and UI-boundary contrast.
- Test the live result count and error announcement with a screen reader.
- Enable reduced motion and confirm the interface remains understandable.
- Inspect missing/broken photo behavior.

## Reporting results
Record date, commit, environment, tool/browser/assistive technology, steps, observed behavior, and outcome. No formal audit has yet been completed. Use [accessibility audit issue template](../.github/ISSUE_TEMPLATE/accessibility_report.yml) to report defects.
