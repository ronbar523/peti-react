import React, { useCallback } from "react";
import { findFollowingAfterFilter } from "../../../../../../../../../Services/FollowServices/FollowGetService";
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


const Search = ({ user, setArrFilter, text, setText, inputRef }) => {


  const findUsersFunction = useCallback(async (value) => {
    try {
      setText(value);
      const id = user._id
      const filter = value;

      await findFollowingAfterFilter(id, filter).then((res) => {
        setArrFilter(res.data.filterArr);
      });
    } catch {
      window.location.reload()
    }
  }, []);

  return (
    <Box className="modalFollowersBoxSearch">
      <Paper className="modalFollowersSearch">
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
