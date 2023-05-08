import React from "react";

const Name = ({ item }) => {
  const moveUserPage = () => {
    window.location = `/user_profile/${item.createdByName}`;
  };

  



  return (
    <div className="modalUsersInfoDivButtonsProfile">

    <button onClick={() => moveUserPage()} className="modalUsersInfoButtonProfile">
      <h5>{item.createdByName}</h5>
    </button>
    <button onClick={() => moveUserPage()} className="modalUsersInfoButtonProfile">
      <p>{item.createdByFullName}</p>
    </button>

    </div>
  );
};

export default Name;
