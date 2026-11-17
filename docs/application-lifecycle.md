# 🔄 Application lifecycle

## Startup
The browser loads `index.html`, imports the Vite entry module, and mounts the React application. The root route renders the Home page.

## Data lifecycle
1. Home initializes search and department state from localStorage.
2. The first effect creates an AbortController and requests the JSON asset.
3. The browser Fetch API returns the payload or throws a request/parse error.
4. The normalizer rejects a non-array payload, skips malformed records, and rejects duplicate IDs.
5. Home sets success state and displays a warning if some rows were skipped.
6. A failed request sets the error state and offers a retry action.

## Interaction lifecycle
Search and department changes update local component state and the corresponding localStorage keys. A memoized helper calculates filtered rows. Activating a card stores the selected employee in state and mounts the dialog.

## Dialog lifecycle
The dialog remembers the previously focused element, moves focus to the close button, handles Escape, traps Tab within the dialog's focusable controls, and restores focus during cleanup. Backdrop dismissal occurs only when the backdrop itself receives the pointer event.

## Teardown
React unmounts the page and aborts the initial data request. The dialog removes its global keyboard listener, clears the body scroll lock, and attempts to restore prior focus.
