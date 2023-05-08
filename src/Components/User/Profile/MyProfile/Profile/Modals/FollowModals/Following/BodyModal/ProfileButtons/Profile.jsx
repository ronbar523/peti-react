import React from "react";
import { Avatar, CardHeader, Typography } from "@mui/material";

const Profile = ({ item, userDeleted }) => {
  return (
    <button
      disabled={userDeleted}
      onClick={() => window.location.replace(`/user_profile/${item.userName}`)}
      className="modalMyFollowingProfileButton"
    >
      <CardHeader
        avatar={<Avatar src={item.photo} aria-label="recipe" />}
        title={<Typography> {item.userName} </Typography>}
      />
    </button>
  );
};

export default Profile;
