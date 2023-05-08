import React, { useState, useRef } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../Store/User/UserStore";
import Send from "../../../Components/User/LoginSystem/Login/Buttons/Send";
import ForgetPassword from "../../../Components/User/LoginSystem/Login/Buttons/ForgetPassword";
import Email from "../../../Components/User/LoginSystem/Login/Inputs/Email";
import Password from "../../../Components/User/LoginSystem/Login/Inputs/Password";
import ModalBlock from "../../../Components/User/LoginSystem/Login/Modals/ModalBlock";

const Login = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(true);
  const [emailNotExist, setEmailNotExist] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(true);

  const [wrongPassword, setWrongPassword] = useState(false);

  const [modalUserBlock, setModalUserBlock] = useState(false);

  const inputRefEmail = useRef();
  const inputRefPassword = useRef();

  return (
    <>
      {userStore.isLogin && <Navigate to="/" />}
      <div
        className={
          modalUserBlock ? "loginSystemBox opacity-modal" : "loginSystemBox"
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
        <p className="loginSystemTitle">Login Your Peti Account</p>
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
            setWrongPassword={setWrongPassword}
          />

          <Password
            inputRefPassword={inputRefPassword}
            password={password}
            setPassword={setPassword}
            passwordFocus={passwordFocus}
            setPasswordFocus={setPasswordFocus}
            wrongPassword={wrongPassword}
            setWrongPassword={setWrongPassword}
            validPassword={validPassword}
            setValidPassword={setValidPassword}
          />
        </div>

        <div className="buttons-register">
          <ForgetPassword />

          <Send
            email={email}
            password={password}
            validPassword={validPassword}
            inputRefPassword={inputRefPassword}
            wrongPassword={wrongPassword}
            setWrongPassword={setWrongPassword}
            emailNotExist={emailNotExist}
            setEmailNotExist={setEmailNotExist}
            inputRefEmail={inputRefEmail}
            modalUserBlock={modalUserBlock}
            setModalUserBlock={setModalUserBlock}
            validEmail={validEmail}
          />
        </div>
      </div>
      {modalUserBlock ? (
        <ModalBlock
          modalUserBlock={modalUserBlock}
          setModalUserBlock={setModalUserBlock}
        />
      ) : null}
    </>
  );
};

export default Login;
