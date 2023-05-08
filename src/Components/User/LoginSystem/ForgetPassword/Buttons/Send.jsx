import React, { useCallback, useState } from "react";
import { userStore } from "../../../../../Store/User/UserStore";
import { forgetPassword } from "../../../../../Services/UserServices/UserEditService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Send = ({
  email,
  emailNotExist,
  setEmailNotExist,
  inputRefEmail,
  validEmail,
  setModalResetSuccess,
  setModalUserBlock
}) => {
  const [isLoadingSend, setIsLoadingSend] = useState(false);

  const send = useCallback(async () => {
    try {
      setIsLoadingSend(true);

      const requestBody = {
        email: email,
      };
      await forgetPassword(requestBody);

      userStore.user.email = email;

      setIsLoadingSend(false);
      setModalResetSuccess(true);
    } catch (err) {
      if (err.response.data.err === "The email doesn't exist") {
        setEmailNotExist(true);
        setIsLoadingSend(false);
        inputRefEmail.current.focus();
      } else if (err.response.data.err === "You account it's blocked") {
        setModalUserBlock(true)
        setIsLoadingSend(false);
      } else {
        window.location.reload();
      }
    }
  }, [email]);

  return (
    <>
      {!isLoadingSend ? (
        <Button
          sx={{
            width: 40,
            height: 34,
            marginTop: "5px",
            textTransform: "unset",
          }}
          variant={emailNotExist || !validEmail ? "outlined" : "contained"}
          disabled={emailNotExist || !validEmail}
          onClick={() => send()}
        >
          Reset
        </Button>
      ) : (
        <LoadingButton
          loading={isLoadingSend}
          variant="outlined"
          disabled
          sx={{
            width: 40,
            height: 35,
            marginTop: "5px",
          }}
        ></LoadingButton>
      )}
    </>
  );
};

export default Send;
