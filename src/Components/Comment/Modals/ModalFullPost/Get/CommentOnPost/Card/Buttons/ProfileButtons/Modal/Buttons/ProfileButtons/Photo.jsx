import React from "react";
import { Avatar, IconButton } from "@mui/material";

const Photo = ({ commentItem }) => {
  const moveUserPage = () => {
    window.location = `/user_profile/${commentItem.createdByName}`;
  };

  return (
    <IconButton
      onClick={() => moveUserPage()}
      className="modalUserInfoButtonPhoto"
    >
      <Avatar
        src={commentItem.userProfile}
        sx={{
          width: "100%",
          height: "100%",
        }}
      />
    </IconButton>
  );
};

export default Photo;
