import React from "react";
import { Button } from "@mui/material";

const Delete = ({ setPhoto, uploaded, setUploaded, setIsLoadingPhoto }) => {
  
  const deletePhoto = () => {
    try {
      setIsLoadingPhoto(true);
      setPhoto(
        "https://t4.ftcdn.net/jpg/02/83/72/41/360_F_283724163_kIWm6DfeFN0zhm8Pc0xelROcxxbAiEFI.jpg"
      );
      setUploaded(false);
      setIsLoadingPhoto(false);
    } catch {
      window.location.reload();
    }
  };

  return (
    <Button
      variant="outlined"
      color="error"
      sx={{
        marginLeft: "15px",
        width: 75,
        marginBottom: "15px",
        textTransform: "unset",
        float: "left",
      }}
      disabled={!uploaded}
      onClick={() => deletePhoto()}
    >
      Delete
    </Button>
  );
};

export default Delete;
