import { Avatar, IconButton } from "@mui/material";
import React from "react";

const PhotoLogin = ({ handleProfileMenuOpen, userPhoto }) => {
  return (
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-controls="primary-search-account-menu"
      aria-haspopup="true"
      onClick={(event) => {
        handleProfileMenuOpen(event);
      }}
      color="inherit"
    >
      <Avatar src={userPhoto} />
    </IconButton>
  );
};

export default PhotoLogin;
