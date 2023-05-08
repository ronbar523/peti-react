import React from "react";
import { userStore } from "../../../../../../../../../Store/User/UserStore";
import { Button } from "@mui/material";

const Cancel = ({ userPhoto, setCancelUpload }) => {
  const cancelUploadPhoto = () => {
    setCancelUpload(true);
    userStore.user.photo = userPhoto;
  };

  return (
    <Button
      variant="outlined"
      color="error"
      sx={{
        marginLeft: "15px",
        textTransform: "unset",
      }}
      onClick={() => cancelUploadPhoto()}
    >
      Cancel
    </Button>
  );
};

export default Cancel;
