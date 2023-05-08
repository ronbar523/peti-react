import React, { useState, useEffect, useRef, useCallback } from "react";
import FollowersBody from "./BodyModal/FollowersBody";
import Close from "./Buttons/Close";
import { findFollowers } from "../../../../../../../../Services/FollowServices/FollowGetService";
import { Box, CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { userStore } from "../../../../../../../../Store/User/UserStore";
import Search from "./Inputs/Search";

const ModalFollowers = ({
  user,
  setFollow,
  setModalFollowers,
  countFollowers,
  setCountFollowers,
  setCountFollowing,
  setFollowAfterMe,
  follow,
}) => {
  const [arrFollowers, setArrFollowers] = useState([]);
  const [arrFilter, setArrFilter] = useState([]);
  const [skipCount, setSkipCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [moreUsers, setMoreUsers] = useState(true);
  const [disabledButtons, setDisabledButtons] = useState(false);
  const [text, setText] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const findFollowersFunction = useCallback(async () => {
    try {
      setIsLoadingMore(true);
      const id = user._id;
      let skip = skipCount;
      let limit = skip + 6;
      let firstTime = false;

      if (arrFollowers.length === 0 && userStore.isLogin) {
        firstTime = true;
      } else {
        setSkipCount(skipCount + 6);
      }
      
      if (countFollowers === 1 && follow) {
        
        setArrFollowers([userStore.user]);
        setMoreUsers(false);
        setIsLoading(false);
        setIsLoadingMore(false);
      } else {
        const onFunction = () => {
          setTimeout(async () => {
            await findFollowers(id, firstTime, skip, limit).then((res) => {
              if (res.data.countFollowers === 0) {
                setModalFollowers(false);
                document.body.style.overflow = "visible";
                setCountFollowers(0);
                setFollowAfterMe(false);
              } else {
                if (arrFollowers.length === 0 && follow) {
                  setArrFollowers(arrFollowers.push(userStore.user));
                }

                if (res.data.arrUsers.length < 6) {
                  setMoreUsers(false);
                }

                if (firstTime) {
                  const arr = arrFollowers.concat(res.data.arrUsers);
                  if (firstTime && res.data.arrUsers <= 6 && !follow) {
                    setMoreUsers(false);
                  } else if (firstTime && res.data.arrUsers <= 7 && follow) {
                    setMoreUsers(false);
                  }
                  setArrFollowers(arr);
                } else {
                  const arr = res.data.arrUsers;
                  const arr2 = [];

                  for (let x = 0; x < arr.length; x++) {
                    let flag = false;
                    for (let y = arrFollowers.length - 1; y >= 0; y--) {
                      if (arr[x]._id === arrFollowers[y]._id) {
                        flag = true;
                        break;
                      }
                    }

                    if (!flag) {
                      arr2.push(arr[x]);
                    }
                  }

                  if (arr2.length > 0) {
                    setArrFollowers(arrFollowers.concat(arr2));
                  } else {
                    skip = skip + 6;
                    limit = skip + 6;
                    onFunction();
                  }
                }

                setCountFollowers(res.data.countFollowers);
                setCountFollowing(res.data.countFollowing);
                setIsLoading(false);

                if (res.data.countFollowers === 0) {
                  setFollow(false);
                }
              }
            });
          }, 500);
        };
        onFunction();
      }
    } catch {
      window.location.reload();
    }
  }, [arrFollowers, skipCount]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (arrFollowers.length === 0) {
      findFollowersFunction();
    }
  }, []);

  return (
    <>
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalFollowersLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Followers</h5>
              <Close
                disabledButtons={disabledButtons}
                setModalFollowers={setModalFollowers}
              />
            </div>

            <Search
              text={text}
              setText={setText}
              setArrFilter={setArrFilter}
              setModalFollowers={setModalFollowers}
              inputRef={inputRef}
              user={user}
            />

            <hr />

            <div className="modalFollowersDivUsers" id="modalFollowersScroll">
              {!isLoading ? (
                <>
                  {text === "" ? (
                    <>
                      <InfiniteScroll
                        dataLength={arrFollowers.length}
                        next={findFollowersFunction}
                        hasMore={moreUsers}
                        scrollableTarget="modalFollowersScroll"
                      >
                        {arrFollowers.map((item) => {
                          return (
                            <FollowersBody
                              key={item._id}
                              item={item}
                              setDisabledButtons={setDisabledButtons}
                              text={text}
                              inputRef={inputRef}
                            />
                          );
                        })}
                      </InfiniteScroll>

                      {isLoadingMore && moreUsers ? (
                        <Box sx={{ display: "flex", mt: 2.5, mb: 2.5 }}>
                          <CircularProgress sx={{ margin: "auto" }} />
                        </Box>
                      ) : null}
                    </>
                  ) : (
                    <>
                      {arrFilter.length > 0 ? (
                        <>
                          {arrFilter.map((item) => {
                            return (
                              <FollowersBody
                                key={item._id}
                                item={item}
                                setDisabledButtons={setDisabledButtons}
                                text={text}
                                inputRef={inputRef}
                              />
                            );
                          })}
                        </>
                      ) : (
                        <h5 className="text-center mt-3">Not have result</h5>
                      )}
                    </>
                  )}
                </>
              ) : (
                <Box sx={{ display: "flex", mt: 12.5, mb: 2.5 }}>
                  <CircularProgress sx={{ margin: "auto" }} />
                </Box>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalFollowers;
