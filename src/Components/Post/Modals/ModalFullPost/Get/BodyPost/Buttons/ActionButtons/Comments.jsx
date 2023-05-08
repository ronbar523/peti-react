import React, { useState } from "react";
import { Button } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Comments = ({ countComments, inputRef }) => {
  const [enterMouse, setEnterMouse] = useState(false);

  const createCommentRef = () => {
    inputRef.current.focus()
  }
  return (
    <Button
      className="modalFullPostGetCardCommentButton"
      sx={{
        textTransform: "unset",
        color: "black",
      }}
      onClick={() => createCommentRef()}
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
            ? "modalFullPostGetCardButtonText modalFullPostGetCardButtonTextDecoration"
            : "modalFullPostGetCardButtonText"
        }
      >
        {countComments}
      </h5>
    </Button>
  );
};

export default Comments;
