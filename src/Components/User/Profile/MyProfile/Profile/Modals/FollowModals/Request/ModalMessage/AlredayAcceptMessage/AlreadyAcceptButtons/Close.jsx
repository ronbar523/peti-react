import React from "react";

const Close = ({
  setModalAlredayAcceptRequest,
  unFollowerLoading,
  setAcceptSomeUser,
  inputRef,
}) => {
  const closeModal = () => {
    setAcceptSomeUser(true);
    setModalAlredayAcceptRequest(false);
    inputRef.current.focus();
  };

  return (
    <button
      className="btn-close"
      onClick={() => closeModal()}
      disabled={unFollowerLoading}
    />
  );
};

export default Close;
