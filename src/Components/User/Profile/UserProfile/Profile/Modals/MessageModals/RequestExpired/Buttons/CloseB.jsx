import React from 'react'
import { Button } from "@mui/material";

const CloseB = ({setModalRequestFollowersExpired}) => {
    
  const closeModal = () => {
    setModalRequestFollowersExpired(false);
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
      }}
      onClick={() => closeModal()}
    >
      Close
    </Button>
  );
};

export default CloseB;
