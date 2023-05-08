import React from "react";

const Close = ({ setModalNotAvailable }) => {
  const closeModal = () => {
    window.location = "/";
    setModalNotAvailable(false);
    document.body.style.overflow = "visible";
  };

  return <button className="btn-close" onClick={() => closeModal()} />;
};

export default Close;
