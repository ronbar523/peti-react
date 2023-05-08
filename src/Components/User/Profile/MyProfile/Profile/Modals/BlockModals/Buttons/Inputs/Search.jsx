import React, { useCallback, useEffect, useRef } from "react";
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { filterMyBlockUser } from "../../../../../../../../../Services/BlockServices/BlockGetServices";

const Search = ({ setArrFilter, text, setText, inputRef }) => {

  const findUsersFunction = useCallback(async (value) => {
    try {
      setText(value);
      const filter = value;

      await filterMyBlockUser(filter).then((res) => {
        setArrFilter(res.data.filterArr);
      });
    } catch {
      window.location.reload();
    }
  }, []);

  return (
    <Box className="modalMyBlockBoxSearch">
      <Paper className="modalMyBlockSearch">
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
