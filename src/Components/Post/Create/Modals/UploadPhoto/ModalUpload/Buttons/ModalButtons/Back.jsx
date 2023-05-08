import React from "react";
import { Button } from "@mui/material";

const Back = ({ setModalPhoto}) => {

    
  return (
    <Button
      variant="outlined"
      sx={{
        marginLeft: "15px",
        width: 75,
        height: 36,
        marginBottom: "15px",
        textTransform: "unset",
        float: "left",
      }}
      onClick={() => setModalPhoto(true)}
    >
      Back
    </Button>
  );
};

export default Back;
