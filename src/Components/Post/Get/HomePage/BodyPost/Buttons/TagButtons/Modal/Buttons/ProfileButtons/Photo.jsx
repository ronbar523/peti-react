import React from "react";
import { Avatar, IconButton } from "@mui/material";

const Photo = ({ item2 }) => {
  const moveUserPage = () => {
    window.location = `/user_profile/${item2.userName}`;
  };
  return (
    <IconButton
      onClick={() => moveUserPage()}
      className="modalUserInfoButtonPhoto"
    >
      <Avatar
        src={item2.photo}
        sx={{
          width: "100%",
          height: "100%",
        }}
      />
    </IconButton>
  );
};

export default Photo;
