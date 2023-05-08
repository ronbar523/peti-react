import React, { useCallback, useEffect, useRef, useState } from "react";
import Close from "./FollowingButtons/Close";
import MyFollowingBody from "./BodyModal/MyFollowingBody";
import { findMyFollowing } from "../../../../../../../../Services/FollowServices/FollowGetService";
import { Box, CircularProgress } from "@mui/material";
import Search from "./Inputs/Search";
import InfiniteScroll from "react-infinite-scroll-component";
import { userStore } from "../../../../../../../../Store/User/UserStore";

const ModalMyFollowing = ({
  setModalMyFollowing,
  setCountFollowing,
  setCountFollowers,
  countFollowing,
  countFollowers,
}) => {
  const [arrFollowing, setArrFollowing] = useState([]);
  const [arrFilter, setArrFilter] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState(false);
  const [skipCount, setSkipCount] = useState(0);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [moreFollowing, setMoreFollowing] = useState(true);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const findMyFollowingFunction = useCallback(async () => {
    try {
      setIsLoadingMore(true);
      const skip = skipCount;
      let limit = skip + 6;

      setSkipCount(skipCount + 6);

      const onFunction = () => {
        setTimeout(async () => {
          await findMyFollowing(skip, limit).then((res) => {
            userStore.user.arrFollowing = res.data.myFollowing;
            if(res.data.myFollowing.length <= 6){
              setMoreFollowing(false)
            }
            
            if (res.data.zeroFollowFlag) {
              setCountFollowing(0);
              setModalMyFollowing(false);
              document.body.style.overflow = "visible";
            } else {
              if (arrFollowing.length === 0) {
                setArrFollowing(arrFollowing.concat(res.data.usersArr));
              } else {
                const arr = res.data.usersArr;
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
                  if (res.data.arrUsers.length >= 6) {
                    skip = skip + 6;
                    limit = skip + 6;
                    onFunction();
                  }
                }
              }
              if (res.data.usersArr.length < 6) {
                setMoreFollowing(false);
              }
            }
          });
          setIsLoading(false);
        }, 500);
      };
      onFunction();
    } catch {
      window.location.reload();
    }
  }, [arrFollowing, skipCount]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (arrFollowing.length === 0) {
      findMyFollowingFunction();
    }
  }, []);

  return (
    <>
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalMyFollowingLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">My Following</h5>
              <Close
                countFollowers={countFollowers}
                setCountFollowers={setCountFollowers}
                countFollowing={countFollowing}
                setCountFollowing={setCountFollowing}
                disabledButtons={disabledButtons}
                setModalMyFollowing={setModalMyFollowing}
              />
            </div>

            <Search
              text={text}
              setText={setText}
              setArrFilter={setArrFilter}
              inputRef={inputRef}
            />

            <hr />

            <div className="modalMyFollowingDivUsers" id="modalMyBlockScroll">
              {!isLoading ? (
                <>
                  {text === "" ? (
                    <>
                      <InfiniteScroll
                        dataLength={arrFollowing.length}
                        next={findMyFollowingFunction}
                        hasMore={moreFollowing}
                        scrollableTarget="modalMyBlockScroll"
                      >
                        {arrFollowing.map((item) => {
                          return (
                            <MyFollowingBody
                              key={item._id}
                              item={item}
                              text={text}
                              setDisabledButtons={setDisabledButtons}
                              setSkipCount={setSkipCount}
                              skipCount={skipCount}
                              inputRef={inputRef}
                            />
                          );
                        })}
                      </InfiniteScroll>

                      {isLoadingMore && moreFollowing ? (
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
                              <MyFollowingBody
                                key={item._id}
                                item={item}
                                setDisabledButtons={setDisabledButtons}
                                text={text}
                                setSkipCount={setSkipCount}
                                skipCount={skipCount}
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

export default ModalMyFollowing;
