import React from "react";

const Name = ({ item2 }) => {
  const moveUserPage = () => {
    window.location = `/user_profile/${item2.userName}`;
  };
  return (
    <div className="modalUsersInfoDivButtonsProfile">
      <button
        onClick={() => moveUserPage()}
        className="modalUsersInfoButtonProfile"
      >
        <h5>{item2.userName}</h5>
      </button>
      <button
        onClick={() => moveUserPage()}
        className="modalUsersInfoButtonProfile"
      >
        <p>{item2.fullName}</p>
      </button>
    </div>
  );
};

export default Name;
