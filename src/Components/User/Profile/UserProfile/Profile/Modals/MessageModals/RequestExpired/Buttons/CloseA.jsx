import React from "react";

const CloseA = ({ setModalRequestFollowersExpired }) => {
  const closeModal = () => {
    setModalRequestFollowersExpired(false);
    document.body.style.overflow = "visible";
  };
  return <button className="btn-close" onClick={() => closeModal()} />;
};

export default CloseA;
