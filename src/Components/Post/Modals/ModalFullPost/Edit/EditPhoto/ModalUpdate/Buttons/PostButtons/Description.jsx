import React from "react";
import { Button } from "@mui/material";

const Description = ({ setModalDescription }) => {
  return (
    <Button
    className="modalFullPostModalEditPhotoPostButtonBody"
    sx={{
      color: "black",
      textTransform: "unset",
    }}
      onClick={() => setModalDescription(true)}
    >
      Add Description
    </Button>
  );
};

export default Description;
