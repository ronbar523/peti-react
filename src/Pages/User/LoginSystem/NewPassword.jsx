import React, { useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import Cancel from "../../../Components/User/LoginSystem/NewPassword/Buttons/Cancel";
import Update from "../../../Components/User/LoginSystem/NewPassword/Buttons/Update";
import ConfrimPassowrd from "../../../Components/User/LoginSystem/NewPassword/Inputs/ConfrimPassword";
import Password from "../../../Components/User/LoginSystem/NewPassword/Inputs/Password";
import ModalBlock from "../../../Components/User/LoginSystem/NewPassword/Modals/ModalBlock/ModalBlock";
import ModalChangeSuccess from "../../../Components/User/LoginSystem/NewPassword/Modals/ModalChangeSuccess/ModalChangeSuccess";
import ModalNotAvailable from "../../../Components/User/LoginSystem/NewPassword/Modals/ModalNotAvailable/ModalNotAvailable";
import { userStore } from "../../../Store/User/UserStore";

const NewPassword = () => {
  const inputRef = useRef();

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [confirm, setConfirm] = useState("");
  const [validConfirm, setValidConfirm] = useState(false);

  const [errConfirm, setErrConfirm] = useState(false);

  const [modalUserBlock, setModalUserBlock] = useState(false);
  const [modalChangeSuccess, setModalChangeSuccess] = useState(false);
  const [modalNotAvailable, setModalNotAvailable] = useState(false);

  return (
    <>
      {userStore.isLogin && <Navigate to="/" />}
      <div
        className={
          modalUserBlock || modalChangeSuccess || modalNotAvailable
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
        <p className="loginSystemTitle">New Password</p>
        <div className="text-center">
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

        <div className="buttons-register">
          <Cancel />
          <Update
            confirm={confirm}
            password={password}
            validPassword={validPassword}
            setModalUserBlock={setModalUserBlock}
            setModalChangeSuccess={setModalChangeSuccess}
            setModalNotAvailable={setModalNotAvailable}
          />
        </div>
      </div>
      {modalUserBlock ? (
        <ModalBlock setModalUserBlock={setModalUserBlock} />
      ) : null}

      {modalChangeSuccess ? (
        <ModalChangeSuccess setModalChangeSuccess={setModalChangeSuccess} />
      ) : null}

      {modalNotAvailable ? (
        <ModalNotAvailable setModalNotAvailable={setModalNotAvailable} />
      ) : null}

    </>
  );
};

export default NewPassword;
