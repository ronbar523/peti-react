import React from 'react'
import { Avatar, CardHeader, Typography } from "@mui/material";

const Profile = ({ item, userDeleted }) => {
  return (
    <>
      <button
        onClick={() =>
          window.location.replace(`/user_profile/${item.userName}`)
        }
        disabled={userDeleted}
        className="modalPostLikesProfileButton"
      >
        <CardHeader
          avatar={<Avatar src={item.photo} aria-label="recipe"  />}
          title={<Typography> {item.userName} </Typography>}
        />
      </button>
    </>
  );
};

export default Profile;
