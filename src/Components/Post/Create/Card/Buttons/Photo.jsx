import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Photo = ({ setModalCreatePhotoPost }) => {
  return (
    <Button
      color="success"
      className="cardCreatePostButtons"
      sx={{
        textTransform: "unset",
      }}
      onClick={() => setModalCreatePhotoPost(true)}
    >
      <Box component="span" >
        Photo
        <CameraAltIcon color="success" sx={{ ml: 1 }} />
      </Box>
    </Button>
  );
};

export default Photo;
