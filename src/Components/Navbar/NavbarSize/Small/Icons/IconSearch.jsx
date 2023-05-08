import React from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Search from "../../../Search/Search";

const IconSearch = ({
  discoverSearchInput,
  setDiscoverSearchInput,
  text,
  setText,
  setModalSearchUsers,
  setUsers,
}) => {
  return (
    <>
      {!discoverSearchInput && text === "" ? (
        <IconButton
          size="large"
          color="inherit"
          onClick={() => setDiscoverSearchInput(true)}
        >
          <SearchIcon />
        </IconButton>
      ) : (
        <>
          <Search
            setModalSearchUsers={setModalSearchUsers}
            setUsers={setUsers}
            text={text}
            setText={setText}
            setDiscoverSearchInput={setDiscoverSearchInput}
          />
        </>
      )}
    </>
  );
};

export default IconSearch;
