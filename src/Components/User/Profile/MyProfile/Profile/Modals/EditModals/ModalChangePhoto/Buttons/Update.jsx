import React, { useCallback, useState } from "react";
import { changeProfileUserPhoto } from "../../../../../../../../../Services/UserServices/UserEditService";
import { userStore } from "../../../../../../../../../Store/User/UserStore";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Update = ({
  setModalEditProfilePhoto,
  photo,
}) => {
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);

  const updateUserPhoto = useCallback(async () => {
    try {
      setIsLoadingUpdate(true);
      const requestBody = {
        photo: userStore.user.photo,
      };

      await changeProfileUserPhoto(requestBody);
      document.body.style.overflow = "visible";
      setModalEditProfilePhoto(false);
    } catch {
      window.location.reload();
    }
  }, [photo]);

  return (
    <>
      {!isLoadingUpdate ? (
        <Button
          variant="outlined"
          sx={{
            float: "right",
            marginRight: "15px",
            marginBottom: "15px",
            textTransform: "unset",
            height: 37,
            width: 79,
          }}
          
          onClick={() => updateUserPhoto()}
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
            marginRight: "15px",
            marginBottom: "15px",
            height: 37,
            width: 79,
          }}
        ></LoadingButton>
      )}
    </>
  );
};

export default Update;
