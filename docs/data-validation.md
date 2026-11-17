# ✅ Data validation

## Dataset-level validation
The top-level payload must be an array. A non-array payload is treated as a load failure rather than silently displayed as an empty directory.

## Record-level validation
Each accepted row must be an object with a non-null, non-empty ID, a non-empty string name, a string email, and a string department. Duplicate IDs are skipped after the first accepted record. Optional photo values default to an empty string. Optional contact values are normalized to strings when supplied as strings or numbers.

## Deliberate limits
The helper does not validate email syntax, verify photo URLs, enforce a department enumeration, or check salary semantics. It is defensive rendering validation, not a server-side security boundary or authoritative HR data-quality system.

## Change protocol
If fields become required or new field types are added:
1. Update this document and the data contract.
2. Add positive and negative unit test cases.
3. Update the sample dataset.
4. Update the UI and empty/error behavior.
5. Review public data exposure.
