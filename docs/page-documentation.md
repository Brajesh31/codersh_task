# 📄 Page documentation

## Home: Employee Directory
**Path:** `/`  
**Entry:** `src/App.jsx` renders the Home page.  
**Data:** Public static `employeesData.json`.  
**Primary tasks:** Search by name/email, filter by department, inspect employee details.

### States
- Loading: request in progress.
- Success with records: result count and cards.
- Success with no matches: empty state and clear button.
- Partial data: records display with an inline warning when some rows were skipped.
- Failure: error message and retry action.

### Controls
The search input and department selector use accessible labels. Clear filters resets both values. Cards are buttons. The profile dialog exposes a close action and Escape support.

### Privacy
The employee data is client-visible. Never use the page with confidential employee values from a real organization.
