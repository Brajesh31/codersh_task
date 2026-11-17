# 🎯 Project objectives

| Objective | Why it matters | Evidence in the current app |
| --- | --- | --- |
| Make records scannable | Cards are quicker to scan than raw JSON | Employee card grid |
| Enable quick lookup | Visitors often know a name or email | Case-insensitive search |
| Narrow by team | Department provides a simple grouping | Department selector |
| Show detail on demand | Keep the result surface compact | Employee profile dialog |
| Preserve convenience | Repeated filters should survive reload | localStorage preferences |
| Handle imperfect input | Public JSON may be malformed | Normalization helper |
| Keep development simple | Contributors should start without a backend | npm + Vite scripts |

## Quality objectives
- Predictable state transitions for load, success, error, and empty results.
- Accessible names, keyboard activation, focus visibility, and reduced-motion support.
- No undocumented dependency or hidden configuration.
- Honest privacy and implementation statements.
- Tests for deterministic data behavior.

## Not current objectives
The project does not currently aim to manage employee lifecycle, secure private workforce data, authenticate users, expose a business API, or connect to an HR/payroll platform.
