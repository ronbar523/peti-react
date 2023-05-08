import React, { useEffect, useState } from "react";
import { userStore } from "../../../../../../../Store/User/UserStore";

const UserName = ({ commentItem, modalEditUserName }) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [userName, setuserName] = useState(commentItem.createdByName);

  const movePage = () => {
    window.location = `/user_profile/${commentItem.createdByName}`;
  };

  const enterMouse = () => {
    if (commentItem.createdByName !== "User Not Available") {
      setMouseEnter(true);
    }
  };

  useEffect(() => {
    if(commentItem.createdBy === userStore.user._id){
      setuserName(userStore.user.userName)
      commentItem.createdByName = userStore.user.userName
    }

  }, [modalEditUserName])


  return (
    <button
      className={
        !mouseEnter
          ? "homePageCommentGetUserNameButton1"
          : "homePageCommentGetUserNameButton1 homePageCommentGetTextDescription1"
      }
      onClick={() => movePage()}
      onMouseEnter={() => enterMouse(true)}
      onMouseLeave={() => setMouseEnter(false)}
      disabled={commentItem.createdByName === "User Not Available"}
    >
      <h6 className="homePageCommentGetUserNameText1">
        {userName}
      </h6>
    </button>
  );
};

export default UserName;
