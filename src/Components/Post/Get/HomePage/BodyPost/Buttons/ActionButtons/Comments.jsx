import React, { useState } from "react";
import { Button } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { postStore } from "../../../../../../../Store/Post/PostSotre";

const Comments = ({ item, countComments, setModalAllComments }) => {
  const [enterMouse, setEnterMouse] = useState(false);

  const openModalAllComments = () => {
    postStore.post = item;
    setModalAllComments(true)
  }

  return (
    <Button
      className="homePagePostCardCommentButton"
      sx={{
        textTransform: "unset",
        color: "black",
      }}
      onClick={() => openModalAllComments()}
      onMouseEnter={() => setEnterMouse(true)}
      onMouseLeave={() => setEnterMouse(false)}
    >
      <ChatBubbleOutlineIcon
        sx={{
          mt: "2px",
          fontSize: "22px",
        }}
        color="action"
      />
      <h5
        className={
          enterMouse
            ? "homePagePostCardButtonText homePagePostCardButtonTextDecoration"
            : "homePagePostCardButtonText"
        }
      >
        {countComments}
      </h5>
    </Button>
  );
};

export default Comments;
