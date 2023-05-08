import React from "react";
import { Button } from "@mui/material";

const Cancel = ({ isLoadingUnBlockAll, setModalUnBlockAll, inputRef }) => {
  const closeModal = () => {
    inputRef.current.focus();
    setModalUnBlockAll(false);
  };

  return (
    <Button
      disabled={isLoadingUnBlockAll}
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
