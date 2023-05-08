import React from "react";
import { Button } from "@mui/material";

const Done = ({ category, setModalCategory }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        marginRight: "15px",
        width: 105,
        marginBottom: "15px",
        textTransform: "unset",
        float: "right",
      }}
      onClick={() => setModalCategory(false)}
    >
      Done {category.length} / 5
    </Button>
  );
};

export default Done;
