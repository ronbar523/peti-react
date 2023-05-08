import React from "react";

const Close = ({ setModalPostDeleted }) => {
  
  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalPostDeleted(false);
  };

  return (
    <button
      className="btn-close modalMessageDeletedPostCloseButton"
      onClick={() => closeModal()}
    />
  );
};

export default Close;
