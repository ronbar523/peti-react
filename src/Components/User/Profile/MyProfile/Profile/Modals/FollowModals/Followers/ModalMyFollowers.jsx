import React, { useCallback, useEffect, useRef, useState } from "react";
import { findMyFollowers } from "../../../../../../../../Services/FollowServices/FollowGetService";
import { Box, CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import MyFollowersBody from "./BodyModal/MyFollowersBody";
import Close from "./FollowersButtons/Close";
import Search from "./Inputs/Search";
import { userStore } from "../../../../../../../../Store/User/UserStore";

const ModalMyFollowers = ({
  setModalMyFollowers,
  countFollowing,
  setCountFollowing,
  countFollowers,
  setCountFollowers,
}) => {
  const [arrFollowers, setArrFollowers] = useState([]);
  const [arrFilter, setArrFilter] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [moreFollowers, setMoreFollowers] = useState(true);
  const [skipCount, setSkipCount] = useState(0);

  const [text, setText] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const findMyFollowersFunction = useCallback(async () => {
    try {
      setIsLoadingMore(true);
      let skip = skipCount;
      let limit = skip + 6;
      let firstTime = false;
      

      if (arrFollowers.length === 0) {
        firstTime = true;
      } else {
        setSkipCount(skipCount + 6);
      }

      const onFunction = () => {
        setTimeout(async () => {
          await findMyFollowers(firstTime, skip, limit).then((res) => {
            if(res.data.myFollowers.length <= 6 && arrFollowers.length === 0){
              setMoreFollowers(false)
            }


            userStore.user.arrFollowers = res.data.myFollowers;

            if (res.data.zeroFollowFlag && arrFollowers.length === 0) {
              setCountFollowers(0);
              setModalMyFollowers(false);
              document.body.style.overflow = "visible";
            } else {
              if (arrFollowers.length === 0) {
                setArrFollowers(res.data.arrUsers);
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
                  if (res.data.arrUsers.length >= 6) {
                    skip = skip + 6;
                    limit = skip + 6;
                    onFunction();
                  }
                }
              }
            }

            if (res.data.arrUsers.length < 6) {
              setMoreFollowers(false);
            }
          });

          setIsLoading(false);
        }, 500);
      };
      onFunction();
    } catch {
      window.location.reload();
    }
  }, [arrFollowers, skipCount]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (arrFollowers.length === 0) {
      findMyFollowersFunction();
    }
  }, []);

  return (
    <>
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalMyFollowersLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">My Followers</h5>
              <Close
                countFollowers={countFollowers}
                setCountFollowers={setCountFollowers}
                countFollowing={countFollowing}
                setCountFollowing={setCountFollowing}
                disabledButtons={disabledButtons}
                setModalMyFollowers={setModalMyFollowers}
              />
            </div>

            <Search
              text={text}
              setText={setText}
              arrFilter={arrFilter}
              setArrFilter={setArrFilter}
              inputRef={inputRef}
              
            />

            <hr />

            <div className="modalMyFollowersDivUsers" id="modalFollowersScroll">
              {!isLoading ? (
                <>
                  {text === "" ? (
                    <>
                      <InfiniteScroll
                        dataLength={arrFollowers.length}
                        next={findMyFollowersFunction}
                        hasMore={moreFollowers}
                        scrollableTarget="modalFollowersScroll"
                      >
                        {arrFollowers.map((item) => {
                          return (
                            <MyFollowersBody
                              key={item._id}
                              item={item}
                              setDisabledButtons={setDisabledButtons}
                              text={text}
                              skipCount={skipCount}
                              setSkipCount={setSkipCount}
                              inputRef={inputRef}
                            />
                          );
                        })}
                      </InfiniteScroll>

                      {isLoadingMore && moreFollowers ? (
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
                              <MyFollowersBody
                                key={item._id}
                                item={item}
                                setDisabledButtons={setDisabledButtons}
                                text={text}
                                skipCount={skipCount}
                                setSkipCount={setSkipCount}
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

export default ModalMyFollowers;
