import React from "react";
import { Button } from "@mui/material";

const Cancel = ({ setModalCancelEditPost}) => {

  return (
    <Button
      variant="outlined"
      sx={{
        marginLeft: "15px",
        width: 75,
        height: 35,
        marginBottom: "15px",
        textTransform: "unset",
        float: "left",
      }}
      onClick={() => setModalCancelEditPost(true)}
    >
      Cancel
    </Button>
  );
};

export default Cancel;
