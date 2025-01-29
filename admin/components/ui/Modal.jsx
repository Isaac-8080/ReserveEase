import React from 'react';
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal modal-open">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Create Reservation</h3>
           {children}
           <div className="modal-action">
                <button className="btn" onClick={onClose}>Close</button>
            </div>
        </div>
    </div>
  );
};
export default Modal;
