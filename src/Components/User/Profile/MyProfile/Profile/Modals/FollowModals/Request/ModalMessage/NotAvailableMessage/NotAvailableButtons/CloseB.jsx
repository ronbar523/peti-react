import React from "react";
import { Button } from "@mui/material";

const CloseB = ({
  setModalRequestNotAvailable,
  inputRef
}) => {

  const closeModal = () => {
    setModalRequestNotAvailable(false)
    inputRef.current.focus()
  }
  

  return (
    <>
        <Button
          variant="outlined"
          className="modalRequestMessageCancelButton"
          sx={{
            textTransform: "unset",
            width: 40,
            hieght: 35,
          }}
          onClick={() => setModalRequestNotAvailable()}
          >
          Close
        </Button>
      
    </>
  );
};

export default CloseB;
