import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../../../Store/User/UserStore";
import CloseA from "./Buttons/CloseA";
import CloseB from "./Buttons/CloseB";
import ContactUs from "./Buttons/ContactUs";

const ModalBlock = ({ setModalUserBlock }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      {userStore.isLogin && <Navigate to="/" />}
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalBlockLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Message!</h5>
              <CloseA setModalUserBlock={setModalUserBlock} />
            </div>
            <div className="modal-body">
              <h6 className="p-4 text-center modalBlockSpaceParagraph">
                Your account is blocked!
              </h6>
            </div>

            <div className="modal-footer">
              <ContactUs setModalUserBlock={setModalUserBlock} />
              <CloseB setModalUserBlock={setModalUserBlock} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBlock;
