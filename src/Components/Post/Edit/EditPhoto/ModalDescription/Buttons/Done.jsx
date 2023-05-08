import React from 'react'
import { Button } from "@mui/material";

const Done = ({ setModalDescription }) => {
  
  return (
    <Button
      variant="outlined"
      sx={{
        marginRight: "15px",
        width: 75,
        height: 35,
        marginBottom: "15px",
        textTransform: "unset",
        float: "right",
      }}
      onClick={() => setModalDescription(false)}
    >
      Done
    </Button>
  );
};

export default Done;
