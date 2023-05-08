import React, { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../../../../../../Store/User/UserStore";
import Password from "./inputs/Password";
import ConfrimPassowrd from "./inputs/ConfrimPassword";
import CloseA from "./Buttons/CloseA";
import CloseB from "./Buttons/CloseB";
import Update from "./Buttons/Update";

const ModalChangePassword = ({ setModalChangePassword }) => {
  const inputRef = useRef();

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [confirm, setConfirm] = useState("");
  const [validConfirm, setValidConfirm] = useState(false);

  const [errConfirm, setErrConfirm] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    inputRef.current.focus();
  }, []);

  return (
    <>
      {!userStore.isLogin && <Navigate to="/" />}
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalEditLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Change Password</h5>
              <CloseA setModalChangePassword={setModalChangePassword} />
            </div>
            <div className="modal-body">
              <Password
                inputRef={inputRef}
                password={password}
                setPassword={setPassword}
                validPassword={validPassword}
                setValidPassword={setValidPassword}
              />

              <ConfrimPassowrd
                confirm={confirm}
                setConfirm={setConfirm}
                password={password}
                errConfirm={errConfirm}
                setErrConfirm={setErrConfirm}
                validConfirm={validConfirm}
                setValidConfirm={setValidConfirm}
                validPassword={validPassword}
              />
            </div>

            <div className="modal-footer">
              <CloseB setModalChangePassword={setModalChangePassword} />
              <Update
                password={password}
                confirm={confirm}
                validPassword={validPassword}
                setModalChangePassword={setModalChangePassword}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalChangePassword;
