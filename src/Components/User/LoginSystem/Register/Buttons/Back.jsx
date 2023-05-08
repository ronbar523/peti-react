import React from "react";
import { Button } from "@mui/material";

const Back = ({ page, setPage }) => {
  return (
    <Button
      sx={{
        height: 35,
        marginRight: 1,
        marginTop: "15px",
        textTransform: "unset",
      }}
      onClick={() => setPage(0)}
      disabled={page === 0}
      variant={page === 0 ? "outlined" : "contained"}
    >
      Back
    </Button>
  );
};

export default Back;
