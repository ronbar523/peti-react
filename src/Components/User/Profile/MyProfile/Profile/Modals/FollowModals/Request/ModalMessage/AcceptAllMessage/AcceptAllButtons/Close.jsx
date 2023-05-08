import React from "react";

const Close = ({setModalMessageAcceptAllRequest, isLoadingAcceptAll, inputRef}) => {

  const closeModal = () => {
    setModalMessageAcceptAllRequest(false)
    inputRef.current.focus()
  }

  return (
    <>
      <button
        className="btn-close"
        onClick={() => closeModal()}
        disabled={isLoadingAcceptAll}
      />
    </>
  );
};

export default Close;
