import React from 'react'
import { Button } from '@mui/material';

const CloseB = () => {
  const closeModal = () => {
    document.body.style.overflow = "visible";
    window.location = "/my_profile";
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
