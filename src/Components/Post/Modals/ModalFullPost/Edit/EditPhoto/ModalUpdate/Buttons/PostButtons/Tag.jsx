import React from "react";
import { Button } from "@mui/material";

const Tag = ({ setModalTag }) => {
  return (
    <Button
    className="modalFullPostModalEditPhotoPostButtonBody"
      sx={{
        color: "black",
        textTransform: "unset",
        
      }}
      onClick={() => setModalTag(true)}
    >
      Tag Friends
    </Button>
  );
};

export default Tag;
