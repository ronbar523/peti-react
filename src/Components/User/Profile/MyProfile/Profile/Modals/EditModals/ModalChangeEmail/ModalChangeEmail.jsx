import React, { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../../../../../../Store/User/UserStore";
import ModalAlreadyVerify from "../../AlreadyVerifyModal/ModalAlreadyVerify";
import ModalBlock from "../../BlockedModals/ModalBlock";
import Email from "./Inputs/Email";
import Update from "./Buttons/Update";
import Resend from "./Buttons/Resend";
import CloseA from "./Buttons/CloseA";
import CloseB from "./Buttons/CloseB";

const ModalChangeEmail = ({ setModalChangeEmail, setVerify }) => {
  const inputRef = useRef();

  const [email, setEmail] = useState(userStore.user.email);
  const [validEmail, setValidEmail] = useState(true);
  const [emailExist, setEmailExist] = useState(false);
  const [verifyMessage, setVerifyMessage] = useState(false);
  const [modalUserBlock, setModalUserBlock] = useState(false);
  const [modalAlreadyVerify, setModalAlreadyVerify] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      {!userStore.isLogin && <Navigate to="/" />}
      <div
        className={
          modalUserBlock || modalAlreadyVerify
            ? "modal show fade d-block opacity-modal"
            : "modal show fade d-block"
        }
        tabIndex="-1"
      >
        <div className="modal-dialog model-border model-block modalEditLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Change Email</h5>
              <CloseA setModalChangeEmail={setModalChangeEmail} />
            </div>
            {!verifyMessage ? (
              <div>
                <div className="modal-body">
                  <Email
                    inputRef={inputRef}
                    email={email}
                    setEmail={setEmail}
                    validEmail={validEmail}
                    setValidEmail={setValidEmail}
                    emailExist={emailExist}
                    setEmailExist={setEmailExist}
                  />
                </div>

                <div className="modal-footer mt-1">
                  
                <CloseB setModalChangeEmail={setModalChangeEmail} />

                  <Update
                    email={email}
                    inputRef={inputRef}
                    validEmail={validEmail}
                    emailExist={emailExist}
                    setEmailExist={setEmailExist}
                    setVerifyMessage={setVerifyMessage}
                    setVerify={setVerify}
                  />
                  
                </div>
              </div>
            ) : (
              <div>
                <div className="modal-body">
                  <h6 className="text-center modalChangeEmailSpaceParagraph">
                    Email has been changed!
                    <br />
                    <br />
                    Please verify your new email with the email sent to you
                  </h6>
                </div>
                <div className="modal-footer">
                  <Resend
                    setModalUserBlock={setModalUserBlock}
                    setModalAlreadyVerify={setModalAlreadyVerify}
                    setVerifyMessage={setVerifyMessage}
                    setVerify={setVerify}
                  />
                  <CloseB setModalChangeEmail={setModalChangeEmail} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {modalUserBlock ? (
        <ModalBlock setModalUserBlock={setModalUserBlock} />
      ) : null}

      {modalAlreadyVerify ? (
        <ModalAlreadyVerify
          setModalAlreadyVerify={setModalAlreadyVerify}
          setModalChangeEmail={setModalChangeEmail}
          
        />
      ) : null}
    </>
  );
};

export default ModalChangeEmail;
