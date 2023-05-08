import React from "react";
import { Button } from "@mui/material";

const CloseB = ({ setModalChangePassword }) => {
    
  const closeModal = () => {
    setModalChangePassword(false);
    document.body.style.overflow = "visible";
  };

  return (
    <Button
      variant="outlined"
      color="inherit"
      sx={{
        float: "right",
        marginRight: "5px",
        marginTop: "7px",
        marginBottom: "9px",
        textTransform: "unset",
        height: "37px",
        width: 70
      }}
      onClick={() => closeModal()}
    >
      Close
    </Button>
  );
};

export default CloseB;
