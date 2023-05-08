import React, { useCallback, useEffect, useState } from "react";
import { findByName } from "../../../Services/UserServices/UserGetService";
import { CircularProgress, Paper } from "@mui/material";
import { Box } from "@mui/system";
import SearchUsersBody from "../../../Components/User/Search/SearchUsersBody";
import InfiniteScroll from "react-infinite-scroll-component";
import ModalReload from "../../../Components/User/Search/Modal/ModalReload"

const SearchUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [moreUsers, setMoreUsers] = useState(true);
  const [isLoadingMoreUsers, setIsLoadingMoreUsers] = useState(false);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    const url = window.location.href;
    const urlWordsArr = url.split("=");
    setFilter(urlWordsArr[1]);
  }, [filter]);

  useEffect(() => {
    if (filter !== "") {
      const fetchData = async () => {
        try {
          const firstName = filter;
          const lastName = filter;
          const nickName = filter;
          const fullName = filter;
          const skip = 0;
          const limit = 25;

          await findByName(
            firstName,
            lastName,
            nickName,
            fullName,
            skip,
            limit
          ).then((res) => {
            if(res.data.length < 25){
              setMoreUsers(false)
            }
            setUsers(res.data);
            setIsLoading(false);
          });
        } catch {
          window.location.reload();
        }
      };
      fetchData().catch(console.error);
    }
  }, [filter]);

  const showMoreUsers = useCallback(async () => {
    try {
      setIsLoadingMoreUsers(true);
      const firstName = filter;
      const lastName = filter;
      const nickName = filter;
      const fullName = filter;
      const skip = users.length;
      const limit = 25;
      setTimeout(async () => {
        await findByName(
          firstName,
          lastName,
          nickName,
          fullName,
          skip,
          limit
        ).then((res) => {
          if (res.data.length > 0) {
            setUsers(users.concat(res.data));
          } else {
            setMoreUsers(false);
            setIsLoadingMoreUsers(false);
          }
        });
      }, 2000);
      
    } catch {
      window.location.reload();
    }
  }, [users, filter]);

  return (
    <>
      {!isLoading ? (
        <Paper
          className="SearchUserBody mb-4"
          sx={{
            p: 2,
            margin: "auto",
            mt: "30px",
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <InfiniteScroll
            dataLength={users.length}
            endMessage={
              <p className="text-center mt-3 mb-1"> Not further result </p>
            }
            next={showMoreUsers}
            hasMore={moreUsers}
            className="user-post row justify-content-center"
          >
            {users.map((item, index) => {
              return <SearchUsersBody item={item} key={index} />;
            })}
           
          </InfiniteScroll>
        </Paper>
      ) : (
        <ModalReload />
      )}

      {isLoadingMoreUsers ? (
        <Box sx={{ display: "flex", mt: 2.5, mb: 2.5}}>
          <CircularProgress sx={{ margin: "auto" }} />
        </Box>
      ) : null}
    </>
  );
};

export default SearchUsers;
