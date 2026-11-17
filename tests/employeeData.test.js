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

test('requires a supported ID and non-empty name, email, and department', () => {
  const employees = normalizeEmployees([
    { id: {}, name: 'Invalid ID', email: 'id@example.invalid', department: 'Frontend Developer' },
    { id: 3, name: 'Blank email', email: '  ', department: 'Frontend Developer' },
    { id: 4, name: 'Blank department', email: 'dept@example.invalid', department: ' ' },
    { id: 5, name: 'Blank name', email: 'name@example.invalid', department: 'Frontend Developer' },
    { id: '  ', name: 'Blank string ID', email: 'blank@example.invalid', department: 'Frontend Developer' },
    { id: 'valid-6', name: '  Casey Smith  ', email: ' casey@example.invalid ', department: ' Design ' },
  ]);
  assert.equal(employees.length, 1);
  assert.deepEqual(
    { name: employees[0].name, email: employees[0].email, department: employees[0].department },
    { name: 'Casey Smith', email: 'casey@example.invalid', department: 'Design' },
  );
});

test('converts numeric contact values to strings', () => {
  const [employee] = normalizeEmployees([
    { id: 10, name: 'Casey Smith', email: 'casey@example.invalid', department: 'Design', contact: 12345 },
  ]);
  assert.equal(employee.contact, '12345');
});

test('accepts HTTPS and same-origin photo paths only', () => {
  const employees = normalizeEmployees([
    { id: 11, name: 'HTTPS Photo', email: 'one@example.invalid', department: 'Design', photo: 'https://images.example.invalid/person.png' },
    { id: 12, name: 'Local Photo', email: 'two@example.invalid', department: 'Design', photo: '/images/person.png' },
    { id: 13, name: 'Script Photo', email: 'three@example.invalid', department: 'Design', photo: 'javascript:alert(1)' },
    { id: 14, name: 'Data Photo', email: 'four@example.invalid', department: 'Design', photo: 'data:image/svg+xml,<svg />' },
    { id: 15, name: 'Protocol Relative', email: 'five@example.invalid', department: 'Design', photo: '//tracker.example.invalid/pixel.png' },
  ]);
  assert.equal(employees[0].photo, 'https://images.example.invalid/person.png');
  assert.equal(employees[1].photo, '/images/person.png');
  assert.equal(employees[2].photo, '');
  assert.equal(employees[3].photo, '');
  assert.equal(employees[4].photo, '');
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
