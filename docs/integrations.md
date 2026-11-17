# 🔌 Integrations

## Current state
The application has no business-system integration, webhook consumer, webhook producer, analytics integration, or custom REST API. The browser Fetch API retrieves only the repository's own static employee JSON asset.

## External resources
The current privacy-safe sample leaves the optional photo field empty, so the app does not request remote employee portraits. If future data includes image URLs, they will create browser-side requests to those hosts. Review provider behavior, image rights, and potential request metadata before adding them.

## Before adding an integration
Document the purpose, data sent and received, authentication method, rate limits, error handling, user notice/consent where applicable, dependency owner, and failure mode. Never send employee information to an external service without authorization and privacy review.
