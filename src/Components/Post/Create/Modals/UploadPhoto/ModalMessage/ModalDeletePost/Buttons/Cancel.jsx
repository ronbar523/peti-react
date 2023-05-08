import React from "react";
import { Button } from "@mui/material";

const Cancel = ({ setModalDeletePost }) => {
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
      onClick={() => setModalDeletePost(false)}
    >
      Cancel
    </Button>
  );
};

export default Cancel;
