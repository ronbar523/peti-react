import React from "react";

const CloseA = ({ setModalResetSuccess }) => {
  const closeModal = () => {
    window.location = "/";
    setModalResetSuccess(false);
    document.body.style.overflow = "visible";
  };

  return <button className="btn-close" onClick={() => closeModal()} />;
};

export default CloseA;
