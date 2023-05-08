import React from "react";
import { commentStore } from "../../../../../../../../../../../../Store/Comment/CommentStore";
import { postStore } from "../../../../../../../../../../../../Store/Post/PostSotre";
import { MenuItem } from "@mui/material";

const Delete = ({  commentItem, commentsArr, setAnchorEl, setModalDeleteCommentModal }) => {
 
  const openModalDeleteComment = () => {
    commentStore.postId = postStore.post._id;
    commentStore.comment = commentItem;
    commentStore.commentArr = commentsArr;
    setAnchorEl(false);
    setModalDeleteCommentModal(true);
  };

  return <MenuItem onClick={() => openModalDeleteComment()}>Delete</MenuItem>;
};

export default Delete;
