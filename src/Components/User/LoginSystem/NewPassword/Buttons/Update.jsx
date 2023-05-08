import React, { useCallback, useState } from "react";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { resetPassword } from "../../../../../Services/UserServices/UserEditService";

const Update = ({
  password,
  confirm,
  validPassword,
  setModalUserBlock,
  setModalChangeSuccess,
  setModalNotAvailable,
}) => {
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);

  const updatePassword = useCallback(async () => {
    try {
      setIsLoadingUpdate(true);
      const url = window.location.href;
      const urlWordsArr = url.split(/[=&]/);
      const email = urlWordsArr[1];
      const passowrdSecureNumber = urlWordsArr[3];

      const requestBody = {
        password: password,
      };

      await resetPassword(email, passowrdSecureNumber, requestBody);
      setModalChangeSuccess(true);
    } catch (err) {
      if (
        err.response.data.err === "The link it's expired" ||
        err.response.data.err === "The random number it's wrong"
      ) {
        setModalNotAvailable(true);
      } else if (err.response.data.err === "The user it's not exist") {
        setModalUserBlock(true);
      } else {
        window.location.reload();
      }
    }
  }, [password]);

  return (
    <>
      {!isLoadingUpdate ? (
        <Button
          sx={{
            width: 40,
            height: 34,
            marginTop: "5px",
            textTransform: "unset",
          }}
          variant={
            !validPassword || password !== confirm ? "outlined" : "contained"
          }
          disabled={!validPassword || password !== confirm}
          onClick={() => updatePassword()}
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
            width: 40,
            height: 34,
            marginTop: "5px",
          }}
        ></LoadingButton>
      )}
    </>
  );
};

export default Update;
