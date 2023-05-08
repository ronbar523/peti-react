import React from "react";
import { commentStore } from "../../../../../../../../../../../../Store/Comment/CommentStore";
import { MenuItem } from "@mui/material";

const DeleteByAuthorMain = ({
  commentItem,
  commentItem2,
  commentOnCommentArr,
  setAnchorEl,
  setModalDeleteCommentOnCommentModal,
}) => {
  const openDeleteModal = () => {
    commentStore.mainCommentId = commentItem._id;
    commentStore.comment = commentItem2;
    commentStore.commentOnCommentArr = commentOnCommentArr;
    setAnchorEl(false);
    setModalDeleteCommentOnCommentModal(true);
  };

  return <MenuItem onClick={() => openDeleteModal()}>Delete</MenuItem>;
};

export default DeleteByAuthorMain;
