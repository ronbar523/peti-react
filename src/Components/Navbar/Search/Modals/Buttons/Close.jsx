import React from "react";

const Close = ({ setText, setModalSearchUsers, setDiscoverSearchInput }) => {
  const closeModal = () => {
    setText("");
    setModalSearchUsers(false);
    setDiscoverSearchInput(true);
  };

  return (
    <button
      className="btn-close modalSearchUsersCloseButton navbarCoverIcon"
      onClick={() => closeModal()}
    ></button>
  );
};

export default Close;
