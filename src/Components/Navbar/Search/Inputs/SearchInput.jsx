import React, { useCallback } from "react";
import { findByName } from "../../../../Services/UserServices/UserGetService";
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchInput = ({ setModalSearchUsers, setUsers, text, setText, setDiscoverSearchInput }) => {
  const searchUsers = useCallback(async (value) => {
    try {
      setText(value);
      
      const firstName = value;
      const lastName = value;
      const nickName = value;
      const fullName = value;
      const skip = 0 
      const limit = 5;

      if (value !== "") {
        await findByName(firstName, lastName, nickName, fullName, skip, limit).then(
          (res) => {
            setUsers(res.data);
            if (res.data.length > 0) {
              setModalSearchUsers(true);
            } else {
              setModalSearchUsers(false);
            }
          }
        );
      } else {
        setModalSearchUsers(false);
      }
    } catch {
      window.location.reload();
    }
  }, []);

  const closeForSmallNavbar = () => {
    setText("");
    setModalSearchUsers(false);
    setDiscoverSearchInput(false);
  };

  return (
    <>
      <SearchIcon sx={{ p: "6px", fontSize: 32 }} color="action" />
      <InputBase
        sx={{ ml: 0.5, flex: 1 }}
        placeholder="Search"
        onChange={(event) => {
          searchUsers(event.target.value);
        }}
        value={text}
      />

      <IconButton
        type="button"
        aria-label="search"
        className="navbarDiscoverIcon"
        sx={{ height: 35, width: 35, p: "6px" }}
        onClick={() => closeForSmallNavbar()}
      >
        <CloseIcon sx={{ fontSize: 22 }} />
      </IconButton>
    </>
  );
};

export default SearchInput;
