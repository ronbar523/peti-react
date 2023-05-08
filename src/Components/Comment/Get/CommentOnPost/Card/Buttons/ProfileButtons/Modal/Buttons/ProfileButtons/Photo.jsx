import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import { userStore } from "../../../../../../../../../../Store/User/UserStore";

const Photo = ({ commentItem, modalEditProfilePhoto }) => {

  const [userPhoto, setUserPhoto] = useState(commentItem.userProfile)
  
  const moveUserPage = () => {
    window.location = `/user_profile/${commentItem.createdByName}`;
  };

  useEffect(() => {
    if(commentItem.createdBy === userStore.user._id){
      setUserPhoto(userStore.user.photo)
      commentItem.userProfile = userStore.user.photo
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
