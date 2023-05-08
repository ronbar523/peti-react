import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../../../../../Store/User/UserStore";
import Close from "./DeleteButtons/Close";
import Cancel from "./DeleteButtons/Cancel";
import Delete from "./DeleteButtons/Delete";

const ModalDeleteMyUser = ({ setModalDeleteMyUser }) => {
 

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);



  return (
    <>
      {!userStore.isLogin && <Navigate to="/" />}
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalDeleteLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Delete Account</h5>
              <Close setModalDeleteMyUser={setModalDeleteMyUser} />
            </div>
            <div className="modal-body">
              <h6 className="p-4 text-center modalDeleteUserSpaceParagraph">
                Are you sure you want to delete your account?
              </h6>
            </div>
            <div className="modal-footer">
              <Delete setModalDeleteMyUser={setModalDeleteMyUser} />
              <Cancel setModalDeleteMyUser={setModalDeleteMyUser} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDeleteMyUser;
