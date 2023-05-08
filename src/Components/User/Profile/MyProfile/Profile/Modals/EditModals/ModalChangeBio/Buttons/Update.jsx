import React, { useCallback, useState } from "react";
import { userStore } from "../../../../../../../../../Store/User/UserStore";
import { changeBio } from "../../../../../../../../../Services/UserServices/UserEditService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Update = ({ bio, setModalEditBio }) => {
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);

  const updateBio = useCallback(async () => {
    try {
      setIsLoadingUpdate(true);
      const requestBody = {
        bio: bio,
      };

      await changeBio(requestBody);

      userStore.user.bio = bio;
      document.body.style.overflow = "visible";
      setModalEditBio(false);
    } catch {
      window.location.reload();
    }
  }, [bio]);

  return (
    <>
      {!isLoadingUpdate ? (
        <Button
          variant="outlined"
          sx={{
            float: "right",
            marginRight: "15px",
            marginTop: "5px",
            marginBottom: "22px",
            textTransform: "unset",
            height: 36,
            width: 79,
          }}
          disabled={bio === "Wirte something" || bio.length === 0}
          onClick={() => updateBio()}
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
            marginTop: "5px",
            marginBottom: "22px",
            height: 36,
            width: 79,
          }}
        ></LoadingButton>
      )}
    </>
  );
};

export default Update;
