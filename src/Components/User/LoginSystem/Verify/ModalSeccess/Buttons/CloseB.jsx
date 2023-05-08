import React from "react";
import { Button } from "@mui/material";
import { userStore } from "../../../../../../Store/User/UserStore";

const CloseB = () => {
  const closeModal = () => {
    if (userStore.isLogin) {
      window.location = "/my_profile";
    } else {
      window.location = "/";
    }
  };

  return (
    <Button
      variant="outlined"
      sx={{
        float: "right",
        marginRight: "5px",
        marginTop: "7px",
        marginBottom: "9px",
        textTransform: "unset",
      }}
      onClick={() => closeModal()}
    >
      Close
    </Button>
  );
};

export default CloseB;
