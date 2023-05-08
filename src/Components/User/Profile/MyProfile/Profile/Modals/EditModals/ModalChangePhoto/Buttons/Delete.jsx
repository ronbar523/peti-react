import React, { useCallback, useState } from "react";
import { changeProfileUserPhoto } from "../../../../../../../../../Services/UserServices/UserEditService";
import { userStore } from "../../../../../../../../../Store/User/UserStore";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Delete = ({
    setModalEditProfilePhoto,
    defaultPhoto,
    
}) => {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const deleteUserPhoto = useCallback(async () => {
    try {
      setIsLoadingDelete(true);
      userStore.user.photo =
        "https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352062-stock-illustration-default-placeholder-profile-icon.jpg";

      const requestBody = {
        photo: userStore.user.photo,
      };

      await changeProfileUserPhoto(requestBody);
      setModalEditProfilePhoto(false);
    } catch {
      window.location.reload();
    }
  }, []);

  return (
    <>
      {!isLoadingDelete ? (
        <Button
          variant="outlined"
          color="error"
          sx={{
            marginLeft: "15px",
            width: 75,
            marginBottom: "15px",
            textTransform: "unset",
            float: "left",
            height: 36,
          }}
          disabled={defaultPhoto}
          onClick={() => deleteUserPhoto()}
        >
          Delete
        </Button>
      ) : (
        <LoadingButton
          loading={isLoadingDelete}
          variant="outlined"
          disabled
          sx={{
            marginLeft: "15px",
            width: 75,
            marginBottom: "15px",
            float: "left",
            height: 36,
          }}
        ></LoadingButton>
      )}
    </>
  );
};

export default Delete;
