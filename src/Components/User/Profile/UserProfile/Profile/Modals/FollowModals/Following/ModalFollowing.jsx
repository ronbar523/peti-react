import React, { useState, useEffect, useRef, useCallback } from "react";
import FollowingBody from "./BodyModal/FollowingBody";
import Close from "./Buttons/Close";
import { findFollowing } from "../../../../../../../../Services/FollowServices/FollowGetService";
import { userStore } from "../../../../../../../../Store/User/UserStore";
import Search from "../Followers/Inputs/Search";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box, CircularProgress } from "@mui/material";

const ModalFollowing = ({
  user,
  setModalFollowing,
  setCountFollowers,
  countFollowing,
  setCountFollowing,
  setFollowAfterMe,
  setFollow,
  followAfterMe,
}) => {
  const [arrFollowing, setArrFollowing] = useState([]);
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

  const findFollowingFunction = useCallback(async () => {
    try {
      setIsLoadingMore(true);
      const id = user._id;
      let skip = skipCount;
      let limit = skip + 6;
      let firstTime = false;

      if (arrFollowing.length === 0 && userStore.isLogin) {
        firstTime = true;
      } else {
        setSkipCount(skipCount + 6);
      }
      if (countFollowing === 1 && followAfterMe) {
        setArrFollowing([userStore.user]);
        setMoreUsers(false);
        setIsLoading(false);
        setIsLoadingMore(false);
      } else {
        const onFunction = () => {
          setTimeout(async () => {
            await findFollowing(id, firstTime, skip, limit).then((res) => {
              if (res.data.countFollowers === 0) {
                setModalFollowing(false);
                document.body.style.overflow = "visible";
                setCountFollowers(0);
                setFollow(false);
              } else {
                if (arrFollowing.length === 0 && followAfterMe) {
                  setArrFollowing(arrFollowing.push(userStore.user));
                }

                if (res.data.arrUsers.length < 6) {
                  setMoreUsers(false);
                }

                if (firstTime) {
                  const arr = arrFollowing.concat(res.data.arrUsers);
                  if (firstTime && res.data.arrUsers <= 6 && !followAfterMe) {
                    setMoreUsers(false);
                  } else if (
                    firstTime &&
                    res.data.arrUsers <= 7 &&
                    followAfterMe
                  ) {
                    setMoreUsers(false);
                  }
                  setArrFollowing(arr);
                } else {
                  const arr = res.data.arrUsers;
                  const arr2 = [];

                  for (let x = 0; x < arr.length; x++) {
                    let flag = false;
                    for (let y = arrFollowing.length - 1; y >= 0; y--) {
                      if (arr[x]._id === arrFollowing[y]._id) {
                        flag = true;
                        break;
                      }
                    }

                    if (!flag) {
                      arr2.push(arr[x]);
                    }
                  }

                  if (arr2.length > 0) {
                    setArrFollowing(arrFollowing.concat(arr2));
                  } else {
                    skip = skip + 6;
                    limit = skip + 6;
                    onFunction();
                  }
                }

                setCountFollowers(res.data.countFollowers);
                setCountFollowing(res.data.countFollowing);
                setIsLoading(false);

                if (res.data.countFollowing === 0) {
                  setFollowAfterMe(false);
                }
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
  }, [arrFollowing, skipCount]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (arrFollowing.length === 0) {
      findFollowingFunction();
    }
  }, []);

  return (
    <>
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalFollowingLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Following</h5>
              <Close
                disabledButtons={disabledButtons}
                setModalFollowing={setModalFollowing}
              />
            </div>

            <Search
              text={text}
              setText={setText}
              setArrFilter={setArrFilter}
              setModalFollowing={setModalFollowing}
              inputRef={inputRef}
              user={user}
            />

            <hr />
            <div className="modalFollowingDivUsers" id="modalFollowingScroll">
              {!isLoading ? (
                <>
                  {text === "" ? (
                    <>
                      <InfiniteScroll
                        dataLength={arrFollowing.length}
                        next={findFollowingFunction}
                        hasMore={moreUsers}
                        scrollableTarget="modalFollowingScroll"
                      >
                        {arrFollowing.map((item, index) => {
                          return (
                            <FollowingBody
                              key={index}
                              index={index}
                              item={item}
                              setDisabledButtons={setDisabledButtons}
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
                              <FollowingBody
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

export default ModalFollowing;
