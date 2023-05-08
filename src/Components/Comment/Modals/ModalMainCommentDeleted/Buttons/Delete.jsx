import React from "react";
import { Button } from "@mui/material";
import { commentStore } from "../../../../../Store/Comment/CommentStore";


const Delete = ({ setModalCommentDeletedInCreate }) => {

  const closeModal = () => {
    document.body.style.overflow = "visible";
    commentStore.comment = {}
    setModalCommentDeletedInCreate(false);
  };

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
      onClick={() => closeModal()}
    >
      Delete
    </Button>
  );
};

export default Delete;
