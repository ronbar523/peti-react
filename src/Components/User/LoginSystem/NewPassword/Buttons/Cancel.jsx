import React from 'react'
import { Button } from '@mui/material';

const Cancel = () => {
  return (
    <>
      <Button
        sx={{
          width: 40,
          height: 35,
          marginTop: "5px",
          marginRight: "10px",
          textTransform: "unset",
        }}
        variant="outlined"
        onClick={() => window.location.replace("/")}
        
      >
        Cancel
      </Button>
    </>
  );
};

export default Cancel;
