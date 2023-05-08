import React from "react";

const Close = ({ setModalDelete, inputRefDescription }) => {

  const closeModal = () => {
    inputRefDescription.current.focus();
    setModalDelete(false)
  }
  
  return <button className="btn-close" onClick={() => closeModal()} />;
};

export default Close;
