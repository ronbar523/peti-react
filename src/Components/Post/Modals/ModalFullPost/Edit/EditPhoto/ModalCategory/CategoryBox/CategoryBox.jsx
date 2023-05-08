import React from "react";
import { Box } from "@mui/material";
import CategoryOptions from "./CategoryOptions/CategoryOptions";
import CategorySelected from "./CategorySelected/CategorySelected";

const CategoryBox = ({
  category,
  setCategory,
  categoryOptions,
  setCategoryOptions,
  inputRef
}) => {
  return (
    <Box className="modalFullPostModalCategoryPhotPostBoxCategories">
      <div className="modalFullPostModalCategoryPhotPostDivCategories">
      {category.map((item, index) => {
        return (
          <CategorySelected
            key={index}
            item={item}
            categoryOptions={categoryOptions}
            setCategoryOptions={setCategoryOptions}
            category={category}
            setCategory={setCategory}
            inputRef={inputRef}
          />
        );
      })}

      {categoryOptions
        .sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))
        .map((item, index) => {
          return (
            <CategoryOptions
              key={index}
              item={item}
              categoryOptions={categoryOptions}
              setCategoryOptions={setCategoryOptions}
              category={category}
              setCategory={setCategory}
              inputRef={inputRef}
            />
          );
        })}
        </div>

        {categoryOptions.length === 0 && category.length === 0 ? (
          <h6 className="modalFullPostModalCategoryPhotoPostNoResults">Not more results</h6>
        ) : null}
    </Box>
  );
};

export default CategoryBox;
