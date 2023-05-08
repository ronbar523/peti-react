import React from "react";
import { Button } from "@mui/material";

const Delete = ({ setLocation, setModalLocation }) => {
  const deleteLocation = () => {
    setLocation("");
    setModalLocation(false);
  };
  return (
    <Button
      variant="outlined"
      color="error"
      sx={{
        float: "left",
        marginLeft: "15px",
        marginBottom: "15px",
        textTransform: "unset",
        height: "36px",
        width: 75,
      }}
      onClick={() => deleteLocation()}
    >
      Delete
    </Button>
  );
};

export default Delete;
