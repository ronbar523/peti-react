import React from "react";
import { Avatar, IconButton } from "@mui/material";

const Photo = ({ commentItem2 }) => {
  const moveUserPage = () => {
    window.location = `/user_profile/${commentItem2.createdByName}`;
  };

  return (
    <IconButton
      onClick={() => moveUserPage()}
      className="modalUserInfoButtonPhoto"
    >
      <Avatar
        src={commentItem2.userProfile}
        sx={{
          width: "100%",
          height: "100%",
        }}
      />
    </IconButton>
  );
};

export default Photo;
