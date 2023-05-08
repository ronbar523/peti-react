import React, { useEffect, useState } from "react";
import CloseA from "./Buttons/CloseA";
import CloseB from "./Buttons/CloseB";
import Resend from "./Buttons/Resend";

const ModalResetSuccess = ({ setModalResetSuccess, setModalUserBlock }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const [requestAvailble, setRequestAvailble] = useState(true);

  return (
    <>
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalMessageSuccessLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Message!</h5>
              <CloseA setModalResetSuccess={setModalResetSuccess} />
            </div>
            <div className="modal-body">
              {requestAvailble ? (
                <h6 className="p-4 text-center modalMessageSuccessText">
                  Please check your email
                </h6>
              ) : (
                <h6 className="p-4 text-center modalMessageSuccessText">
                  Request not availble
                </h6>
              )}
            </div>

            <div className="modal-footer">
              <CloseB setModalResetSuccess={setModalResetSuccess} />
              <Resend setModalUserBlock={setModalUserBlock} setRequestAvailble={setRequestAvailble} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalResetSuccess;
