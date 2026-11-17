# 🔌 Integrations

## Current state
The application has no business-system integration, webhook consumer, webhook producer, analytics integration, or custom REST API. Axios requests only the repository's own static employee JSON asset.

## External resources
Employee profile images currently use external image URLs in the data file. These are browser-side resource requests, not trusted application integrations. External hosts can observe requests and may change availability or usage terms.

## Before adding an integration
Document the purpose, data sent and received, authentication method, rate limits, error handling, user notice/consent where applicable, dependency owner, and failure mode. Never send employee information to an external service without authorization and privacy review.
