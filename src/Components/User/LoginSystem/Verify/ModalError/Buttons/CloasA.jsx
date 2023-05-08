import React from "react";

const CloseA = () => {
  const closeModal = () => {
    window.location = "/";
  };

  return <button className="btn-close" onClick={() => closeModal()} />;
};

export default CloseA;
