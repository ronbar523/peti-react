import React from "react";
import { Box, CardHeader } from "@mui/material";

const CategoryOptions = ({
  item,
  categoryOptions,
  setCategoryOptions,
  category,
  setCategory,
  inputRef
}) => {
  const selectCategory = () => {
    inputRef.current.focus();
    setCategory([item, ...category]);
    for (let x = 0; x < categoryOptions.length; x++) {
      if (item === categoryOptions[x]) {
        let categoryOptionsArr = categoryOptions;
        categoryOptionsArr.splice(x, 1);
        setCategoryOptions(categoryOptionsArr);
        break;
      }
    }
  };

  return (
    <button
      className="modalCategoryPhotoPostButton"
      onClick={() => selectCategory()}
      disabled={category.length === 5}
    >
      {category.length === 5 ? (
        <Box sx={{ background: "#f3f3f3", color: "#dadada" }}>
          <CardHeader  title={<h6 className="modalCategoryPhotoPostName">{item}</h6>} />
         </Box>
      ) : (
        <div>
          <CardHeader sx={{ background: "white"}} title={<h6 className="modalCategoryPhotoPostName">{item}</h6>} />
         </div>
      )}
    </button>
  );
};

export default CategoryOptions;
