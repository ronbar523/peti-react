import React from "react";

const Close = ({setModalEditBio}) => {
  const closeModal = () => {
    setModalEditBio(false);
    document.body.style.overflow = "visible";
  };

  return <button className="btn-close" onClick={() => closeModal()} />;
};

export default Close;
