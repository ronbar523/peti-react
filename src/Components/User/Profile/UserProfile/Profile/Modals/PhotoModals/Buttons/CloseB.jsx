import { Button } from '@mui/material';
import React from 'react'


const CloseB = ({setModalShowPhoto}) => {
  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalShowPhoto(false);
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
      Close
    </Button>
  );
};

export default CloseB;
