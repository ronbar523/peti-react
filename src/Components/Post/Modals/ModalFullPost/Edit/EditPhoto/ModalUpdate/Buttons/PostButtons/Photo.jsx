import React from "react";
import { postStore } from "../../../../../../../../../Store/Post/PostSotre";
import { Button } from "@mui/material";

const Photo = () => {
  return (
    <Button
      className="modalFullPostModalEditPhotoPostPhotoButton"
      disabled={true}
    >
      <img
        variant="square"
        src={postStore.post.postPhoto}
        className="modalFullPostModalEditPhotoPostPhoto"
      />
    </Button>
  );
};

export default Photo;
