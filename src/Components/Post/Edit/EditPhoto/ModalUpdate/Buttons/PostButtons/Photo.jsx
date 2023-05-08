import React from "react";
import { postStore } from "../../../../../../../Store/Post/PostSotre";
import { Button } from "@mui/material";

const Photo = () => {
  return (
    <Button
      className="modalEditPhotoPostPhotoButton"
      disabled={true}
    >
      <img
        variant="square"
        src={postStore.post.postPhoto}
        className="modalEditPhotoPostPhoto"
      />
    </Button>
  );
};

export default Photo;
