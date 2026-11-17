# 🧭 Navigation structure

The application has a single configured client-side route:

| Route | View | Purpose |
| --- | --- | --- |
| `/` | Home / Employee Directory | Browse and filter the sample employee list |

There is no application navigation menu because there is currently only one route. The modal is an in-page state, not a separate route. Documentation links live in the repository README rather than the app navigation.

If more routes are added, document each route's purpose, entry conditions, page title, access requirements, and deep-link behavior. BrowserRouter requires static hosting fallback to `index.html` for client-side routes.
