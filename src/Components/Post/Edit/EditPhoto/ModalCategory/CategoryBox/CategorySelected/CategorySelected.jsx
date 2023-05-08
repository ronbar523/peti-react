import React from "react";
import { Card, CardHeader, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CategorySelected = ({
  item,
  categoryOptions,
  setCategoryOptions,
  category,
  setCategory,
  inputRef
}) => {
  const removeSelect = () => {
    inputRef.current.focus();
    setCategoryOptions([item, ...categoryOptions]);

    for (let x = 0; x < category.length; x++) {
      if (item === category[x]) {
        let categoryArr = category;
        categoryArr.splice(x, 1);
        setCategory(categoryArr);
        break;
      }
    }
  };
  return (
    <Card
      className="modalCategoryPhotoPostCard"
    >
      <CardHeader
        title={
          <h6 className="modalCategoryPhotoPostName2">
            {item}
            <IconButton
              className="modalCategoryPhotoPostIconRemove"
              onClick={() => removeSelect()}
            >
              <CloseIcon color="error" sx={{ fontSize: "21.5px" }} />
            </IconButton>
          </h6>
        }
      />
    </Card>
  );
};

export default CategorySelected;
