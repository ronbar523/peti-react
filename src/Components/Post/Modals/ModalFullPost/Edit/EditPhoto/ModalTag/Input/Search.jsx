import React, { useCallback, useEffect } from "react";
import { findUsersForTags } from "../../../../../../../../Services/UserServices/UserGetService";
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ setUsersArr, setModalTag, userTaged, inputRef}) => {

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  
  const searchUsers = useCallback(
    async (value) => {
      try {
        const filterUsers = value;
        const limit = 5;

        await findUsersForTags(filterUsers, limit).then((res) => {
          if (userTaged.length > 0) {
            let arr = res.data;
            let newArr = [];
            for (let x = 0; x < arr.length; x++) {
              let flagTag = false;
              for (let y = 0; y < userTaged.length; y++) {
                if (arr[x]._id === userTaged[y]._id) {
                  flagTag = true;
                  break;
                }
              }
              if (!flagTag) {
                newArr.push(arr[x]);
              }
            }
            setUsersArr(newArr);
          } else {
            setUsersArr(res.data);
          }
        });
      } catch (err) {
        setModalTag(false);
      }
    },
    [userTaged]
  );


  return (
    <Box
    className="modalTagPhotoPostBoxSearch"
    >
      <Paper
        className="modalTagPhotoPostSearch"
      >
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          onChange={(event) => searchUsers(event.target.value)}
          placeholder="Search Users"
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
