import React from "react";

const Close = ({ setModalMyBlock }) => {
  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalMyBlock(false);
  };

  return (
    <button
      className="btn-close modalMyBlockCloseButton"
      onClick={() => closeModal()}
    />
  );
};

export default Close;
