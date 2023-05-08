import React, { useCallback, useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import CardComment from "./Card/CardComment";
import { getCommentByPostId } from "../../../../../../Services/CommentServices/CommentGetService";
import { postStore } from "../../../../../../Store/Post/PostSotre";
import { commentStore } from "../../../../../../Store/Comment/CommentStore";

const GetComment = ({
  item,
  commentsArr,
  setCommentsArr,
  countComments,
  setCountComments,
  modalDeleteCommentModal,
  setModalDeleteCommentModal,
  modalDeleteCommentOnCommentModal,
  setModalDeleteCommentOnCommentModal,
  setModalShowLikesComment,
  modalCommentDeleted,
  setModalCommentDeleted,
  setModalPostDeleted,
  setModalCommentDeletedInCreate,
  modalCommentDeletedInCreate,
  user,
  setStatusFollow,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(true);
  const [moreComments, setMoreComments] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (commentsArr.length === 0) {
      getMoreComments();
    }
  }, []);

  const getMoreComments = useCallback(async () => {
    try {
      if(item.arrComments.length > 0){
      setIsLoadingMore(true);
      const postId = item._id;
      const skip = commentsArr.length;
      const limit = commentsArr.length + 3;

      setTimeout(async () => {
        await getCommentByPostId(postId, skip, limit).then((res) => {
          setCommentsArr(commentsArr.concat(res.data.comments));
          if (res.data.comments.length < 3) {
            setMoreComments(false);
          }
        });
        setIsLoading(false);
        setIsLoadingMore(false);
      }, 500);
    } else {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
    } catch (err) {
      if (err.response.status === 410) {
        postStore.postDeletedId = item._id;
        setModalPostDeleted(true);
      }
    }
  }, [commentsArr]);

  useEffect(() => {
    if (commentStore.commentMainDeletedId !== "") {
      const arr = commentsArr;
      for (let x = 0; x < arr.length; x++) {
        if (arr[x]._id === commentStore.commentMainDeletedId) {
          let commentLength = arr[x].arrComments.length + 1;
          if (commentStore.moreOne) {
            commentLength = commentLength + 1;
            commentStore.moreOne = false;
          }
          setCountComments(countComments - commentLength);
          arr.splice(x, 1);
          setCommentsArr(arr);
          commentStore.commentMainDeletedId = "";
          break;
        }
      }
    }
  }, [modalCommentDeleted, modalCommentDeletedInCreate]);

  return (
    <>
      {!isLoading ? (
        <InfiniteScroll
          dataLength={commentsArr.length}
          next={getMoreComments}
          hasMore={moreComments}
          scrollableTarget="modalFullPostScrollComments"
        >
          {commentsArr.map((commentItem) => {
            return (
              <CardComment
                commentItem={commentItem}
                key={commentItem._id}
                commentsArr={commentsArr}
                modalDeleteCommentModal={modalDeleteCommentModal}
                setModalDeleteCommentModal={setModalDeleteCommentModal}
                modalDeleteCommentOnCommentModal={
                  modalDeleteCommentOnCommentModal
                }
                setModalDeleteCommentOnCommentModal={
                  setModalDeleteCommentOnCommentModal
                }
                countComments={countComments}
                setCountComments={setCountComments}
                setModalShowLikesComment={setModalShowLikesComment}
                modalCommentDeleted={modalCommentDeleted}
                setModalCommentDeleted={setModalCommentDeleted}
                setModalPostDeleted={setModalPostDeleted}
                setModalCommentDeletedInCreate={setModalCommentDeletedInCreate}
                user={user}
                setStatusFollow={setStatusFollow}
              />
            );
          })}
        </InfiniteScroll>
      ) : (
        <Box sx={{ display: "flex", mt: "30px" }}>
          <CircularProgress sx={{ margin: "auto" }} />
        </Box>
      )}

      {isLoadingMore && commentsArr.length > 0? (
        <Box sx={{ display: "flex", mt: "-20px", mb: 2.5 }}>
          <CircularProgress sx={{ margin: "auto" }} />
        </Box>
      ) : null}
    </>
  );
};

export default GetComment;
