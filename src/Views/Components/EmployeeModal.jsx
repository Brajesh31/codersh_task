import React from 'react';
import '../CSS/EmployeeModal.css';

const EmployeeModal = ({ employee, onClose }) => {
    return (
        // Modal
        <div className="modal-backdrop" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-header">
                    <h2>{employee.name}</h2>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    <div className="employee-image">
                        <img
                            src={employee.photo}
                            alt={employee.name}
                            className="profile-img"
                        />
                    </div>
                    <div className="employee-details">
                        <p><strong>ID:</strong> {employee.id}</p>
                        <p><strong>Email:</strong> {employee.email}</p>
                        <p><strong>Department:</strong> {employee.department}</p>
                        <p><strong>Contact:</strong> {employee.contact}</p>
                        <p><strong>Salary:</strong> {employee.salary}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeModal;