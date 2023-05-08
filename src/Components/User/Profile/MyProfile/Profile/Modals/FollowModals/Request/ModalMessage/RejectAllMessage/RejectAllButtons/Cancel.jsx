import React from "react";
import { Button } from "@mui/material";

const Cancel = ({ isLoadingRejectAll, setModalMessageRejectAllRequest, inputRef }) => {

  const closeModal = () => {
    setModalMessageRejectAllRequest(false)
    inputRef.current.focus()
  }

  return (
    <Button
      disabled={isLoadingRejectAll}
      variant="outlined"
      className="modalRequestMessageCancelButton"
      sx={{
        textTransform: "unset",
      }}
      onClick={() => closeModal()}
    >
      Cancel
    </Button>
  );
};

export default Cancel;
