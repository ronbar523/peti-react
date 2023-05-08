import React from "react";
import { commentStore } from "../../../../../Store/Comment/CommentStore";
import { Button } from "@mui/material";

const Continue = ({ setModalCommentDeletedInCreate }) => {

  const continueFunction = () => {
    commentStore.continue = true;
    document.body.style.overflow = "visible";
    setModalCommentDeletedInCreate(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        sx={{
          float: "right",
          marginRight: "5px",
          marginTop: "7px",
          marginBottom: "9px",
          textTransform: "unset",
          height: "36px",
        }}
        onClick={() => continueFunction()}
      >
        Continue
      </Button>
    </>
  );
};

export default Continue;
