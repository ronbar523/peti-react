import React from "react";
import { Card, CardHeader } from "@mui/material";

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
        <Card sx={{ background: "#f3f3f3", color: "#dadada" }}>
          <CardHeader title={<h6 className="modalCategoryPhotoPostName">{item}</h6>} />
        </Card>
      ) : (
        <Card>
          <CardHeader title={<h6 className="modalCategoryPhotoPostName">{item}</h6>} />
        </Card>
      )}
    </button>
  );
};

export default CategoryOptions;
