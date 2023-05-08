import React from "react";
import { Button } from "@mui/material";

const CloseB = ({ setModalCommentDeleted }) => {
  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalCommentDeleted(false);
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
      Close
    </Button>
  );
};

export default CloseB;
