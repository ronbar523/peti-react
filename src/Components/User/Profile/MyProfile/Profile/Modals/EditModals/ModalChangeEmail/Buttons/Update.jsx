import React, { useCallback, useState } from "react";
import { userStore } from "../../../../../../../../../Store/User/UserStore";
import { changeEmail } from "../../../../../../../../../Services/UserServices/UserEditService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Update = ({ email, inputRef, validEmail, emailExist, setEmailExist, setVerifyMessage, setVerify }) => {
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);

  const editEmail = useCallback(async () => {
    try {
      setIsLoadingUpdate(true);

      const requestBody = {
        email: email,
      };

      await changeEmail(requestBody);

      userStore.user.email = email;
      setVerify(false)
      setVerifyMessage(true)
    } catch (err) {
      if (err.response.data.err === "Email exist") {
        setEmailExist(true);
        setIsLoadingUpdate(false);
        inputRef.current.focus();
      } else {
        window.location.reload();
      }
    }
  }, [email]);

  return (
    <>
      {!isLoadingUpdate ? (
        <Button
          variant="outlined"
          sx={{
            float: "right",
            marginRight: "8px",
            marginTop: "7px",
            marginBottom: "9px",
            textTransform: "unset",
            height: 37,
            width: 79,
          }}
          disabled={userStore.user.email === email || !validEmail || emailExist}
          onClick={() => editEmail()}
        >
          Update
        </Button>
      ) : (
        <LoadingButton
          loading={isLoadingUpdate}
          variant="outlined"
          disabled
          sx={{
            float: "right",
            marginRight: "8px",
            marginTop: "7px",
            marginBottom: "9px",
            height: 37,
            width: 79,
          }}
        ></LoadingButton>
      )}
    </>
  );
};

export default Update;
