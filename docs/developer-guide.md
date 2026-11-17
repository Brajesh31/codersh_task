# 👩‍💻 Developer guide

## Where to work
Use `src/Views/Pages/Home.jsx` for the directory orchestration, `src/Views/Components/` for presentational cards/dialog, and `src/lib/employeeData.js` for pure data operations. Keep tests in `tests/`.

## Data helper responsibilities
`normalizeEmployees` owns record validation and safe optional defaults. `filterEmployees` owns query semantics. If these contracts change, update their tests and [data contract](data-contract.md).

## UI responsibilities
The Home page owns loading and request state. EmployeeCard should remain stateless. EmployeeModal owns dialog lifecycle effects, not employee selection.

## Safe changes
Never add confidential data to `public/`. Do not log whole employee objects. Keep controls labelled and keyboard accessible. Verify reduced motion and responsive layouts.

## Review checklist
Run all automated commands, manually exercise the affected path, update the docs hub, and make sure every cross-link points to a real file.
