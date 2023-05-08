import React from "react";
import { Button } from "@mui/material";

const Cancel = ({ setModalCancelEditPost }) => {
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
      }}
      onClick={() => setModalCancelEditPost(false)}
    >
      No
    </Button>
  );
};

export default Cancel;
