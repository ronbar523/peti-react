import React from "react";
import { Button } from "@mui/material";

const Done = ({ setModalTag }) => {
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
      onClick={() => setModalTag(false)}
    >
      Done
    </Button>
  );
};

export default Done;
