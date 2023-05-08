import React, { useState } from "react";

const ShowMore = ({ shortDescription, setExpanded }) => {
  const [enterMouse, setEnterMouse] = useState(false);

  return (
    <div>
      <p className="homePageCommentGetDescription2">
        {shortDescription}
      </p>

      <button
        onMouseEnter={() => setEnterMouse(true)}
        onMouseLeave={() => setEnterMouse(false)}
        onClick={() => setExpanded(true)}
        className="homePageCommentGetShowDescriptionButton2"
      >
        <p
          className={
            enterMouse
              ? "homePageCommentGetShowDescriptionText2 homePageCommentGetTextDescription2"
              : "homePageCommentGetShowDescriptionText2"
          }
        >
          Read More
        </p>
      </button>
    </div>
  );
};

export default ShowMore;
