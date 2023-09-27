import React, { useState } from "react";

function UrgentConfirmationModal({ isOpen, onClose, onConfirm }) {
  const [isUrgent, setIsUrgent] = useState(false);

  const handleConfirm = () => {
    onConfirm(isUrgent);
    onClose();
  };

  return (
    <div
      className={`modal ${isOpen ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Is this product urgent?</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <label>
              <input
                type="checkbox"
                checked={isUrgent}
                onChange={() => setIsUrgent(!isUrgent)}
              />
              Yes, it's urgent
            </label>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleConfirm}
            >
              Confirm
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UrgentConfirmationModal;
