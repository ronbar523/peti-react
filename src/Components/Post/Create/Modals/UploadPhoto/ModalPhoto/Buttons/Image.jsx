import React from "react";
import { CircularProgress } from "@mui/material";

const Image = ({ photo, uploaded, inputRef, isLoadingPhoto }) => {

  
  const clickOnPhoto = () => {
    inputRef.current.click();
  };

  return (
    <>
      {!isLoadingPhoto ? (
        <button
          className="modalPhotoPhotoPostBody"
          onClick={() => clickOnPhoto()}
          disabled={uploaded}
        >
          <img src={photo} className="modalPhotoPhotoPostImage" />
        </button>
      ) : (
        <CircularProgress sx={{ margin: "auto", mt: "155px", mb: "155px" }} />
      )}
    </>
  );
};

export default Image;
