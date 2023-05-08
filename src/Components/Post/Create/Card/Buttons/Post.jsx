import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import ModeIcon from "@mui/icons-material/Mode";

const Post = () => {
  return (
    <Button
      color="secondary"
      className="cardCreatePostButtons"
      sx={{
        textTransform: "unset",
      }}
      disabled={true}
    >
      <Box component="span">
        Post
        <ModeIcon color="secondary" sx={{ ml: 1, fontSize: "19px" }} />
      </Box>
    </Button>
  );
};

export default Post;
