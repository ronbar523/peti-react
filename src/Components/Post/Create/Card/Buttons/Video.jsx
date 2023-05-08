import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";

const Video = () => {
  return (
    <Button
      className="cardCreatePostButtons"
      color="primary"
      sx={{
        textTransform: "unset",
      }}
      disabled={true}
    >
      <Box component="span" >
        Video
        <VideoCameraBackIcon color="primary" sx={{ ml: 1 }} />
      </Box>
    </Button>
  );
};

export default Video;
