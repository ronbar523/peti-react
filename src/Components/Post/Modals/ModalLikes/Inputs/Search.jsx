import React, { useCallback, useEffect, useRef } from "react";
import { postStore } from "../../../../../Store/Post/PostSotre";
import { findLikesAfterFilter } from "../../../../../Services/PostServices/PostGetService";
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ setArrFilter, text, setText, setModalShowLikesPost, setModalPostDeleted, inputRef}) => {
  

  const findUsersFunction = useCallback(async (value) => {
    try {
      setText(value);
      const filter = value;
      const id = postStore.postLike._id;

      await findLikesAfterFilter(id, filter).then((res) => {
        setArrFilter(res.data.filterArr);
      });
    } catch (err) {
      if (err.response.status === 410) {
        setModalShowLikesPost(false);
        setModalPostDeleted(true)
        postStore.postDeletedId = postStore.post._id
      }
    }
  }, []);

  return (
    <Box className="modalPostLikesBoxSearch">
      <Paper className="modalPostLikesSearch">
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          value={text}
          onChange={(event) => findUsersFunction(event.target.value)}
          placeholder="Search User"
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
