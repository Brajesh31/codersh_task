import React from 'react';
import '../CSS/EmployeeCard.css';

const EmployeeCard = ({ data }) => {
    return (
        // Employee Card
        <div className="employee-card">
            <img
                src={data.photo}
                className="employee-photo"
                alt="Employee"
            />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="email">{data.email}</p>
                <p className="department">{data.department}</p>
            </div>
        </div>
    );
};

export default EmployeeCard;