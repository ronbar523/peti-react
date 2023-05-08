import React from "react";
import { commentStore } from "../../../../../../../Store/Comment/CommentStore";

const Close = ({ setModalDeleteCommentModal }) => {
  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalDeleteCommentModal(false);
    commentStore.postId = ""
    commentStore.comment = {};
    commentStore.commentArr = [];
  };

  return <button className="btn-close" onClick={() => closeModal()} />;
};

export default Close;
