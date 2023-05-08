import React from "react";

const CloseA = ({}) => {
  const closeModal = () => {
    document.body.style.overflow = "visible";
    window.location = "/my_profile";
  };

  return <button className="btn-close" onClick={() => closeModal()} />;
};

export default CloseA;
