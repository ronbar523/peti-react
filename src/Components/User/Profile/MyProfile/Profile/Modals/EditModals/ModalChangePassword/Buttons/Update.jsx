import React, { useCallback, useState } from "react";
import { changePassword } from "../../../../../../../../../Services/UserServices/UserEditService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Update = ({
  password,
  confirm,
  validPassword,
  setModalChangePassword,
}) => {
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);

  const updatePassword = useCallback(async () => {
    try {
      setIsLoadingUpdate(true);
      const requestBody = {
        password: password,
      };

      await changePassword(requestBody);

      document.body.style.overflow = "visible";
      setModalChangePassword(false);
    } catch {
      window.location.reload();
    }
  }, [password]);

  return (
    <>
      {!isLoadingUpdate ? (
        <Button
          variant="outlined"
          sx={{
            float: "right",
            marginRight: "5px",
            marginTop: "7px",
            marginBottom: "9px",
            textTransform: "unset",
            height: 37,
            width: 79,
          }}
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
            marginRight: "5px",
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
