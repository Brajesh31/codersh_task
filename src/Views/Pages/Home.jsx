import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import EmployeeCard from '../Components/EmployeeCard';
import EmployeeModal from '../Components/EmployeeModal';
import '../CSS/Home.css';

const DATA_URL = '/employeesData.json';
const DEPARTMENTS = [
  'Frontend Developer',
  'Backend Developer',
  'UI/UX Designer',
  'Fullstack Developer',
  'Project Manager',
];

function readPreference(key) {
  try {
    return window.localStorage.getItem(key) ?? '';
  } catch {
    return '';
  }
}

function savePreference(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // The directory remains usable when browser storage is unavailable.
  }
}

function normalizeEmployees(payload) {
  if (!Array.isArray(payload)) {
    throw new Error('The employee dataset must be a JSON array.');
  }

  const seenIds = new Set();
  return payload.filter((record) => {
    if (!record || typeof record !== 'object') return false;
    const valid = record.id !== undefined && record.id !== null
      && typeof record.name === 'string'
      && typeof record.email === 'string'
      && typeof record.department === 'string';
    if (!valid || seenIds.has(String(record.id))) return false;
    seenIds.add(String(record.id));
    return true;
  }).map((record) => ({
    ...record,
    photo: typeof record.photo === 'string' ? record.photo : '',
    contact: typeof record.contact === 'string' || typeof record.contact === 'number'
      ? String(record.contact) : '',
  }));
}

export default function Home() {
  const [employeeData, setEmployeeData] = useState([]);
  const [searchEmployee, setSearchEmployee] = useState(() => readPreference('savedSearchTerm'));
  const [selectedDept, setSelectedDept] = useState(() => readPreference('savedDepartment'));
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [status, setStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');

  const loadEmployees = useCallback(async (signal) => {
    setStatus('loading');
    setErrorMessage('');
    try {
      const response = await axios.get(DATA_URL, { signal });
      const employees = normalizeEmployees(response.data);
      setEmployeeData(employees);
      setStatus('success');
      if (employees.length !== response.data.length) {
        setErrorMessage('Some records were skipped because required fields were missing or IDs were duplicated.');
      }
    } catch (error) {
      if (axios.isCancel(error) || error.code === 'ERR_CANCELED') return;
      setStatus('error');
      setErrorMessage('Employee records could not be loaded. Check your connection and try again.');
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    loadEmployees(controller.signal);
    return () => controller.abort();
  }, [loadEmployees]);

  useEffect(() => savePreference('savedSearchTerm', searchEmployee), [searchEmployee]);
  useEffect(() => savePreference('savedDepartment', selectedDept), [selectedDept]);

  const filteredData = useMemo(() => {
    const query = searchEmployee.trim().toLocaleLowerCase();
    return employeeData.filter((employee) => {
      const matchesSearch = employee.name.toLocaleLowerCase().includes(query)
        || employee.email.toLocaleLowerCase().includes(query);
      const matchesDepartment = !selectedDept || employee.department === selectedDept;
      return matchesSearch && matchesDepartment;
    });
  }, [employeeData, searchEmployee, selectedDept]);

  const clearFilters = () => {
    setSearchEmployee('');
    setSelectedDept('');
  };

  return (
    <main className="container">
      <header className="directory-header">
        <p className="eyebrow">PEOPLE · TEAMS · CONNECTIONS</p>
        <h1 className="main-title">Employee Directory</h1>
        <p className="directory-subtitle">Find the people and teams behind the work.</p>
      </header>

      <section className="directory-toolbar" aria-label="Employee filters">
        <label className="sr-only" htmlFor="employee-search">Search by name or email</label>
        <input
          id="employee-search"
          type="search"
          placeholder="Search by name or email"
          value={searchEmployee}
          onChange={(event) => setSearchEmployee(event.target.value)}
          autoComplete="off"
        />
        <label className="sr-only" htmlFor="department-filter">Filter by department</label>
        <select id="department-filter" value={selectedDept} onChange={(event) => setSelectedDept(event.target.value)}>
          <option value="">All Departments</option>
          {DEPARTMENTS.map((department) => <option key={department} value={department}>{department}</option>)}
        </select>
        <button className="clear-filters" type="button" onClick={clearFilters} disabled={!searchEmployee && !selectedDept}>
          Clear filters
        </button>
      </section>

      <div className="results-summary" aria-live="polite">
        {status === 'success' && <span>{filteredData.length} {filteredData.length === 1 ? 'employee' : 'employees'} found</span>}
        {errorMessage && status === 'success' && <span className="inline-warning">{errorMessage}</span>}
      </div>

      {status === 'loading' && (
        <div className="state-panel" role="status"><span className="loading-spinner" /> Loading employee directory…</div>
      )}
      {status === 'error' && (
        <div className="state-panel state-error" role="alert">
          <h2>We could not load the directory</h2>
          <p>{errorMessage}</p>
          <button type="button" className="retry-button" onClick={() => loadEmployees()}>Try again</button>
        </div>
      )}
      {status === 'success' && filteredData.length === 0 && (
        <div className="state-panel">
          <h2>No employees found</h2>
          <p>Try another search or clear the selected filters.</p>
          <button type="button" className="retry-button" onClick={clearFilters}>Clear filters</button>
        </div>
      )}

      {status === 'success' && filteredData.length > 0 && (
        <section className="cards" aria-label="Employee results">
          {filteredData.map((employee) => (
            <EmployeeCard key={employee.id} data={employee} onSelect={() => setSelectedEmployee(employee)} />
          ))}
        </section>
      )}

      {selectedEmployee && <EmployeeModal employee={selectedEmployee} onClose={() => setSelectedEmployee(null)} />}
      <footer className="directory-footer">Employee Directory <span>·</span> Sample directory experience</footer>
    </main>
  );
}
