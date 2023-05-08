import React from "react";

const CloseA = ({ setModalEditName }) => {
  const closeModal = () => {
    setModalEditName(false);
    document.body.style.overflow = "visible";
  };

  return <button className="btn-close" onClick={() => closeModal()} />;
};

export default CloseA;
