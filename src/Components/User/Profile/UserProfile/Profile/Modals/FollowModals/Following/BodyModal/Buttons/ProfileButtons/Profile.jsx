import { Avatar, CardHeader, Typography } from '@mui/material';
import React from 'react'


const Profile = ({item, userDeleted}) => {
  return (
    <button
      onClick={() => window.location.replace(`/user_profile/${item.userName}`)}
      className="modalMyFollowingProfileButton"
      disabled={userDeleted}
    >
      <CardHeader
        avatar={<Avatar src={item.photo} aria-label="recipe"  />}
        title={<Typography> {item.userName} </Typography>}
      />
    </button>
  );
};

export default Profile;
