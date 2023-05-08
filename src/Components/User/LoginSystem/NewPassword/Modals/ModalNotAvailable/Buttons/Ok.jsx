import React from "react";
import { Button } from "@mui/material";

const Ok = () => {
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
      onClick={() => window.location.replace("/forget_password")}
    >
      Close
    </Button>
  );
};

export default Ok;
