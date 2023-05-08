import React from "react";

const CloseA = ({setModalChnagePublic}) => {
  const closeModal = () => {
    setModalChnagePublic(false);
    document.body.style.overflow = "visible";
  };

  return <button className="btn-close" onClick={() => closeModal()} />;
};

export default CloseA;
