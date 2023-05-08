import React from "react";

const Close = ({ setModalDeletePost }) => {

  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalDeletePost(false)
  }

  return (
    <button className="btn-close" onClick={() => closeModal()} />
  );
};

export default Close;
