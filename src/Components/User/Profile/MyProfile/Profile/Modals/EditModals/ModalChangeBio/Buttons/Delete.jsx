import React, { useCallback, useState } from "react";
import { userStore } from "../../../../../../../../../Store/User/UserStore";
import { changeBio } from "../../../../../../../../../Services/UserServices/UserEditService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Delete = ({ deleteButton, setModalEditBio }) => {
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const deleteBio = useCallback(async () => {
    setIsLoadingDelete(true)
    try {
      const requestBody = {
        bio: "Wirte something",
      };

      await changeBio(requestBody);

      userStore.user.bio = "Wirte something";
      setModalEditBio(false);
    } catch {
      window.location.reload();
    }
  }, []);

  return (
    <>
      {deleteButton ? (
        <>
          {!isLoadingDelete ? (
            <Button
              variant="outlined"
              color="error"
              sx={{
                float: "left",
                marginLeft: "15px",
                marginTop: "5px",
                marginBottom: "22px",
                textTransform: "unset",
                height: 36,
                width: 105,
              }}
              onClick={() => deleteBio()}
            >
              Delete Bio
            </Button>
          ) : (
            <LoadingButton
              loading={isLoadingDelete}
              variant="outlined"
              disabled
              sx={{
                float: "left",
                marginLeft: "15px",
                marginTop: "5px",
                marginBottom: "22px",
                height: 36,
                width:  105,
              }}
            ></LoadingButton>
          )}
        </>
      ) : null}
    </>
  );
};

export default Delete;
