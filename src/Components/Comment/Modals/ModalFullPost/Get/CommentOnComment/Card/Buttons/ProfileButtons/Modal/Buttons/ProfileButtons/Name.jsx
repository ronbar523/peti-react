import React from "react";

const Name = ({ commentItem2 }) => {
  const moveUserPage = () => {
    window.location = `/user_profile/${commentItem2.createdByName}`;
  };

  return (
    <div className="modalUsersInfoDivButtonsProfile">
      <button
        onClick={() => moveUserPage()}
        className="modalUsersInfoButtonProfile"
      >
        <h5>{commentItem2.createdByName}</h5>
      </button>
      <button
        onClick={() => moveUserPage()}
        className="modalUsersInfoButtonProfile"
      >
        <p>{commentItem2.createdByFullName}</p>
      </button>
    </div>
  );
};

export default Name;
