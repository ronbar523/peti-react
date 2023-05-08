import React from "react";

const Name = ({ commentItem }) => {
  const moveUserPage = () => {
    window.location = `/user_profile/${commentItem.createdByName}`;
  };

  return (
    <div className="modalUsersInfoDivButtonsProfile">
      <button
        onClick={() => moveUserPage()}
        className="modalUsersInfoButtonProfile"
      >
        <h5>{commentItem.createdByName}</h5>
      </button>
      <button
        onClick={() => moveUserPage()}
        className="modalUsersInfoButtonProfile"
      >
        <p>{commentItem.createdByFullName}</p>
      </button>
    </div>
  );
};

export default Name;
