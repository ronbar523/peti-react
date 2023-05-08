import React, { useEffect, useState } from "react";
import "../../../../../../Css/Comment/Modals/ModalFullPost/Get/ModalFullPostGetComment2.css";
import { commentStore } from "../../../../../../Store/Comment/CommentStore";
import { getCommentByCommentId } from "../../../../../../Services/CommentServices/CommentGetService";
import CardComment from "./Card/CardComment";

const GetComment = ({
  commentItem,
  commentOnCommentArr,
  setCommentOnCommentArr,
  setOpenInputOnComment,
  modalDeleteCommentOnCommentModal,
  setModalDeleteCommentOnCommentModal,
  countComments,
  setCountComments,
  countComments2,
  setCountComments2,
  slice,
  setModalShowLikesComment,
  setModalPostDeleted,
  setModalCommentDeleted,
  modalCommentDeleted,
  user,
  setStatusFollow,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const fetchData = async () => {
        try {
          const postId = commentItem.postId;
          const commentId = commentItem._id;
          const skip = 0;
          const limit = 2;

          await getCommentByCommentId(postId, commentId, skip, limit).then(
            (res) => {
              setCommentOnCommentArr(res.data.comments);
            }
          );
          setIsLoading(false);
        } catch {}
      };

      fetchData();
    }
  }, []);

  useEffect(() => {
    if (commentStore.deleted) {
      if (commentItem._id === commentStore.mainCommentId) {
        setCommentOnCommentArr(commentStore.commentOnCommentArr);
        setCountComments(countComments - 1);
        setCountComments2(countComments2 - 1);

        commentStore.mainCommentId = "";
        commentStore.comment = {};
        commentStore.deleted = false;
        commentStore.commentOnCommentArr = [];
      }
    }
  }, [modalDeleteCommentOnCommentModal]);

  useEffect(() => {
    if (commentStore.commentDeletedId !== "") {
      const arr = commentOnCommentArr;
      for (let x = 0; x < arr.length; x++) {
        if (arr[x]._id === commentStore.commentDeletedId) {
          arr.splice(x, 1);
          setCountComments(countComments - 1);
          setCountComments2(countComments2 - 1);
          setCommentOnCommentArr(arr);
          commentStore.commentDeletedId = "";
          break;
        }
      }
    }
  }, [modalCommentDeleted]);

  return (
    <>
      {!isLoading ? (
        <>
          {commentOnCommentArr.slice(0, slice).map((commentItem2) => {
            return (
              <CardComment
                commentItem={commentItem}
                commentItem2={commentItem2}
                key={commentItem2._id}
                setOpenInputOnComment={setOpenInputOnComment}
                setModalDeleteCommentOnCommentModal={
                  setModalDeleteCommentOnCommentModal
                }
                commentOnCommentArr={commentOnCommentArr}
                setModalShowLikesComment={setModalShowLikesComment}
                setModalPostDeleted={setModalPostDeleted}
                setModalCommentDeleted={setModalCommentDeleted}
                user={user}
                setStatusFollow={setStatusFollow}
              />
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default GetComment;
