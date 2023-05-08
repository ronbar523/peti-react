import React from "react";
import { Button } from "@mui/material";

const Next = ({ uploaded, setModalPhoto }) => {
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
      disabled={!uploaded}
      onClick={() => setModalPhoto(false)}
    >
      Done
    </Button>
  );
};

export default Next;
