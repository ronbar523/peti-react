import React from 'react'

const CloseA = ({setModalUserBlock}) => {
  const closeModal = () => {
    window.location = "/";
    setModalUserBlock(false);
    document.body.style.overflow = "visible";
  };

  return <button className="btn-close" onClick={() => closeModal()} />;
};

export default CloseA;
