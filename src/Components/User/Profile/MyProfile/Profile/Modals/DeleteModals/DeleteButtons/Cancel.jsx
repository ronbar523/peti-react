import React from "react";
import { Button } from "@mui/material";

const Cancel = ({ setModalDeleteMyUser }) => {
  const closeModal = () => {
    setModalDeleteMyUser(false);
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
        height: "36px",
      }}
      onClick={() => closeModal()}
    >
      Cancel
    </Button>
  );
};

export default Cancel;
