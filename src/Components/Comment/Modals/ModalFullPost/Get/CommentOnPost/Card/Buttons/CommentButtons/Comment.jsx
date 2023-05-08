import React, { useState } from "react";
import { userStore } from "../../../../../../../../../Store/User/UserStore";

const Comment = ({ setOpenInputOnComment }) => {
  const [enterMouse, setEnterMouse] = useState(false);

  return (
    <button
      disabled={!userStore.isLogin}
      onMouseEnter={() => setEnterMouse(true)}
      onMouseLeave={() => setEnterMouse(false)}
      className={
        enterMouse
          ? "modalFullPostCommentGetCommentButton1 modalFullPostCommentGetTextDescription1"
          : "modalFullPostCommentGetCommentButton1"
      }
      onClick={() => {
        setOpenInputOnComment(true);
      }}
    >
      <p className="modalFullPostCommentGetText1">Comment</p>
    </button>
  );
};

export default Comment;
