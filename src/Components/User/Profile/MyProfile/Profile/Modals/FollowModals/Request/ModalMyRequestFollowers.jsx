import React, { useState, useEffect, useCallback, useRef } from "react";
import MyRequestFollowersBody from "./BodyModal/MyRequestFollowersBody";

import Close from "./RequestButtons/Close";
import AcceptAll from "./RequestButtons/AcceptAll";
import RejectAll from "./RequestButtons/RejectAll";

import AcceptAllMessage from "./ModalMessage/AcceptAllMessage/AcceptAllMessage";
import NotAvailableMessage from "./ModalMessage/NotAvailableMessage/NotAvailableMessage";
import RejectAllMessage from "./ModalMessage/RejectAllMessage/RejectAllMessage";
import AlredayAcceptMessage from "./ModalMessage/AlredayAcceptMessage/AlredayAcceptMessage";
import { findMyRequestFollow } from "../../../../../../../../Services/FollowServices/FollowGetService";
import { Box, CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "../Followers/Inputs/Search";
import { userStore } from "../../../../../../../../Store/User/UserStore";

const ModalMyRequestFollowers = ({
  setModalMyRequestFollowers,
  countFollowers,
  setCountFollowers,
  countFollowing,
  setCountFollowing,
  setCountFollowersRequest,
}) => {
  const [arrRequest, setArrRequest] = useState([]);
  const [arrFilter, setArrFilter] = useState([]);
  const [totalRequest, setTotalRequest] = useState(0);
  const [countTotalRequest, setCountTotalRequest] = useState(0);

  const [disabledButtons, setDisabledButtons] = useState(false);
  const [acceptAll, setAcceptAll] = useState(false);
  const [rejectAll, setRejectAll] = useState(false);
  const [disabledInput, setDisabledInput] = useState(false);

  const [isLoadingRejectAll, setIsLoadingRejectAll] = useState(false);

  const [skipCount, setSkipCount] = useState(0);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [moreUsers, setMoreUsers] = useState(true);
  const [acceptSomeUser, setAcceptSomeUser] = useState(false);
  const [userMessage, setUserMessage] = useState({});

  const [modalMessageAcceptAllRequest, setModalMessageAcceptAllRequest] =
    useState(false);
  const [modalMessageRejectAllRequest, setModalMessageRejectAllRequest] =
    useState(false);
  const [modalRequestNotAvailable, setModalRequestNotAvailable] =
    useState(false);
  const [modalAlredayAcceptRequest, setModalAlredayAcceptRequest] =
    useState(false);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const findMyRequestFunction = useCallback(async () => {
    try {
      setIsLoadingMore(true);
      const skip = skipCount;
      let limit = skip + 6;
      setSkipCount(limit);

      setTimeout(async () => {
        await findMyRequestFollow(skip, limit).then((res) => {
          userStore.user.arrFollowersRequest = res.data.myFollowersRequest;
          if (res.data.myFollowersRequest.length <= 6) {
            setMoreUsers(false);
          }

          if (res.data.zeroFollowFlag) {
            setCountFollowersRequest(0);
            if (arrRequest.length === 0) {
              setModalMyRequestFollowers(false);
              document.body.style.overflow = "visible";
            }
          } else {
            if (arrRequest.length === 0) {
              setTotalRequest(res.data.totalRequest);
              if (res.data.totalRequest <= 6) {
                setMoreUsers(false);
              }
            }

            const arr = res.data.usersArr;
            const arr2 = [];
            for (let x = 0; x < arr.length; x++) {
              let flag = false;
              for (let y = 0; y < arrRequest.length; y++) {
                if (arr[x]._id === arrRequest[y]._id) {
                  flag = true;
                  break;
                }
              }
              if (!flag) {
                arr2.push(arr[x]);
              }
            }

            setArrRequest(arrRequest.concat(arr2));

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
  }, [arrRequest, skipCount]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (arrRequest.length === 0 && moreUsers) {
      findMyRequestFunction();
    } else if (arrRequest.length < 5 && moreUsers) {
      findMyRequestFunction();
    }
  }, [arrRequest]);

  useEffect(() => {
    if (totalRequest >= 1000 && totalRequest < 1_000_000) {
      let k = totalRequest / 1000;
      let strArr = k.toString().split(".");
      setCountTotalRequest(strArr[0] + "K");
    } else if (totalRequest >= 1_000_000) {
      let m = totalRequest / 1_000_000;
      let strArr = m.toString().split(".");
      setCountTotalRequest(strArr[0] + "M");
    } else {
      setCountTotalRequest(totalRequest);
    }
  }, [totalRequest]);

  return (
    <>
      <div
        className={
          modalAlredayAcceptRequest ||
          modalRequestNotAvailable ||
          modalMessageRejectAllRequest ||
          modalMessageAcceptAllRequest
            ? "modal show fade d-block opacity-modal-zero"
            : "modal show fade d-block"
        }
        tabIndex="-1"
      >
        <div className="modal-dialog model-border model-block modalMyRequestLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">My Request</h5>
              <Close
                setModalMyRequestFollowers={setModalMyRequestFollowers}
                countFollowers={countFollowers}
                setCountFollowers={setCountFollowers}
                countFollowing={countFollowing}
                setCountFollowing={setCountFollowing}
                disabledButtons={disabledButtons}
                arrRequest={arrRequest}
                moreUsers={moreUsers}
                modalRequestNotAvailable={modalRequestNotAvailable}
                modalMessageRejectAllRequest={modalMessageRejectAllRequest}
                setCountFollowersRequest={setCountFollowersRequest}
              />
            </div>

            <Search
              text={text}
              setText={setText}
              setArrFilter={setArrFilter}
              inputRef={inputRef}
              disabledInput={disabledInput}
            />

            <hr />

            <div className="modalMyRequestDivUsers" id="modalMyRequestScroll">
              {!isLoading ? (
                <>
                  {text === "" ? (
                    <>
                      <InfiniteScroll
                        dataLength={arrRequest.length}
                        next={findMyRequestFunction}
                        hasMore={moreUsers}
                        scrollableTarget="modalMyRequestScroll"
                      >
                        {arrRequest.map((item) => {
                          return (
                            <MyRequestFollowersBody
                              key={item._id}
                              item={item}
                              acceptAll={acceptAll}
                              setDisabledButtons={setDisabledButtons}
                              totalRequest={totalRequest}
                              setTotalRequest={setTotalRequest}
                              setModalAlredayAcceptRequest={
                                setModalAlredayAcceptRequest
                              }
                              setModalRequestNotAvailable={
                                setModalRequestNotAvailable
                              }
                              setArrRequest={setArrRequest}
                              arrRequest={arrRequest}
                              text={text}
                              inputRef={inputRef}
                              arrFilter={arrFilter}
                              setArrFilter={setArrFilter}
                              skipCount={skipCount}
                              setSkipCount={setSkipCount}
                              setAcceptSomeUser={setAcceptSomeUser}
                              rejectAll={rejectAll}
                              setUserMessage={setUserMessage}
                            />
                          );
                        })}
                      </InfiniteScroll>

                      {isLoadingMore && moreUsers ? (
                        <Box sx={{ display: "flex", mt: 1.5, mb: 2.5 }}>
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
                              <MyRequestFollowersBody
                                key={item._id}
                                item={item}
                                acceptAll={acceptAll}
                                setDisabledButtons={setDisabledButtons}
                                totalRequest={totalRequest}
                                setTotalRequest={setTotalRequest}
                                setModalAlredayAcceptRequest={
                                  setModalAlredayAcceptRequest
                                }
                                setModalRequestNotAvailable={
                                  setModalRequestNotAvailable
                                }
                                setArrRequest={setArrRequest}
                                arrRequest={arrRequest}
                                text={text}
                                arrFilter={arrFilter}
                                setArrFilter={setArrFilter}
                                skipCount={skipCount}
                                setSkipCount={setSkipCount}
                                setAcceptSomeUser={setAcceptSomeUser}
                                rejectAll={rejectAll}
                                inputRef={inputRef}
                                setUserMessage={setUserMessage}
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

            <div className="modalMyRequestFotter">
              <AcceptAll
                setModalMessageAcceptAllRequest={
                  setModalMessageAcceptAllRequest
                }
                totalRequest={totalRequest}
              />

              <RejectAll
                setModalMessageRejectAllRequest={
                  setModalMessageRejectAllRequest
                }
                totalRequest={totalRequest}
              />
            </div>
          </div>
        </div>
      </div>

      {modalMessageAcceptAllRequest ? (
        <AcceptAllMessage
          countTotalRequest={countTotalRequest}
          setTotalRequest={setTotalRequest}
          setModalMessageAcceptAllRequest={setModalMessageAcceptAllRequest}
          setArrRequest={setArrRequest}
          setAcceptAll={setAcceptAll}
          totalRequest={totalRequest}
          setCountFollowersRequest={setCountFollowersRequest}
          arrRequest={arrRequest}
          inputRef={inputRef}
          setDisabledInput={setDisabledInput}
        />
      ) : null}

      {modalRequestNotAvailable ? (
        <NotAvailableMessage
          inputRef={inputRef}
          setModalRequestNotAvailable={setModalRequestNotAvailable}
        />
      ) : null}

      {modalMessageRejectAllRequest ? (
        <RejectAllMessage
          setArrRequest={setArrRequest}
          acceptSomeUser={acceptSomeUser}
          isLoadingRejectAll={isLoadingRejectAll}
          setIsLoadingRejectAll={setIsLoadingRejectAll}
          totalRequest={totalRequest}
          setTotalRequest={setTotalRequest}
          countTotalRequest={countTotalRequest}
          setCountTotalRequest={setCountTotalRequest}
          setModalMessageRejectAllRequest={setModalMessageRejectAllRequest}
          setCountFollowersRequest={setCountFollowersRequest}
          setRejectAll={setRejectAll}
          inputRef={inputRef}
          setDisabledInput={setDisabledInput}

        />
      ) : null}

      {modalAlredayAcceptRequest ? (
        <AlredayAcceptMessage
          setModalAlredayAcceptRequest={setModalAlredayAcceptRequest}
          arrRequest={arrRequest}
          setArrRequest={setArrRequest}
          setAcceptSomeUser={setAcceptSomeUser}
          setUserMessage={setUserMessage}
          userMessage={userMessage}
          setCountFollowersRequest={setCountFollowersRequest}
          setModalMyRequestFollowers={setModalMyRequestFollowers}
          inputRef={inputRef}
        />
      ) : null}
    </>
  );
};

export default ModalMyRequestFollowers;
