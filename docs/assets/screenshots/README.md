# 📸 Application screenshot evidence

<badge>Evidence pending</badge>

No application screenshots are committed yet. This is deliberate. A design mockup, stock illustration, generated dashboard, or hand-built image must not be presented as proof of the running application.

## 🎯 Screens worth capturing

Capture only screens that actually exist in the current build:

| Suggested file name | View | What it should demonstrate |
| --- | --- | --- |
| `directory-desktop.png` | Root directory, desktop | Page heading, search/filter controls, and synthetic employee cards |
| `directory-filtered.png` | Search or department filter | A visible, reproducible filtered result and result count |
| `employee-profile-dialog.png` | Selected profile | Dialog heading, profile content, close control, and surrounding context |
| `directory-mobile.png` | Narrow viewport | Responsive controls, card layout, and no horizontal overflow |
| `directory-empty-state.png` | Search with no match | Helpful empty state and clear-filter action |
| `directory-error-state.png` | Controlled data-load failure | User-facing error and retry action, only if safely reproducible |

Do not manufacture error states by editing a screenshot. Use a local test run or browser network blocking and describe the method.

## 🛠️ Capture procedure

1. Check out the commit being documented.
2. Run `npm ci`, then `npm run dev`, or serve the verified `dist/` build.
3. Open the actual Vite URL printed in the terminal.
4. Use the repository's synthetic data. The sample uses reserved `.invalid` email addresses.
5. Set a reproducible viewport and browser zoom.
6. Capture the page from the running browser without retouching UI content.
7. Record the commit SHA, browser/version, viewport, capture date, and scenario.
8. Optimize image size without changing the information shown.
9. Recheck that the image contains no real personal details, browser notifications, credentials, other tabs, local paths, or unrelated desktop content.
10. Add the image to the README only after verifying the relevant feature still exists at the referenced commit.

## 📁 File and naming conventions

- Use descriptive lowercase names with hyphens.
- Prefer PNG for crisp interface captures; use WebP only if repository tooling and GitHub rendering are verified.
- Keep source captures at a readable resolution and optimize repository size.
- Avoid animated GIFs unless a short interaction cannot be explained with a still image.
- Do not include screenshots of private production environments.

## 🧾 Evidence manifest

When screenshots are added, maintain this table:

| File | Commit | Browser | Viewport | Scenario | Checked for personal data |
| --- | --- | --- | --- | --- | --- |
| Pending | | | | | |

## ✅ Review checklist

- [ ] Captured from the real application, not a mockup.
- [ ] Uses only synthetic data.
- [ ] Relevant behavior exists in the recorded commit.
- [ ] No private or unrelated content is visible.
- [ ] Alt text is included wherever the image is embedded.
- [ ] Screenshot has a useful explanation, not decorative placement.

Until evidence exists, README should continue to state that application screenshots are pending.
