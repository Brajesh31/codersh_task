# 🧭 Navigation structure

The application currently presents one directory screen at the root path:

| Path | View | Purpose |
| --- | --- | --- |
| `/` | Home / Employee Directory | Browse and filter the sample employee list |

There is no application navigation menu because there is only one screen. The modal is an in-page state, not a separate path. Documentation links live in the repository README rather than the app interface.

If additional screens or client-side routes are added, document each path's purpose, entry conditions, page title, access requirements, and deep-link behavior. A routing library and static-host fallback should be introduced only when a real multi-page requirement exists.
