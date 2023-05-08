import React, { useCallback, useState } from "react";
import { userStore } from "../../../../../../../../../Store/User/UserStore";
import { changeUserName } from "../../../../../../../../../Services/UserServices/UserEditService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Update = ({
  userName,
  setModalEditUserName,
  userNameExist,
  setUserNameExist,
  inputRef,
  validUserName,
}) => {
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);

  const updateUserName = useCallback(async () => {
    try {
      setIsLoadingUpdate(true);
      const requestBody = {
        userName: userName,
      };

      await changeUserName(requestBody);

      userStore.user.userName = userName;

      document.body.style.overflow = "visible";
      setModalEditUserName(false);
    } catch (err) {
      if (err.response.data.err === "User Name exist") {
        setUserNameExist(true);
        setIsLoadingUpdate(false)
        inputRef.current.focus();
      } else {
        window.location.reload();
      }
    }
  }, [userName]);

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
          disabled={
            userStore.user.userName === userName ||
            !validUserName ||
            userNameExist
          }
          onClick={() => updateUserName()}
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
