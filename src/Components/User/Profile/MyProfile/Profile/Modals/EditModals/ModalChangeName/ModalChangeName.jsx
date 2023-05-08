import React, { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../../../../../../Store/User/UserStore";
import Update from "./Buttons/Update";
import FirstName from "./Inputs/FirstName";
import LastName from "./Inputs/LastName";
import CloseA from "./Buttons/CloseA";
import CloseB from "./Buttons/CloseB";

const ModalChangeName = ({ setModalEditName }) => {
  const inputRef = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    inputRef.current.focus();
  }, []);

  const [firstName, setFirstName] = useState(userStore.user.firstName);
  const [lastName, setLastName] = useState(userStore.user.lastName);

  return (
    <>
      {!userStore.isLogin && <Navigate to="/" />}
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalEditLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Edit Name</h5>
              <CloseA setModalEditName={setModalEditName} />
            </div>
            <div className="modal-body">
              <FirstName
                inputRef={inputRef}
                firstName={firstName}
                setFirstName={setFirstName}
              />

              <LastName lastName={lastName} setLastName={setLastName} />
            </div>

            <div className="modal-footer">
              <CloseB setModalEditName={setModalEditName} />

              <Update
                firstName={firstName}
                lastName={lastName}
                setModalEditName={setModalEditName}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalChangeName;
