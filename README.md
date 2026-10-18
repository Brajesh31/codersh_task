# Employee Directory

A responsive employee directory built with React and Vite. It loads a static JSON dataset, shows employee cards, filters by name/email and department, and opens a detail modal for a selected record.

## Features

- Load sample records from `public/employeesData.json` with Axios
- Search employee names and email addresses without case sensitivity
- Filter the list by department
- Open a profile modal containing ID, name, photo, email, contact number, department, and salary
- Save the current search term and department selection in browser `localStorage`
- Responsive card grid and modal layout

## Requirements

- Node.js and npm
- A modern browser with JavaScript enabled

No backend, database, credentials, or external API key is required. Employee photos are loaded from third-party image URLs and therefore need an internet connection.

## Run locally

```sh
npm ci
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`. The app uses the root route `/`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite with hot-module reload |
| `npm run build` | Create a production bundle in `dist/` |
| `npm run preview` | Preview a built bundle locally |
| `npm run lint` | Run ESLint |

There is no automated test script in the current package.

## Data and privacy

`public/employeesData.json` is a static public asset fetched by the browser. Anyone who can access the deployed site can request the complete file, including contact numbers and salary fields; hiding fields in the interface would not make them private. Treat the included records as demo data and replace them with synthetic or explicitly authorized data before deploying. Search and department preferences are stored locally in the current browser; employee records are not saved by the app.

## Project layout

```text
src/
  App.jsx                         Router with the home route
  Views/Pages/Home.jsx            Data loading, search, department filter, selection
  Views/Components/EmployeeCard.jsx  Summary card
  Views/Components/EmployeeModal.jsx Full employee details
  Views/CSS/                      Page, card, and modal styles
public/
  employeesData.json              Static sample records served to the browser
```

See [docs/architecture.md](docs/architecture.md) for the data flow, [docs/development.md](docs/development.md) for contributor guidance, and [docs/troubleshooting.md](docs/troubleshooting.md) for common setup issues.

## Current limitations

- Employee data is static and is not edited or managed through an API.
- The UI has no dedicated loading or error message if the JSON fetch fails.
- The modal closes by clicking its backdrop or close button; keyboard focus management and Escape handling are not implemented.
- Some Vite starter logos and React Router/Axios package capabilities are not used for backend behavior.

## Contributing, support, and security

Read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a change. Use [SUPPORT.md](SUPPORT.md) for questions and [SECURITY.md](SECURITY.md) for private vulnerability reports. The [ROADMAP.md](ROADMAP.md) lists possible improvements without committed dates.

## License

The MIT grant in [LICENSE](LICENSE) covers original application code and documentation authored by Brajesh Kumar (`@brajesh31`). It excludes the sample employee records, third-party photos, and Vite starter artwork whose reuse rights are separate or unconfirmed.

Last updated: 2026-10-18 19:07 UTC
