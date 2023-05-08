import React, { useState } from "react";

const ShowMore = ({ shortDescription, setExpanded }) => {
  const [enterMouse, setEnterMouse] = useState(false);

  return (
    <div>
      <p className="modalFullPostCommentGetDescription1">{shortDescription}</p>

      <button
        onClick={() => setExpanded(true)}
        onMouseEnter={() => setEnterMouse(true)}
        onMouseLeave={() => setEnterMouse(false)}
        className="modalFullPostCommentGetShowDescriptionButton1"
      >
        <p
          className={
            enterMouse
              ? "modalFullPostCommentGetShowDescriptionText1 modalFullPostCommentGetTextDescription1"
              : "modalFullPostCommentGetShowDescriptionText1"
          }
        >
          Read More
        </p>
      </button>
    </div>
  );
};

export default ShowMore;
