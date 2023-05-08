import React from "react";
import { Button } from "@mui/material";

const UnSelectAll = ({
  category,
  setCategory,
  categoryOptions,
  setCategoryOptions,
  inputRef
}) => {
  const removeAll = () => {
    inputRef.current.focus();
    setCategoryOptions([...category, ...categoryOptions]);
    setCategory([]);
  };

  return (
    <Button
      variant="outlined"
      color="error"
      sx={{
        marginLeft: "15px",
        width: 112,
        marginBottom: "15px",
        textTransform: "unset",
        float: "left",
      }}
      disabled={category.length === 0}
      onClick={() => removeAll()}
    >
      Deselect All
    </Button>
  );
};

export default UnSelectAll;
