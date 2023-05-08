import React from "react";
import { Button } from "@mui/material";

const Done = ({ setModalLocation, setLocation, text, disabled }) => {
  const done = () => {
    setLocation(text);
    setModalLocation(false);
  };
  return (
    <Button
      variant="outlined"
      sx={{
        marginRight: "15px",
        width: 75,
        marginBottom: "15px",
        textTransform: "unset",
        float: "right",
      }}
      disabled={disabled}
      onClick={() => done()}
    >
      Done
    </Button>
  );
};

export default Done;
