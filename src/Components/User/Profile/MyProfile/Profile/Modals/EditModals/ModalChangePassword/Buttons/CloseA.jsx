import React from "react";

const CloseA = ({ setModalChangePassword }) => {
  const closeModal = () => {
    setModalChangePassword(false);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      <button className="btn-close" onClick={() => closeModal()} />
    </>
  );
};

export default CloseA;
