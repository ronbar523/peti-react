import React, { useState } from "react";

const ShowMore = ({ shortDescription, setExpanded }) => {
  const [enterMouse, setEnterMouse] = useState(false);

  return (
    <div>
      <p className="modalFullPostCommentGetDescription2">
        {shortDescription}
      </p>

      <button
        onMouseEnter={() => setEnterMouse(true)}
        onMouseLeave={() => setEnterMouse(false)}
        onClick={() => setExpanded(true)}
        className="modalFullPostCommentGetShowDescriptionButton2"
      >
        <p
          className={
            enterMouse
              ? "modalFullPostCommentGetShowDescriptionText2 modalFullPostCommentGetTextDescription2"
              : "modalFullPostCommentGetShowDescriptionText2"
          }
        >
          Read More
        </p>
      </button>
    </div>
  );
};

export default ShowMore;
