import '../CSS/EmployeeCard.css';

const EmployeeCard = ({ data, onSelect }) => (
  <button className="employee-card" type="button" onClick={onSelect} aria-label={`View details for ${data.name}`}>
    {data.photo ? (
      <img src={data.photo} className="employee-photo" alt="" loading="lazy" referrerPolicy="no-referrer" />
    ) : (
      <span className="employee-avatar-fallback" aria-hidden="true">{data.name.slice(0, 1).toUpperCase()}</span>
    )}
    <span className="card-body">
      <span className="card-title">{data.name}</span>
      <span className="email">{data.email}</span>
      <span className="department">{data.department}</span>
      <span className="view-profile">View profile <span aria-hidden="true">↗</span></span>
    </span>
  </button>
);

export default EmployeeCard;
