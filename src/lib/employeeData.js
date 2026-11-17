export function normalizeEmployees(payload) {
  if (!Array.isArray(payload)) throw new TypeError('The employee dataset must be a JSON array.');
  const seenIds = new Set();
  const employees = [];
  for (const record of payload) {
    if (!record || typeof record !== 'object' || Array.isArray(record)) continue;
    const valid = record.id !== undefined && record.id !== null && String(record.id).trim() !== ''
      && typeof record.name === 'string' && record.name.trim() !== ''
      && typeof record.email === 'string' && typeof record.department === 'string';
    if (!valid || seenIds.has(String(record.id))) continue;
    seenIds.add(String(record.id));
    employees.push({
      ...record,
      photo: typeof record.photo === 'string' ? record.photo : '',
      contact: typeof record.contact === 'string' || typeof record.contact === 'number' ? String(record.contact) : '',
    });
  }
  return employees;
}

export function filterEmployees(employees, searchTerm = '', department = '') {
  const query = String(searchTerm).trim().toLocaleLowerCase();
  return employees.filter((employee) => {
    const name = String(employee.name ?? '').toLocaleLowerCase();
    const email = String(employee.email ?? '').toLocaleLowerCase();
    return (!query || name.includes(query) || email.includes(query))
      && (!department || employee.department === department);
  });
}
