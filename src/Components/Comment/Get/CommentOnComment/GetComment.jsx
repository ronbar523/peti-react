import React, { useEffect, useState } from "react";
import "../../../../Css/Comment/Get/HomePageCommentGet2.css";
import { commentStore } from "../../../../Store/Comment/CommentStore";
import { getCommentByCommentId } from "../../../../Services/CommentServices/CommentGetService";
import CardComment from "./Card/CardComment";
import { postStore } from "../../../../Store/Post/PostSotre";

const GetComment = ({
  item,
  commentItem,
  commentOnCommentArr,
  setCommentOnCommentArr,
  setOpenInputOnComment,
  modalDeleteCommentOnComment,
  setModalDeleteCommentOnComment,
  countComments,
  setCountComments,
  countComments2,
  setCountComments2,
  slice,
  modalShowLikesComment,
  setModalShowLikesComment,
  setModalPostDeleted,
  setModalCommentDeleted,
  modalCommentDeleted,
  modalAllComments,
  user,
  setStatusFollow,
  modalEditUserName,
  modalEditProfilePhoto,
  modalEditName
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
        } catch (err) {
          if (err.response.status === 410) {
            if (err.response.data.msg === "Post deleted") {
              postStore.postDeletedId = commentItem.postId;
              setModalPostDeleted(true);
            } else if (err.response.data.msg === "Comment deleted") {
              commentStore.commentMainDeletedId = commentItem._id;
              setModalCommentDeleted(true);
            }
          }
        }
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
  }, [modalDeleteCommentOnComment, modalCommentDeleted]);

  useEffect(() => {
    if (commentStore.commentDeletedId !== "" && !modalAllComments) {
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
                item={item}
                commentItem={commentItem}
                commentItem2={commentItem2}
                key={commentItem2._id}
                setOpenInputOnComment={setOpenInputOnComment}
                setModalDeleteCommentOnComment={setModalDeleteCommentOnComment}
                commentOnCommentArr={commentOnCommentArr}
                modalShowLikesComment={modalShowLikesComment}
                setModalShowLikesComment={setModalShowLikesComment}
                setModalPostDeleted={setModalPostDeleted}
                setModalCommentDeleted={setModalCommentDeleted}
                user={user}
                setStatusFollow={setStatusFollow}
                modalEditUserName={modalEditUserName}
            modalEditProfilePhoto={modalEditProfilePhoto}
            modalEditName={modalEditName}
              />
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default GetComment;
