import React, { useRef, useState } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../Store/User/UserStore";
import Email from "../../../Components/User/LoginSystem/Register/Inputs/Email";
import ConfirmPass from "../../../Components/User/LoginSystem/Register/Inputs/ConfirmPass";
import Password from "../../../Components/User/LoginSystem/Register/Inputs/Password";
import FirstName from "../../../Components/User/LoginSystem/Register/Inputs/FirstName";
import LastName from "../../../Components/User/LoginSystem/Register/Inputs/LastName";
import UserName from "../../../Components/User/LoginSystem/Register/Inputs/UserName";
import Phone from "../../../Components/User/LoginSystem/Register/Inputs/Phone";
import Date from "../../../Components/User/LoginSystem/Register/Inputs/Date";
import Gender from "../../../Components/User/LoginSystem/Register/Inputs/Gender";
import Next from "../../../Components/User/LoginSystem/Register/Buttons/Next";
import Send from "../../../Components/User/LoginSystem/Register/Buttons/Send";
import Back from "../../../Components/User/LoginSystem/Register/Buttons/Back";

const Register = () => {
  const inputRefEmail = useRef();
  const inputRefUserName = useRef();

  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(true);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(true);

  const [userName, setUserName] = useState("");
  const [validUserName, setValidUserName] = useState(false);
  const [userNameFocus, setUserNameFocus] = useState(true);
  const [userNameExist, setUserNameExist] = useState(false);

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(true);
  const [emailExist, setEmailExist] = useState(false);
  const [emailExist2, setEmailExist2] = useState("");

  const [gender, setGender] = useState("");
  const [validGender, setValidGender] = useState(false);
  const [genderFocus, setGenderFocus] = useState(true);

  const [date, setDate] = useState("");
  const [validDate, setValidDate] = useState(false);
  const [dateFocus, setDateFocus] = useState(true);
  const [birthDay, setBirthDay] = useState("");
  const [young, setYoung] = useState(false);
  const [impossibleAge, setImpossibleAge] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(true);

  const [confirm, setConfirm] = useState("");
  const [validConfirm, setValidConfirm] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState(true);
  const [errConfirm, setErrConfirm] = useState(false);

  const [page, setPage] = useState(0);

 
  return (
    <>
      {userStore.isLogin && <Navigate to="/" />}
      <div className="loginSystemBox">
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
        <p className="loginSystemTitle">Create Your Peti Account</p>

        {page === 0 ? (
          <div className="text-center">
            <Email
              inputRefEmail={inputRefEmail}
              email={email}
              setEmail={setEmail}
              emailFocus={emailFocus}
              setEmailFocus={setEmailFocus}
              validEmail={validEmail}
              setValidEmail={setValidEmail}
              emailExist={emailExist}
              setEmailExist={setEmailExist}
              emailExist2={emailExist2}
              setEmailExist2={setEmailExist2}
            />
            <FirstName
              firstName={firstName}
              setFirstName={setFirstName}
              validFirstName={validFirstName}
              setValidFirstName={setValidFirstName}
              firstNameFocus={firstNameFocus}
              setFirstNameFocus={setFirstNameFocus}
            />
            <LastName
              lastName={lastName}
              setLastName={setLastName}
              validLastName={validLastName}
              setValidLastName={setValidLastName}
              lastNameFocus={lastNameFocus}
              setLastNameFocus={setLastNameFocus}
            />
            <Phone phone={phone} setPhone={setPhone} />

            <Gender
              gender={gender}
              setGender={setGender}
              validGender={validGender}
              setValidGender={setValidGender}
              genderFocus={genderFocus}
              setGenderFocus={setGenderFocus}
            />
          </div>
        ) : (
          <div className="text-center">
            <UserName
              inputRefUserName={inputRefUserName}
              userName={userName}
              setUserName={setUserName}
              validUserName={validUserName}
              setValidUserName={setValidUserName}
              userNameFocus={userNameFocus}
              setUserNameFocus={setUserNameFocus}
              userNameExist={userNameExist}
              setUserNameExist={setUserNameExist}
            />
            <Date
              date={date}
              setDate={setDate}
              birthDay={birthDay}
              setBirthDay={setBirthDay}
              validDate={validDate}
              setValidDate={setValidDate}
              dateFocus={dateFocus}
              setDateFocus={setDateFocus}
              young={young}
              setYoung={setYoung}
              impossibleAge={impossibleAge}
              setImpossibleAge={setImpossibleAge}
            />
            <Password
              password={password}
              setPassword={setPassword}
              validPassword={validPassword}
              setValidPassword={setValidPassword}
              passwordFocus={passwordFocus}
              setPasswordFocus={setPasswordFocus}
              errConfirm={errConfirm}
              confirm={confirm}
            />
            <ConfirmPass
              password={password}
              confirm={confirm}
              errConfirm={errConfirm}
              setConfirm={setConfirm}
              validPassword={validPassword}
              validConfirm={validConfirm}
              setValidConfirm={setValidConfirm}
              confirmFocus={confirmFocus}
              setConfirmFocus={setConfirmFocus}
              setErrConfirm={setErrConfirm}
            />
          </div>
        )}

        <div className="buttons-register">
          <Back page={page} setPage={setPage} />

          {page === 0 ? (
            <Next
              email={email}
              setPage={setPage}
              emailExist={emailExist}
              setEmailExist={setEmailExist}
              inputRefEmail={inputRefEmail}
              validEmail={validEmail}
              firstName={firstName}
              lastName={lastName}
              gender={gender}
              phone={phone}
              setPhone={setPhone}
            />
          ) : (
            <Send
              firstName={firstName}
              lastName={lastName}
              userName={userName}
              phone={phone}
              birthDay={birthDay}
              gender={gender}
              email={email}
              password={password}
              userNameExist={userNameExist}
              setUserNameExist={setUserNameExist}
              inputRefUserName={inputRefUserName}
              setEmailExist2={setEmailExist2}
              setPage={setPage}
              validUserName={validUserName}
              young={young}
              validDate={validDate}
              impossibleAge={impossibleAge}
              date={date}
              confirm={confirm}
              errConfirm={errConfirm}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
