import React from "react";
import { Box, Button } from "@mui/material";

const MyPostButton = ({ totalPosts }) => {
  return (
    <Button
      className="myProfileButtonPosts"
      sx={{
        textTransform: "unset",
        color: "black",
      }}
      disabled={totalPosts === 0}
    >
      <Box component="span">
        <p className="myProfileCountBox">{totalPosts} </p>
        <p className="myProfileStringBox">Posts</p>
      </Box>
    </Button>
  );
};

export default MyPostButton;
