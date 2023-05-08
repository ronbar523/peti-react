import React, { useEffect, useState } from "react";
import { userStore } from "../../../../../../../../../../Store/User/UserStore";

const Name = ({ item, modalEditName, modalEditUserName }) => {


  const [userName, setUserName] = useState(item.createdByName);
  const [fullName, setFullName] = useState(item.createdByFullName);

  const moveUserPage = () => {
    window.location = `/user_profile/${item.createdByName}`;
  };

  useEffect(() => {
    if (item.createdBy === userStore.user._id) {
      setUserName(userStore.user.userName)
      item.createdByName = userStore.user.userName
      }

  }, [modalEditUserName])

  useEffect(() => {
    if (item.createdBy === userStore.user._id) {
    console.log(3223)
    setFullName(userStore.user.fullName)
    item.createdByFullName = userStore.user.fullName
    }
  }, [modalEditName])
  



  return (
    <div className="modalUsersInfoDivButtonsProfile">

    <button onClick={() => moveUserPage()} className="modalUsersInfoButtonProfile">
      <h5>{userName}</h5>
    </button>
    <button onClick={() => moveUserPage()} className="modalUsersInfoButtonProfile">
      <p>{fullName}</p>
    </button>

    </div>
  );
};

export default Name;
