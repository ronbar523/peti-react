import React from "react";
import { commentStore } from "../../../../../../../../../../Store/Comment/CommentStore";
import { MenuItem } from "@mui/material";

const DeleteByAutorPost = ({ item, commentItem, commentsArr, setAnchorEl, setModalDeleteComment }) => {
  const openModalDeleteComment = () => {
    commentStore.postId = item._id;
    commentStore.comment = commentItem;
    commentStore.commentArr = commentsArr;
    setAnchorEl(false);
    setModalDeleteComment(true);
  };

  return <MenuItem onClick={() => openModalDeleteComment()}>Delete</MenuItem>;
};

export default DeleteByAutorPost;
