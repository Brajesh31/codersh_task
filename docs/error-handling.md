# 🚦 Error handling

## Current handled conditions
| Condition | Behavior |
| --- | --- |
| JSON request fails | Show error panel and retry button |
| Request is aborted on unmount | Ignore cancellation |
| Top-level payload is not an array | Normalizer throws; page enters error state |
| Row is null, non-object, or malformed | Skip the row |
| Employee ID is duplicated | Keep the first occurrence and skip later duplicates |
| Optional photo missing | Render initials fallback |
| Optional contact missing | Omit contact row in dialog |
| localStorage unavailable | Continue without preference persistence |

## User-facing versus diagnostic detail
The visitor receives a brief retry message. Avoid exposing raw stack traces, local file paths, personal records, or internal environment details in UI messages. When adding logging, log safe error categories rather than the entire employee payload.

## Future improvements
Add structured runtime diagnostics only when a real telemetry decision is made. If remote APIs are introduced, define retry limits, timeout behavior, status-specific messaging, and correlation identifiers without exposing private data.
