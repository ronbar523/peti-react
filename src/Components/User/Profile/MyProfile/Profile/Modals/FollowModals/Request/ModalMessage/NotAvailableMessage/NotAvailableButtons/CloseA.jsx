import React from "react";

const CloseA = ({ setModalRequestNotAvailable, inputRef }) => {

  const closeModal = () => {
    setModalRequestNotAvailable(false)
    inputRef.current.focus()
  }
  return (
    <button
      className="btn-close"
      onClick={() => closeModal()}
    />
  );
};

export default CloseA;
