import React from "react";
import { Button } from "@mui/material";

const Cancel = ({ setModalAlredayAcceptRequest, unFollowerLoading, setAcceptSomeUser, inputRef }) => {

  const closeModal = () => {
    setAcceptSomeUser(true)
    setModalAlredayAcceptRequest(false);
    inputRef.current.focus()
  };

  return (
    <Button
      disabled={unFollowerLoading}
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

export default Cancel
