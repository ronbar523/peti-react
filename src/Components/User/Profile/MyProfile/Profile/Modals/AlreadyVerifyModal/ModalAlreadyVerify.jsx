import React from "react";
import CloseA from "./Buttons/CloseA";
import CloseB from "./Buttons/CloseB";

const ModalAlreadyVerify = ({ setModalAlreadyVerify, setModalChangeEmail }) => {
  return (
    <>
      <div className={"modal show fade d-block"} tabIndex="-1">
        <div className="modal-dialog model-border model-block ModalAlreadyVerifyMessageLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Message!</h5>
              <CloseA setModalAlreadyVerify={setModalAlreadyVerify} setModalChangeEmail={setModalChangeEmail} />
            </div>
            <div>
              <div className="modal-body">
                <h6 className="text-center p-4 modalAlreadtVerifyMessageText">
                You already verified your email
                </h6>
              </div>
              <div className="modal-footer">
                <CloseB setModalAlreadyVerify={setModalAlreadyVerify} setModalChangeEmail={setModalChangeEmail}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAlreadyVerify;
