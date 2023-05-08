import React from "react";
import { Button } from "@mui/material";

const Delete = ({ setModalDeletePost, setModalCreatePhotoPost }) => {

  const deleteAll = () => {
    document.body.style.overflow = "visible";
    setModalDeletePost(false)
    setModalCreatePhotoPost(false)
    
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
      Delete
    </Button>
  );
};

export default Delete;
