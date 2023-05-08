import React, { useEffect } from "react";
import CloseA from "./Buttons/CloseA";
import CloseB from "./Buttons/CloseB";

const ModalUserDeleted = ({ setModalUserDeleted }) => {

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalUserDeletedLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">User Deleted</h5>
              <CloseA setModalUserDeleted={setModalUserDeleted} />
            </div>
            <div>
              <div className="modal-body">
                <h6 className="p-4 text-center">User not available</h6>
              </div>
              <div className="modal-footer">
                <CloseB setModalUserDeleted={setModalUserDeleted} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalUserDeleted;
