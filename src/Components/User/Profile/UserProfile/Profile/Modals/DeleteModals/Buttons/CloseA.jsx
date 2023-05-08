import React from "react";

const CloseA = ({ setModalUserDeleted }) => {
  const closeModal = () => {
    window.location = "/";
    setModalUserDeleted(false);
    document.body.style.overflow = "visible";
  };

  return <button className="btn-close" onClick={() => closeModal()} />;
};

export default CloseA;
