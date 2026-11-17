# 🔐 Security audit report

## Audit metadata
Scope, date, reviewer, commit, tools, and environment.

## Scope exclusions
List what was not tested. Do not imply a full penetration test if only static checks were run.

## Checks performed
| Area | Method/tool | Result | Evidence |
| --- | --- | --- | --- |
| Dependencies | npm audit | | |
| Source analysis | CodeQL | | |
| Public data review | Inspect JSON and dist | | |
| Secrets | Repository/history scan | | |

## Findings
For each finding: ID, severity, affected path, evidence, impact, remediation, owner, and status.

## Residual risk and recommendation
State known gaps and whether the current release is acceptable.

## Re-test
Record the commit and steps used to verify each fix.
