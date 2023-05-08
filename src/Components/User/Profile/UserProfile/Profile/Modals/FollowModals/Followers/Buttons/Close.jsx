import React from "react";

const Close = ({ disabledClose, setModalFollowers }) => {
  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalFollowers(false);
  };

  return (
    <button
      className="btn-close modalFollowersCloseButton"
      onClick={() => closeModal()}
      disabled={disabledClose}
    />
  );
};

export default Close;
