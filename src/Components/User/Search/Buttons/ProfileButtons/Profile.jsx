import React from 'react'
import { Avatar, CardHeader } from "@mui/material";

const Profile = ({ item }) => {
  return (
    <button
      className="SearchUserBodyProfileButton"
      onClick={() => window.location.replace(`/user_profile/${item.userName}`)}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ width: 56, height: 56 }}
            src={item.photo}
            aria-label="recipe"
            />
        }
        title={item.fullName}
        subheader={"(" + item.userName + ")"}
      />
    </button>
  );
};

export default Profile;
