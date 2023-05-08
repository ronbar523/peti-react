import React from "react";
import CloseA from "./Buttons/CloasA";
import CloseB from "./Buttons/CloseB";

const ModalSuccess = () => {
  return (
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalNotAvilableLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Message!</h5>
              <CloseA />
            </div>
            <div className="modal-body">
              <h6 className="p-4 text-center">Request not available</h6>
            </div>

            <div className="modal-footer">
              <CloseB />
            </div>
          </div>
        </div>
      </div>
  );
};

export default ModalSuccess;
