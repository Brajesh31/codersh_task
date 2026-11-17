# 🧪 Security testing

## Current automated security checks
The repository includes CodeQL workflow analysis and dependency review automation. The npm lockfile and npm audit can help identify dependency advisories. These are automated signals, not a penetration test.

## Manual security review
- Inspect `public/employeesData.json` for personal or sensitive values.
- Inspect `dist/employeesData.json` after build to confirm exposure.
- Search source and history for accidental secrets.
- Verify that no client-side value is described as a secret.
- Review workflow permissions and third-party actions.
- Check external image URLs and data transfer.
- Confirm issue templates do not request private employee data.

## Not performed
No external penetration test, dynamic application security test, formal privacy impact assessment, or security certification is claimed. Record a test date, scope, tool version, findings, and remediation when such a review is performed.
