import React from "react";
import { commentStore } from "../../../../../Store/Comment/CommentStore";
import { Button } from "@mui/material";

const Cancel = ({ setModalDeleteComment }) => {

  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalDeleteComment(false)
    commentStore.postId = ""
    commentStore.comment = {};
    commentStore.commentArr = [];
  }

  return (
    <Button
      variant="outlined"
      sx={{
        float: "right",
        marginRight: "5px",
        marginTop: "7px",
        marginBottom: "9px",
        textTransform: "unset",
        height: "36px",
        width: 70,
      }}
      onClick={() => closeModal()}
    >
      Cancel
    </Button>
  );
};

export default Cancel;
