import React from "react";
import { Paper } from "@mui/material";
import SearchInput from "./Inputs/SearchInput";

const Search = ({
  setModalSearchUsers,
  setUsers,
  text,
  setText,
  setDiscoverSearchInput,
}) => {
  return (
    <Paper
      component="form"
      className="navbarInputSearch"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        height: 35,
        background: "#c7dbef",
      }}
    >
      <SearchInput
        setModalSearchUsers={setModalSearchUsers}
        setUsers={setUsers}
        text={text}
        setText={setText}
        setDiscoverSearchInput={setDiscoverSearchInput}
      />
    </Paper>
  );
};

export default Search;
