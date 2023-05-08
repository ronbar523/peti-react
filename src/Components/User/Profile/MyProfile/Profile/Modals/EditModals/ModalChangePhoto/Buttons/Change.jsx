import React from "react";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Change = ({ inputRef, isLoadingPhoto, defaultPhoto }) => {
  const clickOnPhoto = () => {
    inputRef.current.click();
  };

  return (
    <>
      {!isLoadingPhoto ? (
        <Button
          variant="outlined"
          sx={{
            marginRight: "15px",
            width: 75,
            marginBottom: "15px",
            textTransform: "unset",
            float: "right",
            width: 79,
          }}
          onClick={() => clickOnPhoto(false)}
        >
          {defaultPhoto ? "Upload" : "Change"}
        </Button>
      ) : (
        <LoadingButton
          variant="outlined"
          sx={{
            marginRight: "15px",
            width: 75,
            marginBottom: "15px",
            float: "right",
            width: 79,
          }}
          loading={isLoadingPhoto}
          disabled
        ></LoadingButton>
      )}
    </>
  );
};

export default Change;
