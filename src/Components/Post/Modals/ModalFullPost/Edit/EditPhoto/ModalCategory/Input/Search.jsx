import React from "react";
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ category, setCategoryOptions, animelsArray, inputRef }) => {


  const searchAnimel = (value) => {
    let filterText = value.toLowerCase();

    if (filterText !== "") {
      let filterAnimelsArray = animelsArray.filter((animels) =>
        animels.toLowerCase().startsWith(filterText)
      );

      if (category.length > 0) {
        let newArr = [];
        for (let y = 0; y < filterAnimelsArray.length; y++) {
          let flagTag = false;
          for (let x = 0; x < category.length; x++) {
            if (filterAnimelsArray[y] === category[x]) {
              flagTag = true;
              break;
            }
          }
          if (!flagTag) {
            newArr.push(filterAnimelsArray[y]);
          }
        }

        setCategoryOptions(newArr);
      } else {
        setCategoryOptions(filterAnimelsArray);
      }
    } else {
      setCategoryOptions(animelsArray);
    }
  };

  return (
    <Box className="modalFullPostModalCategoryPhotoPostBoxSearch">
      <Paper className="modalFullPostModalCategoryPhotoPostSearch">
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          onChange={(event) => searchAnimel(event.target.value)}
          placeholder="Search Category"
          inputRef={inputRef}
        />
        <IconButton
          type="button"
          sx={{ p: "8px", mr: 0.8 }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Search;
