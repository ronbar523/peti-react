import React from "react";

const Close = ({ disabledClose, setModalFollowing }) => {
  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalFollowing(false);
  };

  return (
    <button
      className="btn-close modalFollowingCloseButton"
      onClick={() => closeModal()}
      disabled={disabledClose}
    />
  );
};

export default Close;
