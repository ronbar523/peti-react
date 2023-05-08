import React from "react";
import { Button } from "@mui/material";

const Cancel = ({ isLoadingAcceptAll, setModalMessageAcceptAllRequest, inputRef }) => {

  const closeModal = () => {
    setModalMessageAcceptAllRequest(false)
    inputRef.current.focus()
  }
  
  return (
    <Button
      disabled={isLoadingAcceptAll}
      variant="outlined"
      color="inherit"
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
