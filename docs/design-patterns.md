# 🧠 Design patterns and state ownership

The current code uses a small number of patterns deliberately:

- **Composition:** the Home page composes cards and a dialog from focused child components.
- **Controlled inputs:** search and department inputs derive their value from React state.
- **Unidirectional data flow:** the page passes employee data and callbacks to children.
- **Pure data transformations:** normalization and filtering are plain functions that can be tested without rendering React.
- **Effect-based synchronization:** effects load the static dataset and persist selected preferences.
- **Conditional rendering:** loading, error, empty, results, and dialog states appear only when their state conditions are satisfied.

Avoid introducing global state libraries or data-fetching frameworks for the current scale. If additional pages or server state are introduced, document the specific problem before selecting an abstraction. The dialog uses refs and an effect for focus/keyboard lifecycle; keep event listeners paired with cleanup.
