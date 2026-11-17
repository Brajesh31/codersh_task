# ↩️ Static-site rollback checklist

> A rollback restores a known-good site artifact or source commit. It does not replace incident investigation, data privacy review, or a forward fix.

## 1. Trigger and authority

- [ ] Describe the failure, user impact, start time, and detection method.
- [ ] Identify the decision owner and who is executing the rollback.
- [ ] Decide whether the issue is a build defect, broken static asset, configuration issue, or data exposure incident.
- [ ] If personal data or secrets were exposed, follow the security/privacy incident process. A simple rollback does not undo downloads or cached copies.

## 2. Select a known-good release

| Field | Value |
| --- | --- |
| Current deployment | |
| Last known-good commit | |
| Build artifact / deployment ID | |
| Target host | |
| Reason for rollback | |

- [ ] Confirm the commit and artifact are real and available.
- [ ] Review changes since the known-good version.
- [ ] Confirm static JSON schema and frontend version are compatible.
- [ ] Confirm the previous artifact does not reintroduce exposed data or known vulnerable dependencies.

## 3. Execute the rollback

- [ ] Follow the hosting provider's documented rollback or redeployment procedure.
- [ ] Restore `index.html`, assets, and `employeesData.json` from the same build.
- [ ] Do not restore files manually from mixed commits.
- [ ] Invalidate stale CDN/browser caches when required.
- [ ] Record operator, timestamp, commands/actions, and deployment identifier.

## 4. Verify the restored site

- [ ] Root route returns successfully.
- [ ] JavaScript and CSS assets load without 404 responses.
- [ ] Employee JSON is reachable and contains only the approved synthetic data.
- [ ] Search by name and email works.
- [ ] Department filtering and clear filters work.
- [ ] Loading, empty, error, and retry states behave as expected.
- [ ] Employee dialog opens and closes by button, backdrop, and Escape.
- [ ] Keyboard focus returns correctly after closing the dialog.
- [ ] Mobile layout and reduced-motion styles remain usable.
- [ ] No console errors or broken external assets are observed.

## 5. Communicate and close

| Audience | Message / channel | Owner | Time |
| --- | --- | --- | --- |
| Users / stakeholders | | | |
| Maintainers | | | |

- [ ] State what failed, what was restored, and any remaining limitation.
- [ ] Open a follow-up issue for root-cause correction.
- [ ] Preserve logs and evidence without exposing personal data.
- [ ] Review whether a privacy/security incident process is needed.

## 6. Post-incident review

**Root cause:**

**What worked:**

**What failed:**

**Corrective action:**

**Preventive action and owner:**

**Date of review:**
