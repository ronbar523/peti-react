import React from "react";
import { commentStore } from "../../../../../Store/Comment/CommentStore";

const Close = ({ setModalCommentDeletedInCreate }) => {
  
  const closeModal = () => {
    document.body.style.overflow = "visible";
    commentStore.comment = {}
    setModalCommentDeletedInCreate(false);
  };

  return (
    <button
      className="btn-close modalMessageDeletedCommentCloseButton"
      onClick={() => closeModal()}
    />
  );
};

export default Close;
