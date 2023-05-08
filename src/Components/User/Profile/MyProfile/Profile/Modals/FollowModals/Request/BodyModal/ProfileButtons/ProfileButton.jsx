import React from "react";
import { Avatar, CardHeader, Typography } from "@mui/material";

const ProfileButton = ({ item, userDeleted }) => {
  return (
    <button
      disabled={userDeleted}
      onClick={() => window.location.replace(`/user_profile/${item.userName}`)}
      className="modalMyRequestProfileButton"
    >
      <CardHeader
        avatar={<Avatar src={item.photo} aria-label="recipe" />}
        title={<Typography> {item.userName} </Typography>}
      />
    </button>
  );
};

export default ProfileButton;
