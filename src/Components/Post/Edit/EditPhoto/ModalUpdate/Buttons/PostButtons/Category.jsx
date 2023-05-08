import React from "react";
import { Button } from "@mui/material";

const Category = ({ setModalCategory }) => {
  return (
    <Button
      className="modalEditPhotoPostButtonBody"
      sx={{
        color: "black",
        textTransform: "unset",
      }}
      onClick={() => setModalCategory(true)}
    >
      Add Category
    </Button>
  );
};

export default Category;
