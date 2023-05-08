import React from "react";

const Close = ({ setModalMessageRejectAllRequest, isLoadingRejectAll, inputRef }) => {

  const closeModal = () => {
    setModalMessageRejectAllRequest(false)
    inputRef.current.focus()
  }
  return (
    <button
      className="btn-close"
      onClick={() => closeModal()}
      disabled={isLoadingRejectAll}
    />
  );
};

export default Close;
