import React, { useEffect, useState } from "react";
import { userStore } from "../../../../../../../Store/User/UserStore";

const UserName = ({ commentItem2, modalEditUserName }) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [userName, setUserName] = useState(commentItem2.createdByName);

  const movePage = () => {
    window.location = `/user_profile/${commentItem2.createdByName}`;
  };

 const enterMouse = () => {
  if(commentItem2.createdByName !== "User Not Available"){
    setMouseEnter(true)
  }
 }

 useEffect(() => {
  if(commentItem2.createdBy === userStore.user._id){
    setUserName(userStore.user.userName)
    commentItem2.createdByName = userStore.user.userName
  }
 }, [modalEditUserName])

  return (
    <button
      className={
        !mouseEnter 
          ? "homePageCommentGetUserNameButton2"
          : "homePageCommentGetUserNameButton2 homePageCommentGetTextDescription1"
      }
      onClick={() => movePage()}
      onMouseEnter={() => enterMouse()}
      onMouseLeave={() => setMouseEnter(false)}
      disabled={commentItem2.createdByName === "User Not Available"}
    >
      <h6 className="homePageCommentGetUserNameText2">
        {userName}
      </h6>
    </button>
  );
};

export default UserName;
