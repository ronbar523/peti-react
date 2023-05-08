import React from 'react'

const Close = ({setModalDeleteMyUser}) => {
  const closeModal = () => {
    setModalDeleteMyUser(false);
    document.body.style.overflow = "visible";
  };

  return <button className="btn-close" onClick={() => closeModal()} />;
};

export default Close;
