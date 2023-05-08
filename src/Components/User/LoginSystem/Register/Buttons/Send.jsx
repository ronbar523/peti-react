import React, { useState, useCallback } from "react";
import {
  crateNewUser,
  loginUser,
} from "../../../../../Services/UserServices/UserPostService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Send = ({
  firstName,
  lastName,
  userName,
  phone,
  birthDay,
  gender,
  email,
  password,
  userNameExist,
  setUserNameExist,
  inputRefUserName,
  setEmailExist2,
  setPage,
  validUserName,
  young,
  validDate,
  impossibleAge,
  date,
  confirm,
  errConfirm,
}) => {
  const [isLoadingSend, setIsLoadingSend] = useState(false);

  const RegisterFunction = useCallback(async () => {
    try {
      setIsLoadingSend(true);
      
      const userRegister = {
        firstName: firstName,
        lastName: lastName,
        fullName: firstName + " " + lastName,
        userName: userName,
        bio: "Wirte something",
        phone: phone,
        dateOfBirth: birthDay,
        gender: gender,
        email: email,
        password: password,
      };

      const userLogin = {
        email: email,
        password: password,
      };

      const user = await crateNewUser(userRegister);

      if (user.data.msg === "User Name exist") {
        setUserNameExist(true);
        inputRefUserName.current.focus();
      } else if (user.data.msg === "Email exist") {
        setEmailExist2(email);
        setPage(0);
      } else {
        await loginUser(userLogin);
        window.location = "/my_profile";
      }

      setIsLoadingSend(false);
    } catch (err) {
      if (err.response.data.err === "User Name exist") {
        setUserNameExist(true);
        inputRefUserName.current.focus();
      } else if (err.response.data.err === "Email exist") {
        setEmailExist2(email);
        setPage(0);
      } else {
        window.location.reload();
      }
      setIsLoadingSend(false);
    }
  }, [email, birthDay, userName, firstName, lastName, phone, gender, password]);

  return (
    <>
      {!isLoadingSend ? (
        <Button
          sx={{
            height: 35,
            width: 40,
            marginTop: "15px",
            textTransform: "unset",
          }}
          variant={
            !validUserName ||
            userNameExist ||
            young ||
            !validDate ||
            impossibleAge ||
            date === "" ||
            confirm === "" ||
            errConfirm ||
            password !== confirm
              ? "outlined"
              : "contained"
          }
          disabled={
            !validUserName ||
            userNameExist ||
            young ||
            !validDate ||
            impossibleAge ||
            date === "" ||
            confirm === "" ||
            errConfirm ||
            password !== confirm
          }
          onClick={() => RegisterFunction()}
        >
          Send
        </Button>
      ) : (
        <LoadingButton
          loading={isLoadingSend}
          variant="outlined"
          disabled
          sx={{
            width: 40,
            height: 35,
            marginTop: "15px",
          }}
        ></LoadingButton>
      )}
    </>
  );
};

export default Send;
