# 🧩 Problem statement

A small sample team dataset is difficult to explore when a visitor must inspect raw JSON or scan an unfiltered list. The directory needs a lightweight interface that exposes the most useful summary fields and lets a visitor narrow results without server setup.

## User problem
- Finding one person among several entries takes manual scanning.
- A department-based lookup requires repeated visual comparison.
- Showing every detail in the grid would make the interface noisy.
- A failed data request should not leave the visitor with a blank page.

## Engineering problem
The frontend must treat the static JSON as untrusted input, avoid duplicate rendering keys, tolerate optional fields, and present loading and error states.

## Constraint that must not be hidden
The source data is a public asset. This is acceptable only for synthetic or explicitly approved public examples. It is not suitable for confidential employee information.
