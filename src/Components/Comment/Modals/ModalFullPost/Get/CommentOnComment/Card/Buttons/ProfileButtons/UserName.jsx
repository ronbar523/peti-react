import React, { useState } from "react";

const UserName = ({ commentItem2 }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const movePage = () => {
    window.location = `/user_profile/${commentItem2.createdByName}`;
  };

  const enterMouse = () => {
    if (commentItem2.createdByName !== "User Not Available") {
      setMouseEnter(true);
    }
  };

  return (
    <button
      className={
        !mouseEnter
          ? "modalFullPostCommentGetUserNameButton2"
          : "modalFullPostCommentGetUserNameButton2 modalFullPostCommentGetTextDescription1"
      }
      onClick={() => movePage()}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      disabled={commentItem2.createdByName === "User Not Available"}

    >
      <h6 className="modalFullPostCommentGetUserNameText2">
        {commentItem2.createdByName}
      </h6>
    </button>
  );
};

export default UserName;
