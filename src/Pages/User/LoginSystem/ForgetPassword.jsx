import React, { useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { userStore } from "../../../Store/User/UserStore";
import Login from "../../../Components/User/LoginSystem/ForgetPassword/Buttons/Login";
import Send from "../../../Components/User/LoginSystem/ForgetPassword/Buttons/Send";
import Email from "../../../Components/User/LoginSystem/ForgetPassword/Inputs/Email";
import ModalResetSuccess from "../../../Components/User/LoginSystem/ForgetPassword/Modals/ModalResetSuccess/ModalResetSuccess";
import ModalBlock from "../../../Components/User/LoginSystem/ForgetPassword/Modals/ModalBlock/ModalBlock";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(true);
  const [emailNotExist, setEmailNotExist] = useState(false);

  const [modalResetSuccess, setModalResetSuccess] = useState(false);
  const [modalUserBlock, setModalUserBlock] = useState(false);
  const inputRefEmail = useRef();

  return (
    <>
      {userStore.isLogin && <Navigate to="/" />}
      <div
        className={
          modalResetSuccess || modalUserBlock
            ? "loginSystemBox opacity-modal"
            : "loginSystemBox"
        }
      >
        <button
          className="LoginSystemButtonLogo"
          onClick={() => window.location.replace("/")}
        >
          <img
            className="loginSystemLogo"
            src="https://i.imagesup.co/images2/55998d96407049438c45b5a0c79de5833b8faaf1.png"
            alt="Peti Logo"
          ></img>
        </button>
        <p className="loginSystemTitle ">Reset Your Password</p>
        <div className="text-center">
          <Email
            inputRefEmail={inputRefEmail}
            email={email}
            setEmail={setEmail}
            emailFocus={emailFocus}
            setEmailFocus={setEmailFocus}
            validEmail={validEmail}
            setValidEmail={setValidEmail}
            emailNotExist={emailNotExist}
            setEmailNotExist={setEmailNotExist}
          />
        </div>

        <div className="buttons-register">
          <Login />

          <Send
            email={email}
            emailNotExist={emailNotExist}
            setEmailNotExist={setEmailNotExist}
            inputRefEmail={inputRefEmail}
            validEmail={validEmail}
            setModalResetSuccess={setModalResetSuccess}
            setModalUserBlock={setModalUserBlock}
          />
        </div>
      </div>
      {modalResetSuccess ? (
        <ModalResetSuccess
          setModalResetSuccess={setModalResetSuccess}
          setModalUserBlock={setModalUserBlock}
        />
      ) : null}

      {modalUserBlock ? (
        <ModalBlock setModalUserBlock={setModalUserBlock} />
      ) : null}
    </>
  );
};

export default ForgetPassword;
