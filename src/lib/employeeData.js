export function normalizeEmployees(payload) {
  if (!Array.isArray(payload)) {
    throw new TypeError('The employee dataset must be a JSON array.');
  }

  const seenIds = new Set();
  const employees = [];

  for (const record of payload) {
    if (!record || typeof record !== 'object' || Array.isArray(record)) continue;

    const validId = (typeof record.id === 'string' && record.id.trim() !== '')
      || (typeof record.id === 'number' && Number.isFinite(record.id));
    const valid = validId
      && typeof record.name === 'string' && record.name.trim() !== ''
      && typeof record.email === 'string' && record.email.trim() !== ''
      && typeof record.department === 'string' && record.department.trim() !== '';

    if (!valid || seenIds.has(String(record.id))) continue;
    seenIds.add(String(record.id));

    const suppliedPhoto = typeof record.photo === 'string' ? record.photo.trim() : '';
    const safePhoto = /^(https?:\/\/|\/(?!\/))/i.test(suppliedPhoto) ? suppliedPhoto : '';

    employees.push({
      ...record,
      name: record.name.trim(),
      email: record.email.trim(),
      department: record.department.trim(),
      photo: safePhoto,
      contact: typeof record.contact === 'string' || typeof record.contact === 'number'
        ? String(record.contact) : '',
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
