import React from "react";

const CloseA = ({ setModalShowPhoto }) => {
  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalShowPhoto(false);
  };
  return <button className="btn-close" onClick={() => closeModal()} />;
};

export default CloseA;
