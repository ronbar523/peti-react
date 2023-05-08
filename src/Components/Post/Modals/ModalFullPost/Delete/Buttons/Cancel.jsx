import React from "react";
import { Button } from "@mui/material";

const Cancel = ({ setModalDeletePostModal }) => {
  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalDeletePostModal(false);
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
        width: 70,
      }}
      onClick={() => closeModal()}
    >
      Cancel
    </Button>
  );
};

export default Cancel;
