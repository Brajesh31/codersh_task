# 🧱 Module documentation

## Source modules
| Path | Role | Main contract |
| --- | --- | --- |
| `src/main.jsx` | React entry | Mounts App into `#root` |
| `src/App.jsx` | Route container | Exposes the root route |
| `src/Views/Pages/Home.jsx` | Directory page | Coordinates request, filters, selection, and status |
| `src/Views/Components/EmployeeCard.jsx` | Result card | `data`, `onSelect` |
| `src/Views/Components/EmployeeModal.jsx` | Details dialog | `employee`, `onClose` |
| `src/lib/employeeData.js` | Pure data helpers | `normalizeEmployees`, `filterEmployees` |
| `src/Views/CSS/Home.css` | Page layout | Toolbar, results, status, footer |
| `src/Views/CSS/EmployeeCard.css` | Card design | Button/card states |
| `src/Views/CSS/EmployeeModal.css` | Dialog design | Overlay, content, details |
| `src/index.css` | Global foundation | Base styles, focus, reduced motion |

## Dependency direction
The page imports view components and data helpers. The pure data helper must not import React or browser APIs, so it remains straightforward to test under Node. Components receive values and callbacks through props.

## Editing rules
When adding a field, update the data contract, normalization behavior if necessary, modal rendering, tests, sample data, and documentation together. A field should not silently become required merely because one screen displays it.
