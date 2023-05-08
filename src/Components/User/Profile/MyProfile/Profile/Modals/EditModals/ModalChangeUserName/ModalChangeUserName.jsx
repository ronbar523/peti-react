import React, { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../../../../../../Store/User/UserStore";
import CloseA from "./Buttons/CloseA";
import CloseB from "./Buttons/CloseB";
import Update from "./Buttons/Update";
import UserName from "./Inputs/UserName";

const ModalChangeUserName = ({ setModalEditUserName }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    document.body.style.overflow = "hidden";
  }, []);

  const [userName, setUserName] = useState(userStore.user.userName);
  const [userNameExist, setUserNameExist] = useState(false);

  const [validUserName, setValidUserName] = useState(true);

  return (
    <>
      {!userStore.isLogin && <Navigate to="/" />}
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalEditLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Edit User Name</h5>
              <CloseA setModalEditUserName={setModalEditUserName} />
            </div>
            <div className="modal-body">
              <UserName
                userName={userName}
                setUserName={setUserName}
                inputRef={inputRef}
                validUserName={validUserName}
                setValidUserName={setValidUserName}
                userNameExist={userNameExist}
                setUserNameExist={setUserNameExist}
              />
            </div>

            <div className="modal-footer">
              <CloseB setModalEditUserName={setModalEditUserName} />
              <Update
                userName={userName}
                setModalEditUserName={setModalEditUserName}
                userNameExist={userNameExist}
                setUserNameExist={setUserNameExist}
                inputRef={inputRef}
                validUserName={validUserName}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalChangeUserName;
