import React from "react";

const DeleteConfirmModal = ({ title, message, successAction, modalData }) => {
  return (
    <>
      <div>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="confirm-delete" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box rounded-md">
            <label
              htmlFor="confirm-delete"
              className="btn btn-sm btn-circle absolute right-3 top-3"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="py-4 ">{message}</p>
            <div className="modal-action">
              <label
                onClick={() => successAction(modalData)}
                htmlFor="confirm-delete"
                className="btn"
              >
                Yes
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirmModal;
