import React from "react";
import CloseA from "./NotAvailableButtons/CloseA";
import CloseB from "./NotAvailableButtons/CloseB";

const NotAvailableMessage = ({ setModalRequestNotAvailable, inputRef }) => {
  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog model-border model-block modalRequestMessageLocation">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="pt-2 px-2">Expired Requests</h5>
            <CloseA setModalRequestNotAvailable={setModalRequestNotAvailable} inputRef={inputRef} />
          </div>
          <div>
            <div className="modal-body">
              <h6 className="text-center modalRequestMessageText">
                The request is no longer available
              </h6>
            </div>
            <div className="modal-footer modalRequestMessageFotter">
              <CloseB
                setModalRequestNotAvailable={setModalRequestNotAvailable}
                inputRef={inputRef}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotAvailableMessage;
