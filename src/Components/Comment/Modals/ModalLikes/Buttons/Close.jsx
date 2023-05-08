import React from "react";

const CloseA = ({ setModalShowLikesComment, disabledButtons }) => {

  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalShowLikesComment(false)
  }
  return (
    <>
      <button
        className="btn-close modalMyFollowingCloseButton"
        onClick={() => closeModal()}
        disabled={disabledButtons}
      />
    </>
  );
};

export default CloseA;
