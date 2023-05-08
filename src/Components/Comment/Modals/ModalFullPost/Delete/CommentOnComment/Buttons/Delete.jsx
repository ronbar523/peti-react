import React, { useCallback, useState } from "react";
import { commentStore } from "../../../../../../../Store/Comment/CommentStore";
import { deleteCommentOnComment } from "../../../../../../../Services/CommentServices/CommentDeleteService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { postStore } from "../../../../../../../Store/Post/PostSotre";

const Delete = ({ setModalDeleteCommentOnCommentModal, setModalPostDeleted, setModalCommentDeleted }) => {
  const [isLoadingDelete, setIsLodingDelete] = useState(false);

  const deletePostFunction = useCallback(async () => {
    try {
      setIsLodingDelete(true);

      const postId = commentStore.comment.postId;
      const commentMainId = commentStore.comment.commentIdCreated;
      const commentId = commentStore.comment._id;
      let commentArr = commentStore.commentOnCommentArr;

      for (let x = 0; x < commentArr.length; x++) {
        if (commentArr[x]._id === commentStore.comment._id) {
          commentArr.splice(x, 1);
          commentStore.commentOnCommentArr = commentArr
          break;
        }
      }

      await deleteCommentOnComment(postId, commentMainId, commentId)

      commentStore.deleted = true

      document.body.style.overflow = "visible";
      setModalDeleteCommentOnCommentModal(false);
    } catch (err){
      if (err.response.status === 410) {
        if (err.response.data.msg === "Post deleted") {
          postStore.postDeletedId = commentStore.comment.postId;
          setModalPostDeleted(true);
        } else if (err.response.data.msg === "Comment main deleted") {
          commentStore.commentMainDeletedId = commentStore.comment.commentIdCreated;
          commentStore.moreOne = true
          setModalDeleteCommentOnCommentModal(false);
          setModalCommentDeleted(true);
        } else if (err.response.data.msg === "Comment deleted") {
          commentStore.commentDeletedId = commentStore.comment._id;
          commentStore.deleted = true
          setModalDeleteCommentOnCommentModal(false);
        }
      }
    }
  }, []);
  
  return (
    <>
      {!isLoadingDelete ? (
        <Button
          variant="outlined"
          color="error"
          sx={{
            float: "left",
            marginRight: "5px",
            marginTop: "7px",
            marginBottom: "9px",
            textTransform: "unset",
            height: "36px",
            width: 70,
          }}
          onClick={() => deletePostFunction()}
        >
          Delete
        </Button>
      ) : (
        <LoadingButton
          variant="outlined"
          sx={{
            float: "left",
            marginRight: "5px",
            marginTop: "7px",
            marginBottom: "9px",
            height: "36px",
            width: 70,
          }}
          loading={isLoadingDelete}
          disabled
        ></LoadingButton>
      )}
    </>
  );
};

export default Delete;
