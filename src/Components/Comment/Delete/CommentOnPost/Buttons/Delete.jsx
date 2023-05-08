import React, { useCallback, useState } from "react";
import { postStore } from "../../../../../Store/Post/PostSotre";
import { commentStore } from "../../../../../Store/Comment/CommentStore";
import { deleteComment } from "../../../../../Services/CommentServices/CommentDeleteService";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { Button } from "@mui/material";

const Delete = ({
  setModalDeleteComment,
  setModalPostDeleted,
  setModalCommentDeleted,
}) => {
  const [isLoadingDelete, setIsLodingDelete] = useState(false);

  const deletePostFunction = useCallback(async () => {
    try {
      setIsLodingDelete(true);

      const postId = commentStore.comment.postId;
      const commentId = commentStore.comment._id;
      let commentArr = commentStore.commentArr;

      await deleteComment(postId, commentId)

      for (let x = 0; x < commentArr.length; x++) {
        if (commentArr[x]._id === commentId) {
          commentArr.splice(x, 1);
          commentStore.commentArr = commentArr;
          break;
        }
      }

      commentStore.deleted = true;

      document.body.style.overflow = "visible";
      setModalDeleteComment(false);
    } catch (err) {
      if (err.response.status === 410) {
        if (err.response.data.msg === "Post deleted") {
          postStore.postDeletedId = commentStore.comment.postId;
          setModalDeleteComment(false);
          document.body.style.overflow = "visible";
          setModalPostDeleted(true);
        } else if (err.response.data.msg === "Comment deleted") {
          commentStore.commentMainDeletedId = commentStore.comment._id;
          setModalCommentDeleted(true);
          document.body.style.overflow = "visible";
          setModalDeleteComment(false);
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
