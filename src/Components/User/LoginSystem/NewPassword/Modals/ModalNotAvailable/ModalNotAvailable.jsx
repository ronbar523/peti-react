import React from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../../../../Store/User/UserStore";
import Close from "./Buttons/Close";
import Ok from "./Buttons/Ok";

const ModalNotAvailable = ({ setModalNotAvailable }) => {

  return (
    <>
      {userStore.isLogin && <Navigate to="/" />}
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalNotAvilableLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Message!</h5>
              <Close setModalNotAvailable={setModalNotAvailable} />
            </div>
            <div className="modal-body">
              <h6 className="p-4 text-center">
                Request not availble
              </h6>
            </div>

            <div className="modal-footer">
              <Ok />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNotAvailable;
