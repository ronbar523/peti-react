import React from "react";
import { Button } from "@mui/material";

const CloseB = ({ setModalResetSuccess }) => {
  
  const closeModal = () => {
    window.location = "/";
    setModalResetSuccess(false);
    document.body.style.overflow = "visible";
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
