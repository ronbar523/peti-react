import React, { useEffect, useState } from "react";
import "../../../../Css/Comment/Get/HomePageCommentGet1.css";
import { getCommentByPostId } from "../../../../Services/CommentServices/CommentGetService";
import CardComment from "./Card/CardComment";
import { commentStore } from "../../../../Store/Comment/CommentStore";
import { postStore } from "../../../../Store/Post/PostSotre";

const GetComment = ({
  item,
  commentsArr,
  setCommentsArr,
  countComments,
  setCountComments,
  setModalDeleteComment,
  modalDeleteCommentOnComment,
  setModalDeleteCommentOnComment,
  modalShowLikesComment,
  setModalShowLikesComment,
  setModalPostDeleted,
  modalCommentDeleted,
  setModalCommentDeleted,
  modalAllComments,
  setModalCommentDeletedInCreate,
  modalCommentDeletedInCreate,
  user,
  setStatusFollow,
  modalEditProfilePhoto,
  modalEditUserName,
  modalEditName
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (item.arrComments.length > 0) {
          const postId = item._id;
          const skip = 0;
          const limit = 2;

          await getCommentByPostId(postId, skip, limit).then((res) => {
            setCommentsArr(res.data.comments);
          });
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (err) {
        if (err.response.status === 410) {
          postStore.postDeletedId = item._id;
          setModalPostDeleted(true);
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (commentStore.commentMainDeletedId !== "" && !modalAllComments) {
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
        <>
          {commentsArr.map((commentItem, index) => {
            return (
              <CardComment
                item={item}
                index={index}
                key={commentItem._id}
                commentsArr={commentsArr}
                commentItem={commentItem}
                countComments={countComments}
                setCountComments={setCountComments}
                setModalDeleteComment={setModalDeleteComment}
                modalDeleteCommentOnComment={modalDeleteCommentOnComment}
                setModalDeleteCommentOnComment={setModalDeleteCommentOnComment}
                modalShowLikesComment={modalShowLikesComment}
                setModalShowLikesComment={setModalShowLikesComment}
                setModalPostDeleted={setModalPostDeleted}
                setModalCommentDeleted={setModalCommentDeleted}
                modalCommentDeleted={modalCommentDeleted}
                modalAllComments={modalAllComments}
                setModalCommentDeletedInCreate={setModalCommentDeletedInCreate}
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
