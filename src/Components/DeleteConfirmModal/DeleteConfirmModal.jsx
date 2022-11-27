import React from "react";

const DeleteConfirmModal = ({ deleteProduct, handleDeleteProduct }) => {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirm-delete" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box rounded-md">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete ?
          </h3>
          <p className="py-4 font-semibold">
            If you delete{" "}
            <span className="font-semibold text-red-600">
              {deleteProduct.brand}, {deleteProduct.modal}{" "}
            </span>
            it won't be recover
          </p>
          <div className="modal-action">
            <label
              onClick={()=>handleDeleteProduct(deleteProduct)}
              htmlFor="confirm-delete"
              className="btn btn-sm"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirmModal;
