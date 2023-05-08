import React from "react";
import { Button } from "@mui/material";

const Photo = ({ photo, setModalPhoto }) => {
  return (
    <Button
      
      className="modalUploadPhotoPostPhotoButton"
      onClick={() => setModalPhoto(true)}
    >
      <img
        variant="square"
        src={photo}
        className="modalUploadPhotoPostPhoto"
      />
    </Button>
  );
};

export default Photo;
