import React, { useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';

const Category = ({ category, modalCategory ,setModalCategory }) => {

  const [showCategories, setShowCategories] = useState([]);

  useEffect(() => {
    if(!modalCategory && category.length > 1){
      setShowCategories(category.sort((a,b) => (a > b ? 1 : -1)))
    } else {
      setShowCategories(category)
    }
  }, [modalCategory])

  return (
    <Box
      className="modalFullPostModalEditPhotoPostBoxInput"
    >
      <PetsIcon sx={{ mr: 1, my: 1.8, fontSize: "20px"}} color="primary" />
      <TextField
        id="input-with-sx"
        variant="standard"
        inputProps={{
          style: { fontSize: 14 },
        }}
        className="modalFullPostModalEditPhotoPostInput"
        value={
          showCategories.length === 1
            ? showCategories[0]
          : showCategories[0] + "..."
        }
        onClick={() => setModalCategory(true)}
      />
    </Box>
  );
};

export default Category;
