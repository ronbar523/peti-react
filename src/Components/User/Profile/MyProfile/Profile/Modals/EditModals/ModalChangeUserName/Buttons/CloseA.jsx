import React from "react";

const CloseA = ({setModalEditUserName}) => {
  const closeModal = () => {
    setModalEditUserName(false);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      <button className="btn-close" onClick={() => closeModal()} />
    </>
  );
};

export default CloseA;
