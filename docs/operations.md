# 🧰 Operations and maintainer runbook

## 1. Operating model

The current application is a static React/Vite site. Routine operations are repository and artifact focused: review changes, run quality checks, build the site, publish `dist/` to a selected static host, and confirm that the public JSON contains safe demonstration data.

There are no backend processes, database migrations, queues, service credentials, scheduled employee imports, or private data store to operate.

## 2. Before a change is published

- [ ] Review the source diff and linked issue.
- [ ] Check dependency changes and current advisories.
- [ ] Run `npm ci`.
- [ ] Run `npm run lint`.
- [ ] Run `npm test`.
- [ ] Run `npm run build`.
- [ ] Run `python scripts/validate_repo.py`.
- [ ] Run `python scripts/validate_docs.py`.
- [ ] Inspect `dist/employeesData.json` and verify synthetic data.
- [ ] Confirm no new public field exposes personal data.
- [ ] Record the commit and retain a known-good build.

## 3. After a static deployment

1. Open the deployed root page over HTTPS.
2. Check that JS and CSS assets load.
3. Request the employee JSON asset directly and verify the response is valid.
4. Test search and exact department filtering.
5. Open and close a profile dialog.
6. Check a narrow viewport and keyboard interaction.
7. Review the browser console and network panel.
8. Record the deployed commit and artifact identifier.

The project has no production host selected. These are provider-neutral checks, not confirmation that a deployment currently exists.

## 4. Routine maintenance cadence

| Activity | Suggested trigger | Evidence |
| --- | --- | --- |
| Dependency review | Weekly Dependabot proposals | Reviewed PR/update decision |
| Full dependency audit | On dependency changes and scheduled scan | npm audit summary |
| CI health | Every push / pull request | GitHub Actions run |
| Documentation check | Every doc/code change | Docs validation run |
| Public sample-data check | Before every deployment | Validator and artifact review |
| Accessibility review | Before visual or interaction release | Manual test record |

## 5. Incident and rollback

For a broken build, restore a known-good complete `dist/` artifact using the selected host's procedure. Restore HTML, assets, and JSON from the same build. If private data was published, rollback is not enough because Git history, caches, forks, or downloads may retain copies. Follow the security/privacy incident process.

## 6. Operational facts not to invent

Do not publish uptime, visitor counts, incident-response times, error rates, SLA, deployment frequency, or monitoring coverage without a real measurement system and an identified owner.
