import React from "react";

const CloseA = ({ setModalChangeEmail }) => {
  const closeModal = () => {
    setModalChangeEmail(false);
    document.body.style.overflow = "visible";
  };

  return <button className="btn-close" onClick={() => closeModal()} />;
};

export default CloseA;
