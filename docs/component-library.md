# 🧱 Component library

There is no third-party UI component library. The repository contains a small set of application-specific components.

## EmployeeCard
**Props:** `data`, `onSelect`.  
Renders one summary as a semantic button. The photo is decorative because the employee name is displayed as text. Missing photo values render an initials fallback.

## EmployeeModal
**Props:** `employee`, `onClose`.  
Renders the selected profile in a modal dialog. It labels the dialog from the employee name, moves focus to the close button, supports Escape, provides a basic Tab focus loop, restores focus on unmount, and locks body scrolling while open.

## Home page
Owns the employee dataset, search term, selected department, selected employee, and loading/error status. It renders the controls and conditionally selects the result, empty, loading, or error view.

## Reuse rules
Do not move employee-specific behavior into generic UI primitives prematurely. If a repeated component emerges, keep its props explicit, add accessibility behavior, and document its states before reusing it.
