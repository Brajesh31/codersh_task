# ✨ Feature reference

## Directory loading
The home page requests the public JSON asset. It displays a loading state before completion, an error message with retry when the request or payload fails, and an inline warning if malformed or duplicate rows are skipped.

## Search
Search trims surrounding whitespace and matches employee names and email addresses without case sensitivity. It does not query a server or search contact, department, or salary fields.

## Department filter
The selector offers the department labels configured in the Home page. Filtering uses exact string equality. If data introduces a new department, the current control list must be updated or made data-driven.

## Employee cards
Cards show photo, name, email, and department. A missing photo uses an initials fallback. Cards are real buttons and can be activated with a keyboard.

## Profile dialog
The selected profile shows available employee ID, email, department, optional contact, and optional sample salary. It supports close button, backdrop click, Escape, an initial focus target, a basic Tab focus loop, and focus restoration.

## Local preferences
The current search term and department are stored under `savedSearchTerm` and `savedDepartment`. Storage access errors are ignored so the directory remains usable. These are convenience preferences, not an account profile or synchronized setting.
