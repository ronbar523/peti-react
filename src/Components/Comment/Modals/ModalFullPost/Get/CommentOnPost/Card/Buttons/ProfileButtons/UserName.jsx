import React, { useState } from "react";

const UserName = ({ commentItem }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const movePage = () => {
    window.location = `/user_profile/${commentItem.createdByName}`;
  };

  const enterMouse = () => {
    if (commentItem.createdByName !== "User Not Available") {
      setMouseEnter(true);
    }
  };

  return (
    <button
      className={
        !mouseEnter
          ? "modalFullPostCommentGetUserNameButton1"
          : "modalFullPostCommentGetUserNameButton1 modalFullPostCommentGetTextDescription1"
      }
      onClick={() => movePage()}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      disabled={commentItem.createdByName === "User Not Available"}
    >
      <h6 className="modalFullPostCommentGetUserNameText1">
        {commentItem.createdByName}
      </h6>
    </button>
  );
};

export default UserName;
