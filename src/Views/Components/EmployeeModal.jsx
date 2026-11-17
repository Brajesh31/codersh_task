import { useEffect, useRef } from 'react';
import '../CSS/EmployeeModal.css';

const EmployeeModal = ({ employee, onClose }) => {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('modal-open');
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('modal-open');
      previousFocus instanceof HTMLElement && previousFocus.focus();
    };
  }, [onClose]);

  const closeOnBackdrop = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div className="modal-backdrop" onMouseDown={closeOnBackdrop}>
      <section
        ref={dialogRef}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="employee-dialog-title"
        aria-describedby="employee-dialog-details"
      >
        <div className="modal-header">
          <div>
            <p className="modal-eyebrow">EMPLOYEE PROFILE</p>
            <h2 id="employee-dialog-title">{employee.name}</h2>
          </div>
          <button ref={closeButtonRef} className="close-btn" type="button" onClick={onClose} aria-label="Close employee profile">&times;</button>
        </div>
        <div className="modal-body" id="employee-dialog-details">
          <div className="employee-image">
            {employee.photo
              ? <img src={employee.photo} alt="" className="profile-img" referrerPolicy="no-referrer" />
              : <span className="profile-avatar-fallback" aria-hidden="true">{employee.name.slice(0, 1).toUpperCase()}</span>}
          </div>
          <div className="employee-details">
            <p><span>Employee ID</span><strong>{employee.id}</strong></p>
            <p><span>Email address</span><strong><a href={`mailto:${employee.email}`}>{employee.email}</a></strong></p>
            <p><span>Department</span><strong>{employee.department}</strong></p>
            {employee.contact && <p><span>Contact</span><strong>{employee.contact}</strong></p>}
            {employee.salary !== undefined && <p><span>Salary (sample data)</span><strong>{Number.isFinite(Number(employee.salary)) ? Number(employee.salary).toLocaleString() : employee.salary}</strong></p>}
          </div>
        </div>
        <p className="privacy-note">Sample profile data. Do not use this public dataset for confidential employee information.</p>
      </section>
    </div>
  );
};

export default EmployeeModal;
