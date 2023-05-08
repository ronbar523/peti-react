import React, { useEffect, useState } from "react";
import { userStore } from "../../../../../../../../../../Store/User/UserStore";

const Name = ({ commentItem2, modalEditUserName, modalEditName }) => {
  const [userName, setUserName] = useState(commentItem2.createdByName);
  const [fullName, setFullName] = useState(commentItem2.createdByFullName);

  const moveUserPage = () => {
    window.location = `/user_profile/${commentItem2.createdByName}`;
  };

  useEffect(() => {
    if (commentItem2.createdBy === userStore.user._id) {
      setUserName(userStore.user.userName);
      commentItem2.createdByName = userStore.user.userName;
    }
  }, [modalEditUserName]);

  useEffect(() => {
    if (commentItem2.createdBy === userStore.user._id) {
      setFullName(userStore.user.fullName);
      commentItem2.createdByFullName = userStore.user.fullName;
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
