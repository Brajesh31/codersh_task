import test from 'node:test';
import assert from 'node:assert/strict';
import { filterEmployees, normalizeEmployees } from '../src/lib/employeeData.js';

const sample = [
  { id: 1, name: 'Alex Morgan', email: 'alex@example.invalid', department: 'Frontend Developer' },
  { id: 2, name: 'Jordan Lee', email: 'jordan@example.invalid', department: 'Backend Developer' },
];

test('normalizes valid records and fills optional defaults', () => {
  const employees = normalizeEmployees(sample);
  assert.equal(employees.length, 2);
  assert.equal(employees[0].photo, '');
  assert.equal(employees[0].contact, '');
});

test('rejects non-array payloads', () => {
  assert.throws(() => normalizeEmployees({ id: 1 }), /must be a JSON array/);
  assert.throws(() => normalizeEmployees(null), /must be a JSON array/);
});

test('skips malformed rows and duplicate identifiers', () => {
  const employees = normalizeEmployees([
    ...sample,
    { id: 1, name: 'Duplicate', email: 'duplicate@example.invalid', department: 'Frontend Developer' },
    { id: 3, name: '', email: 'empty@example.invalid', department: 'Frontend Developer' },
    null,
    'not a record',
  ]);
  assert.deepEqual(employees.map((employee) => employee.id), [1, 2]);
});

test('converts numeric contact values to strings', () => {
  const [employee] = normalizeEmployees([
    { id: 10, name: 'Casey Smith', email: 'casey@example.invalid', department: 'Design', contact: 12345 },
  ]);
  assert.equal(employee.contact, '12345');
});

test('searches names and emails without case sensitivity', () => {
  assert.deepEqual(filterEmployees(sample, 'ALEX').map((employee) => employee.id), [1]);
  assert.deepEqual(filterEmployees(sample, 'JORDAN@EXAMPLE').map((employee) => employee.id), [2]);
});

test('uses exact department filters', () => {
  assert.deepEqual(filterEmployees(sample, '', 'Backend Developer').map((employee) => employee.id), [2]);
  assert.deepEqual(filterEmployees(sample, '', 'Backend'), []);
});

test('combines search and department filters', () => {
  assert.deepEqual(filterEmployees(sample, 'alex', 'Backend Developer'), []);
  assert.deepEqual(filterEmployees(sample, 'alex', 'Frontend Developer').map((employee) => employee.id), [1]);
});

test('treats blank search and department as no filters', () => {
  assert.equal(filterEmployees(sample, '   ', '').length, 2);
});
