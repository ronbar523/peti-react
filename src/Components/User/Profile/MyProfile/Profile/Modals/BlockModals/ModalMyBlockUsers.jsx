import React, { useState, useEffect, useCallback, useRef } from "react";
import Close from "./Buttons/Buttons/Close";
import UnBlockAll from "./Buttons/Buttons/UnBlockAll";
import MyBlockBody from "./Buttons/BodyModal/MyBlockBody";
import UnAllBlockMessage from "./Buttons/ModalMessage/UnBlockAllMessage";
import { findMyBlockUser } from "../../../../../../../Services/BlockServices/BlockGetServices";
import { Box, CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "./Buttons/Inputs/Search";

const ModalMyBlockUsers = ({ setModalMyBlock, setCountBlock }) => {
  const [arrBlock, setArrBlock] = useState([]);
  const [arrFilter, setArrFilter] = useState([]);

  const [totalBlockUser, setTotalBlockUser] = useState(0);
  const [countTotalBlock, setCountTotalBlock] = useState(0);

  const [disabledButtons, setDisabledButtons] = useState(false);
  const [modalUnBlockAll, setModalUnBlockAll] = useState(false);
  const [skipCount, setSkipCount] = useState(0);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [moreUsers, setMoreUsers] = useState(true);

  const [unBlockAll, setUnBlockAll] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);


  const findMyBlockUsersFunction = useCallback(async () => {
    try {
      setIsLoadingMore(true);
      const skip = skipCount;
      let limit = skip + 6;

      setSkipCount(skipCount + 6);

      setTimeout(async () => {
        await findMyBlockUser(skip, limit).then((res) => {
          if (res.data.zeroBlockFlag) {
            setCountBlock(0);
            setModalMyBlock(false);
            document.body.style.overflow = "visible";
          } else {
            if (arrBlock.length === 0) {
              if(res.data.totalBlockUser <= 6){
                setMoreUsers(false)
              }
              setTotalBlockUser(res.data.totalBlockUser);
            }

            const arr = res.data.usersArr;
            const arr2 = [];
            for (let x = 0; x < arr.length; x++) {
              let flag = false;
              for (let y = 0; y < arrBlock.length; y++) {
                if (arr[x]._id === arrBlock[y]._id) {
                  flag = true;
                  break;
                }
              }
              if (!flag) {
                arr2.push(arr[x]);
              }
            }


            setArrBlock(arrBlock.concat(arr2));

            if (res.data.usersArr.length < 6) {
              setMoreUsers(false);
            }
          }
        });
      }, 500);

      setIsLoading(false);
    } catch {
      window.location.reload();
    }
  }, [arrBlock, skipCount]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (arrBlock.length === 0) {
      findMyBlockUsersFunction();
    } 
  }, [arrBlock]);

  useEffect(() => {
    setCountBlock(totalBlockUser);
    if (totalBlockUser >= 1000 && totalBlockUser < 1_000_000) {
      let k = totalBlockUser / 1000;
      let strArr = k.toString().split(".");
      setCountTotalBlock(strArr[0] + "K");
    } else if (totalBlockUser >= 1_000_000) {
      let m = totalBlockUser / 1_000_000;
      let strArr = m.toString().split(".");
      setCountTotalBlock(strArr[0] + "M");
    } else {
      setCountTotalBlock(totalBlockUser);
    }
  }, [totalBlockUser]);

  return (
    <>
      <div
        className={
          modalUnBlockAll
            ? "modal show fade d-block opacity-modal"
            : "modal show fade d-block"
        }
        tabIndex="-1"
      >
        <div className="modal-dialog model-border model-block modalMyBlockLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">My Block List</h5>
              <Close setModalMyBlock={setModalMyBlock} />
            </div>
            <Search
              text={text}
              setText={setText}
              inputRef={inputRef}
              setArrFilter={setArrFilter}
            />
            <hr />

            <div className="modalMyBlockDivUsers" id="modalMyBlockScroll">
              {!isLoading ? (
                <>
                  {text === "" ? (
                    <>
                      <InfiniteScroll
                        dataLength={arrBlock.length}
                        next={findMyBlockUsersFunction}
                        hasMore={moreUsers}
                        scrollableTarget="modalMyBlockScroll"
                      >
                        {arrBlock.map((item) => {
                          return (
                            <MyBlockBody
                              key={item._id}
                              item={item}
                              setDisabledButtons={setDisabledButtons}
                              totalBlockUser={totalBlockUser}
                              setTotalBlockUser={setTotalBlockUser}
                              text={text}
                              unBlockAll={unBlockAll}
                              skipCount={skipCount}
                              setSkipCount={setSkipCount}
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
                              <MyBlockBody
                                key={item._id}
                                item={item}
                                setDisabledButtons={setDisabledButtons}
                                totalBlockUser={totalBlockUser}
                                setTotalBlockUser={setTotalBlockUser}
                                text={text}
                                unBlockAll={unBlockAll}
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

            <hr />

            <div className="modalMyBlockFotter">
              <UnBlockAll
                setModalUnBlockAll={setModalUnBlockAll}
                disabledButtons={disabledButtons}
                totalBlockUser={totalBlockUser}
              />
            </div>
          </div>
        </div>
      </div>

      {modalUnBlockAll ? (
        <UnAllBlockMessage
          setModalMyBlock={setModalMyBlock}
          setModalUnBlockAll={setModalUnBlockAll}
          countTotalBlock={countTotalBlock}
          setCountBlock={setCountBlock}
          setUnBlockAll={setUnBlockAll}
          setTotalBlockUser={setTotalBlockUser}
          inputRef={inputRef}
        />
      ) : null}
    </>
  );
};

export default ModalMyBlockUsers;
