import React, { useCallback, useEffect, useRef, useState } from "react";
import "../../../../Css/Comment/Modals/ModalLikes/ModalLikes.css";
import { userStore } from "../../../../Store/User/UserStore";
import { commentStore } from "../../../../Store/Comment/CommentStore";
import { findLikes } from "../../../../Services/CommentServices/CommentGetService";
import { Box, CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import LikeBody from "./BodyModal/LikeBody";
import Close from "./Buttons/Close";
import Search from "./Inputs/Search";
import { postStore } from "../../../../Store/Post/PostSotre";

const ModalLikes = ({
  setModalShowLikesComment,
  setModalCommentDeleted,
  modalAllComments,
  setModalPostDeleted,
}) => {
  const [arrLikes, setArrLikes] = useState([]);
  const [arrFilter, setArrFilter] = useState([]);
  const [skipCount, setSkipCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [moreLikes, setMoreLikes] = useState(true);
  const [disabledButtons, setDisabledButtons] = useState(false);
  const [text, setText] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const findLikesFunction = useCallback(async () => {
    try {
      setIsLoadingMore(true);
      const postId = commentStore.commentLikes.postId;
      const commentId = commentStore.commentLikes._id;
      const commentMainId = commentStore.commentLikes.commentIdCreated;
      const like = commentStore.like;
      let skip = skipCount;
      let limit = skip + 6;
      let firstTime = false;

      if (commentStore.commentLikes.arrLikes.length === 1 && like) {
        setArrLikes([userStore.user]);
        setIsLoadingMore(false);
        setIsLoading(false);
        setMoreLikes(false);
      } else {
        if (arrLikes.length === 0 && userStore.isLogin) {
          firstTime = true;
        } else {
          setSkipCount(skipCount + 6);
        }

        const onFunction = () => {
          setTimeout(async () => {
            await findLikes(
              postId,
              commentId,
              commentMainId,
              firstTime,
              skip,
              limit
            ).then((res) => {
              if (res.data.zeroLikesFlag) {
                setModalShowLikesComment(false);
                document.body.style.overflow = "visible";
                commentStore.countLikes = 0;
              } else {
                if (arrLikes.length === 0 && like) {
                  setArrLikes(arrLikes.push(userStore.user));
                }
                commentStore.countLikes = res.data.countLikes;

                if (res.data.arrUsers.length < 6) {
                  setMoreLikes(false);
                }

                if (firstTime) {
                  const arr = arrLikes.concat(res.data.arrUsers);
                  if (firstTime && res.data.countLikes <= 6 && !like) {
                    setMoreLikes(false);
                  } else if (firstTime && res.data.countLikes <= 7 && like) {
                    setMoreLikes(false);
                  }
                  setArrLikes(arr);
                } else {
                  const arr = res.data.arrUsers;
                  const arr2 = [];

                  for (let x = 0; x < arr.length; x++) {
                    let flag = false;
                    for (let y = arrLikes.length - 1; y >= 0; y--) {
                      if (arr[x]._id === arrLikes[y]._id) {
                        flag = true;
                        break;
                      }
                    }

                    if (!flag) {
                      arr2.push(arr[x]);
                    }
                  }

                  if (arr2.length > 0) {
                    setArrLikes(arrLikes.concat(arr2));
                  } else {
                    skip = skip + 6;
                    limit = skip + 6;
                    onFunction();
                  }
                }

                setIsLoading(false);
              }
            });
          }, 500);
        };
        onFunction();
      }
    } catch (err) {
      if (err.response.status === 410) {
        if (err.response.data.msg === "Post deleted") {
          postStore.postDeletedId = commentStore.commentLikes.postId;
          setModalShowLikesComment(false);
          setModalPostDeleted(true);
        } else if (err.response.data.msg === "Comment main deleted") {
          commentStore.commentMainDeletedId =
            commentStore.commentLikes.commentIdCreated;
          setModalShowLikesComment(false);
          setModalCommentDeleted(true);
        } else if (err.response.data.msg === "Comment deleted") {
          if (commentStore.commentLikes.commentIdCreated === undefined) {
            commentStore.commentMainDeletedId = commentStore.commentLikes._id;
            setModalShowLikesComment(false);
            setModalCommentDeleted(true);
          } else {
            commentStore.commentDeletedId = commentStore.commentLikes._id;
            setModalShowLikesComment(false);
            setModalCommentDeleted(true);
          }
        }
      }
    }
  }, [arrLikes, skipCount]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (arrLikes.length === 0) {
      findLikesFunction();
    }
  }, []);

  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div
        className={
          !modalAllComments
            ? "modal-dialog model-border model-block modalCommentLikesLocation1"
            : "modal-dialog model-border model-block modalCommentLikesLocation2"
        }
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="pt-2 px-2">Likes</h5>
            <Close
              setModalShowLikesComment={setModalShowLikesComment}
              disabledButtons={disabledButtons}
            />
          </div>

          <Search
            text={text}
            setText={setText}
            setArrFilter={setArrFilter}
            setModalShowLikesComment={setModalShowLikesComment}
            setModalCommentDeleted={setModalCommentDeleted}
            setModalPostDeleted={setModalPostDeleted}
            inputRef={inputRef}
          />

          <hr />

          <div
            className="modalCommentLikesDivUsers"
            id="modalCommentLikesScroll"
          >
            {!isLoading ? (
              <>
                {text === "" ? (
                  <>
                    <InfiniteScroll
                      dataLength={arrLikes.length}
                      next={findLikesFunction}
                      hasMore={moreLikes}
                      scrollableTarget="modalCommentLikesScroll"
                    >
                      {arrLikes.map((item) => {
                        return (
                          <LikeBody
                            item={item}
                            key={item._id}
                            setDisabledButtons={setDisabledButtons}
                            text={text}
                            inputRef={inputRef}
                          />
                        );
                      })}
                    </InfiniteScroll>

                    {isLoadingMore && moreLikes ? (
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
                            <LikeBody
                              item={item}
                              key={item._id}
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
  );
};

export default ModalLikes;
