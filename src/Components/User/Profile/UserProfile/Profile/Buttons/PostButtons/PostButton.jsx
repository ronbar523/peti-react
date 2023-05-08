import { Box, Button } from "@mui/material";
import React from "react";

const PostButton = ({ userBlockMe, iBlockUser, follow, user, totalPosts }) => {
  return (
    <Button
      className="userProfileButtonPosts"
      sx={{
        textTransform: "unset",
        color: "black",
      }}
      disabled={userBlockMe || iBlockUser || (!follow && !user.public)}
    >
      <Box component="span">
        <p className="userProfileCountBox">{totalPosts} </p>
        <p className="userProfileStringBox">Posts</p>
      </Box>
    </Button>
  );
};

export default PostButton;
