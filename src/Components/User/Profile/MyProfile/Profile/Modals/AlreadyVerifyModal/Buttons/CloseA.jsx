import React from "react";

const CloseA = ({ setModalChangeEmail, setModalAlreadyVerify} ) => {

  const closeModal = () => {
    setModalAlreadyVerify(false);
    setModalChangeEmail(false);
    document.body.style.overflow = "visible";
  };

  return (
    <button
      className="btn-close"
      onClick={() => closeModal()}
    />
  );
};

export default CloseA;
