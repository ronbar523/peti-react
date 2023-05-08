import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import { userStore } from "../../../../../../../../../../Store/User/UserStore";

const Photo = ({ item, modalEditProfilePhoto }) => {

  const [profilePohto, setProfilePohto] = useState(item.userProfile);

  const moveUserPage = () => {
    window.location = `/user_profile/${item.createdByName}`;
  };

  useEffect(() => {
    if (item.createdBy === userStore.user._id) {
    setProfilePohto(userStore.user.photo)
    item.userProfile = userStore.user.photo
    }
  }, [modalEditProfilePhoto])

  return (
    <IconButton
      onClick={() => moveUserPage()}
      className="modalUserInfoButtonPhoto"
    >
      <Avatar
        src={profilePohto}
        sx={{
          width: "100%",
          height: "100%",
        }}
      />
    </IconButton>
  );
};

export default Photo;
