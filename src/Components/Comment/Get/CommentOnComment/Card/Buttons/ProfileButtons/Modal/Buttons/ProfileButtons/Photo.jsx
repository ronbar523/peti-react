import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import { userStore } from "../../../../../../../../../../Store/User/UserStore";

const Photo = ({ commentItem2, modalEditProfilePhoto }) => {

  const [userPhoto, setUserPhoto] = useState(commentItem2.userProfile);
  
  const moveUserPage = () => {
    window.location = `/user_profile/${commentItem2.createdByName}`;
  };

  useEffect(() => {
    if(commentItem2.createdBy === userStore.user._id){
      setUserPhoto(userStore.user.userName)
      commentItem2.userName = userStore.user.userName
    }
   }, [modalEditProfilePhoto])

  return (
    <IconButton
      onClick={() => moveUserPage()}
      className="modalUserInfoButtonPhoto"
    >
      <Avatar
        src={userPhoto}
        sx={{
          width: "100%",
          height: "100%",
        }}
      />
    </IconButton>
  );
};

export default Photo;
