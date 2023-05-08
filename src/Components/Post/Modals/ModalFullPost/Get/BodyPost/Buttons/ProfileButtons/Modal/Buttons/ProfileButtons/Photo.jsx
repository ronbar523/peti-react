import React from "react";
import { Avatar, IconButton } from "@mui/material";

const Photo = ({ item }) => {
  const moveUserPage = () => {
    window.location = `/user_profile/${item.createdByName}`;
  };

  return (
    <IconButton
      onClick={() => moveUserPage()}
      className="modalUserInfoButtonPhoto"
    >
      <Avatar
        src={item.userProfile}
        sx={{
          width: "100%",
          height: "100%",
        }}
      />
    </IconButton>
  );
};

export default Photo;
