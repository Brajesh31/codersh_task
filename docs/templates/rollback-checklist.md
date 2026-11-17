# ↩️ Rollback checklist

## Trigger
Describe the failed release, severity, and decision owner.

## Identify target
- [ ] Last known-good commit/build identified.
- [ ] Changes introduced since that point reviewed.
- [ ] Data/schema compatibility checked.

## Execute
- [ ] Rollback performed using host/provider procedure.
- [ ] Static assets and employee JSON restored together.
- [ ] Cache invalidation performed where needed.

## Verify
- [ ] Root page and JSON asset load.
- [ ] Search, department filter, and dialog work.
- [ ] No unintended personal data is exposed.
- [ ] Monitoring/workflow status reviewed.

## Closeout
Record timeline, outcome, evidence, communication, and preventive action.
