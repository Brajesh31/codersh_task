import React, { useEffect, useState } from 'react';
import EmployeeCard from "../Components/EmployeeCard";
import EmployeeModal from "../Components/EmployeeModal";
import "../CSS/Home.css";
import axios from 'axios';

const Home = () => {
    const [employeeData, setEmployeeData] = useState([]);
    const [searchEmployee, setSearchEmployee] = useState("");
    const [selectedDept, setSelectedDept] = useState("");
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    // Fetch  data from JSON file
    const fetchingData = async () => {
        try {
            const result = await axios.get("./employeesData.json");
            setEmployeeData(result.data);
            console.log(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchingData();

        const savedSearch = localStorage.getItem('savedSearchTerm');
        if (savedSearch) {
            setSearchEmployee(savedSearch);
        }

        const savedDept = localStorage.getItem('savedDepartment');
        if (savedDept) {
            setSelectedDept(savedDept);
        }
    }, []);

    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
        setSearchEmployee(searchValue);

        localStorage.setItem('savedSearchTerm', searchValue);
    };

    const handleDeptChange = (e) => {
        const deptValue = e.target.value;
        setSelectedDept(deptValue);

        localStorage.setItem('savedDepartment', deptValue);
    };

    const closeModal = () => {
        setSelectedEmployee(null);
    };

    const openModal = (employee) => {
        setSelectedEmployee(employee);
    };

    // Filter employee data 
    const filteredData = employeeData.filter((employee) => {
        const searching =
            employee.name.toLowerCase().includes(searchEmployee.toLowerCase()) ||
            employee.email.toLowerCase().includes(searchEmployee.toLowerCase());
        const deptMatch = employee.department.includes(selectedDept);
        return searching && deptMatch;
    });

    return (
        <div className="container">
            <h1 className="main-title">Employee Directory</h1>
            <div className="search-filter">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search by name or email"
                    value={searchEmployee}
                    onChange={handleSearchChange}
                />
                <select value={selectedDept} onChange={handleDeptChange}>
                    <option value="">All Departments</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Fullstack Developer">Fullstack Developer</option>
                    <option value="Project Manager">Project Manager</option>
                </select>
            </div>

            {/* Card */}
            <div className="cards">
                {filteredData.length > 0 ? (
                    filteredData.map((employee, index) => (
                        <div key={index} className="card-wrapper" onClick={() => openModal(employee)}>
                            <EmployeeCard data={employee} />
                        </div>
                    ))
                ) : (
                    <p className="no-data">No data found</p>
                )}
            </div>

            {/* Modal */}
            {selectedEmployee && (
                <EmployeeModal
                    employee={selectedEmployee}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}

export default Home;