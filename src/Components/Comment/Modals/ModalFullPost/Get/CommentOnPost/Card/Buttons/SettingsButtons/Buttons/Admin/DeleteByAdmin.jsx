import React from "react";
import { commentStore } from "../../../../../../../../../../../Store/Comment/CommentStore";
import { MenuItem } from "@mui/material";
import { postStore } from "../../../../../../../../../../../Store/Post/PostSotre";

const DeleteByAdmin = ({  commentItem, commentsArr, setAnchorEl, setModalDeleteCommentModal }) => {
  const openModalDeleteComment = () => {
    commentStore.postId = postStore.post._id;
    commentStore.comment = commentItem;
    commentStore.commentArr = commentsArr;
    setAnchorEl(false);
    setModalDeleteCommentModal(true);
  };

  return <MenuItem onClick={() => openModalDeleteComment()}>Delete</MenuItem>;
};

export default DeleteByAdmin;
