import React, { useEffect, useState } from "react";
import { userStore } from "../../../../../../../../../../Store/User/UserStore";

const Name = ({ commentItem, modalEditUserName, modalEditName }) => {
  const [userName, setUserName] = useState(commentItem.createdByName);
  const [fullName, setFullName] = useState(commentItem.createdByFullName);

  const moveUserPage = () => {
    window.location = `/user_profile/${commentItem.createdByName}`;
  };

  useEffect(() => {
    if (commentItem.createdBy === userStore.user._id) {
      setUserName(userStore.user.userName)
      commentItem.createdByName = userStore.user.userName
    }
  }, [modalEditUserName]);

  useEffect(() => {
    if (commentItem.createdBy === userStore.user._id) {
      setFullName(userStore.user.fullName)
      commentItem.createdByFullName = userStore.user.fullName

    }
  }, [modalEditName]);

  return (
    <div className="modalUsersInfoDivButtonsProfile">
      <button
        onClick={() => moveUserPage()}
        className="modalUsersInfoButtonProfile"
      >
        <h5>{userName}</h5>
      </button>
      <button
        onClick={() => moveUserPage()}
        className="modalUsersInfoButtonProfile"
      >
        <p>{fullName}</p>
      </button>
    </div>
  );
};

export default Name;
