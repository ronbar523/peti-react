import { Avatar, IconButton } from "@mui/material";
import React from "react";

const PhotoUnLogin = ({ handleProfileMenuOpen }) => {
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
      <Avatar />
    </IconButton>
  );
};

export default PhotoUnLogin;
