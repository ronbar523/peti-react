import React from "react";

const CloseA = ({ setModalShowLikesPost, disabledButtons }) => {

  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalShowLikesPost(false)
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
