import React from "react";
import { Button } from "@mui/material";

const Delete = ({ setModalCancelEditPost, setModalEditPhotoPost, setOpacityZero }) => {

  const deleteAll = () => {
    document.body.style.overflow = "visible";
    setOpacityZero(false)
    setModalCancelEditPost(false)
    setModalEditPhotoPost(false)
    
  }
  return (
    <Button
      variant="outlined"
      color="error"
      sx={{
        float: "right",
        marginRight: "5px",
        marginTop: "7px",
        marginBottom: "9px",
        textTransform: "unset",
        height: "36px",
      }}
      onClick={() => deleteAll()}
    >
      Yes
    </Button>
  );
};

export default Delete;
