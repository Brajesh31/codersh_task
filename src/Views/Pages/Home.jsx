import { useCallback, useEffect, useMemo, useState } from 'react';
import EmployeeCard from '../Components/EmployeeCard';
import EmployeeModal from '../Components/EmployeeModal';
import { filterEmployees, normalizeEmployees } from '../../lib/employeeData.js';
import '../CSS/Home.css';

const DATA_URL = `${import.meta.env.BASE_URL}employeesData.json`;
const DEPARTMENTS = [
  'Frontend Developer',
  'Backend Developer',
  'UI/UX Designer',
  'Fullstack Developer',
  'Project Manager',
];

function readPreference(key) {
  try { return window.localStorage.getItem(key) ?? ''; } catch { return ''; }
}

function savePreference(key, value) {
  try { window.localStorage.setItem(key, value); } catch {
    // The directory remains usable when browser storage is unavailable.
  }
}

export default function Home() {
  const [employeeData, setEmployeeData] = useState([]);
  const [searchEmployee, setSearchEmployee] = useState(() => readPreference('savedSearchTerm'));
  const [selectedDept, setSelectedDept] = useState(() => readPreference('savedDepartment'));
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [status, setStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');

  const loadEmployees = useCallback(async (signal) => {
    try {
      const response = await fetch(DATA_URL, { signal });
      if (!response.ok) {
        throw new Error(`Employee data request failed with HTTP ${response.status}`);
      }
      const payload = await response.json();
      const employees = normalizeEmployees(payload);
      setEmployeeData(employees);
      setStatus('success');
      if (employees.length !== payload.length) {
        setErrorMessage('Some records were skipped because required fields were missing or IDs were duplicated.');
      }
    } catch (error) {
      if (signal?.aborted || error.name === 'AbortError') return;
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

  const filteredData = useMemo(
    () => filterEmployees(employeeData, searchEmployee, selectedDept),
    [employeeData, searchEmployee, selectedDept],
  );

  const clearFilters = () => {
    setSearchEmployee('');
    setSelectedDept('');
  };
  const retryLoadEmployees = () => {
    setStatus('loading');
    setErrorMessage('');
    loadEmployees();
  };
  const closeModal = useCallback(() => setSelectedEmployee(null), []);

  return (
    <main className="container">
      <header className="directory-header">
        <p className="eyebrow">PEOPLE · TEAMS · CONNECTIONS</p>
        <h1 className="main-title">Employee Directory</h1>
        <p className="directory-subtitle">Find the people and teams behind the work.</p>
      </header>
      <section className="directory-toolbar" aria-label="Employee filters">
        <label className="sr-only" htmlFor="employee-search">Search by name or email</label>
        <input id="employee-search" type="search" placeholder="Search by name or email" value={searchEmployee}
          onChange={(event) => setSearchEmployee(event.target.value)} autoComplete="off" />
        <label className="sr-only" htmlFor="department-filter">Filter by department</label>
        <select id="department-filter" value={selectedDept} onChange={(event) => setSelectedDept(event.target.value)}>
          <option value="">All Departments</option>
          {DEPARTMENTS.map((department) => <option key={department} value={department}>{department}</option>)}
        </select>
        <button className="clear-filters" type="button" onClick={clearFilters} disabled={!searchEmployee && !selectedDept}>Clear filters</button>
      </section>
      <div className="results-summary" aria-live="polite">
        {status === 'success' && <span>{filteredData.length} {filteredData.length === 1 ? 'employee' : 'employees'} found</span>}
        {errorMessage && status === 'success' && <span className="inline-warning">{errorMessage}</span>}
      </div>
      {status === 'loading' && <div className="state-panel" role="status"><span className="loading-spinner" /> Loading employee directory…</div>}
      {status === 'error' && (
        <div className="state-panel state-error" role="alert">
          <h2>We could not load the directory</h2><p>{errorMessage}</p>
          <button type="button" className="retry-button" onClick={retryLoadEmployees}>Try again</button>
        </div>
      )}
      {status === 'success' && filteredData.length === 0 && (
        <div className="state-panel">
          <h2>No employees found</h2><p>Try another search or clear the selected filters.</p>
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
      {selectedEmployee && <EmployeeModal employee={selectedEmployee} onClose={closeModal} />}
      <footer className="directory-footer">Employee Directory <span>·</span> Sample directory experience</footer>
    </main>
  );
}
