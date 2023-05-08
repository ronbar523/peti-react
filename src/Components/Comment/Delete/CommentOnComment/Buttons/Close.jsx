import React from "react";
import { commentStore } from "../../../../../Store/Comment/CommentStore";

const Close = ({ setModalDeleteCommentOnComment }) => {
  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalDeleteCommentOnComment(false);
    commentStore.mainCommentId = ""
    commentStore.comment = {};
    commentStore.commentOnCommentArr = [];
  };

  return <button className="btn-close" onClick={() => closeModal()} />;
};

export default Close;
