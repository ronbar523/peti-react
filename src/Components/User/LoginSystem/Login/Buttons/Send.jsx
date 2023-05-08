import React, { useCallback, useState } from "react";
import { loginUser } from "../../../../../Services/UserServices/UserPostService";
import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";

const Send = ({
  email,
  password,
  validPassword,
  inputRefPassword,
  wrongPassword,
  setWrongPassword,
  emailNotExist,
  setEmailNotExist,
  inputRefEmail,
  modalUserBlock,
  setModalUserBlock,
  validEmail,
}) => {
  const [isLoadingSend, setIsLoadingSend] = useState(false);

  const send = useCallback(async () => {
    try {
      setIsLoadingSend(true);
      if (!validPassword) {
        setWrongPassword(true);
        setIsLoadingSend(false);
        inputRefPassword.current.focus();
      } else {
        const userLogin = {
          email: email,
          password: password,
        };

        await loginUser(userLogin);
        window.location = "/my_profile";
      }
    } catch (err) {
      if (err.response.data.err === "Email Not exist") {
        setEmailNotExist(true);
        inputRefEmail.current.focus();
      } else if (err.response.data.err === "Wrong password") {
        setWrongPassword(true);
        inputRefPassword.current.focus();
      } else if (err.response.data.err === "Your user is block") {
        setModalUserBlock(true);
      } else {
        window.location.reload();
      }
      setIsLoadingSend(false);
    }
  }, [email, password, validPassword]);

  return (
    <>
      {!modalUserBlock ? (
        <>
          {!isLoadingSend ? (
            <Button
              sx={{
                width: 40,
                height: 34,
                marginTop: "15px",
                textTransform: "unset",
              }}
              variant={
                password.length === 0 ||
                wrongPassword ||
                emailNotExist ||
                !validEmail
                  ? "outlined"
                  : "contained"
              }
              disabled={
                password.length === 0 ||
                wrongPassword ||
                emailNotExist ||
                !validEmail
              }
              onClick={() => send()}
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
      ) : null}
    </>
  );
};

export default Send;
