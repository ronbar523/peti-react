import React, { useCallback } from "react";
import { findMyFollowersAfterFilter } from "../../../../../../../../../Services/FollowServices/FollowGetService";
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


const Search = ({ setArrFilter, text, setText, inputRef }) => {

  const findUsersFunction = useCallback(async (value) => {
    try {
      setText(value);
      const filter = value;

      await findMyFollowersAfterFilter(filter).then((res) => {
        setArrFilter(res.data.filterArr);
      });
    } catch {
      window.location.reload()
    }
  }, []);

  return (
    <Box className="modalMyFollowersBoxSearch">
      <Paper className="modalMyFollowersSearch">
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
