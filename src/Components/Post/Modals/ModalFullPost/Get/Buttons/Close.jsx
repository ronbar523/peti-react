import React from 'react'

const Close = ({ setModalAllComments }) => {

  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalAllComments(false)
  }
  return (
    <button className="btn-close" onClick={() => closeModal()} />
  );
};

export default Close;
