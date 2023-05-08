import React from "react";
import { commentStore } from "../../../../../../../../../../Store/Comment/CommentStore";
import { MenuItem } from "@mui/material";

const DeleteByAuthorMain = ({
  commentItem,
  commentItem2,
  commentOnCommentArr,
  setAnchorEl,
  setModalDeleteCommentOnComment,
}) => {
  const openDeleteModal = () => {
    commentStore.mainCommentId = commentItem._id;
    commentStore.comment = commentItem2;
    commentStore.commentOnCommentArr = commentOnCommentArr;
    setAnchorEl(false);
    setModalDeleteCommentOnComment(true);
  };

  return <MenuItem onClick={() => openDeleteModal()}>Delete</MenuItem>;
};

export default DeleteByAuthorMain;
