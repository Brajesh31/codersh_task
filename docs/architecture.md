# Architecture

## Overview

This is a client-side React application built with Vite and React Router. It has one configured route, `/`, which renders the employee directory. The directory fetches a static JSON file from the Vite public directory and performs search and filtering in the browser.

```text
Browser
  -> index.html / src/main.jsx (Vite and React entry)
  -> App.jsx (BrowserRouter and root route)
  -> Views/Pages/Home.jsx
       -> Axios GET ./employeesData.json
       -> EmployeeCard list and EmployeeModal
       -> localStorage for search and department preferences
  -> public/employeesData.json (public static dataset)
```

## Components and responsibilities

- `src/main.jsx`: mounts the React application in Strict Mode and imports global CSS.
- `src/App.jsx`: declares the BrowserRouter and the single home route.
- `src/Views/Pages/Home.jsx`: fetches records, restores/saves search and department preferences, filters rows, and opens/closes the selected employee modal.
- `src/Views/Components/EmployeeCard.jsx`: renders photo, name, email, and department.
- `src/Views/Components/EmployeeModal.jsx`: renders ID, name, photo, email, contact number, department, and salary. The modal closes by backdrop click or close button.
- `src/Views/CSS/`: contains responsive layout, card, and modal styling.
- `public/employeesData.json`: static records served directly to browsers; it is not a private database.
- `vite.config.js` and `eslint.config.js`: configure the React Vite plugin and ESLint.

## Data flow

On mount, `Home` calls Axios for `./employeesData.json`, then restores `savedSearchTerm` and `savedDepartment` from localStorage. Search compares lowercased name and email strings. Department filtering uses substring inclusion. Selecting a card stores that employee in component state and displays its details modal. Only search and department selections persist in localStorage.

## Privacy and external resources

The JSON file is in Vite's `public/` directory, so all records and fields can be downloaded by any site visitor. The current data contains names, phone-like contact values, email addresses, salaries, and remote profile-photo URLs. Do not replace it with private employee records. Photos are fetched from external providers, so the browser contacts those hosts and the asset rights need separate review.

## No backend or database

Axios is used to fetch a static file; it does not imply an application API. There is no server source, authentication, access control, database, write endpoint, or employee-editing workflow.
