import React, { useState } from "react";

const ShowMore = ({ shortDescription, setExpanded }) => {
  const [enterMouse, setEnterMouse] = useState(false);

  return (
    <div>
      <p className="homePageCommentGetDescription1">{shortDescription}</p>

      <button
        onClick={() => setExpanded(true)}
        onMouseEnter={() => setEnterMouse(true)}
        onMouseLeave={() => setEnterMouse(false)}
        className="homePageCommentGetShowDescriptionButton1"
      >
        <p
          className={
            enterMouse
              ? "homePageCommentGetShowDescriptionText1 homePageCommentGetTextDescription1"
              : "homePageCommentGetShowDescriptionText1"
          }
        >
          Read More
        </p>
      </button>
    </div>
  );
};

export default ShowMore;
