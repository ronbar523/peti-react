import React from "react";

const CloseA = ({ setModalCommentDeleted }) => {
  
  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalCommentDeleted(false);
  };

  return (
    <button
      className="btn-close modalMessageDeletedCommentCloseButton"
      onClick={() => closeModal()}
    />
  );
};

export default CloseA;
