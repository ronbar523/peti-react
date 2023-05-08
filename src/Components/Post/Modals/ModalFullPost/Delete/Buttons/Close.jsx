import React from "react";

const Close = ({ setModalDeletePostModal }) => {

  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalDeletePostModal(false)
  }

  return (
    <button className="btn-close" onClick={() => closeModal()} />
  );
};

export default Close;
