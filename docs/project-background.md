# 🧭 Project background

The repository began as a compact React/Vite exercise for displaying a small employee list from JSON. Its shape favors learning and demo simplicity: a single directory screen, a page-level data coordinator, a card component, a modal component, and CSS files scoped by view.

The original architecture makes the data path easy to follow but has important limits. Static assets are public, local filtering does not scale to large datasets, and the absence of a server means there is no trusted identity or permission boundary. A richer product would need a separate requirements and architecture decision, not merely extra frontend controls.

## Current context
- The app loads `public/employeesData.json`.
- The browser Fetch API retrieves the JSON; no external business API is called.
- Search and department selection execute in the browser.
- Filter preferences are held in localStorage.
- Profile information is rendered in a dialog.

## Why the docs are explicit about boundaries
A polished UI can look like an internal employee system even when its data is publicly downloadable. This repository documents that gap so future contributors do not deploy actual personal information into a public directory by mistake.

See [Product overview](product-overview.md), [Architecture](architecture.md), and [Privacy](privacy.md).
