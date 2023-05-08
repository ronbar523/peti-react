import React, { useState } from "react";

const ShowMore = ({ item, setExpanded }) => {
  const [enterMouse, setEnterMouse] = useState(false);

  return (
    <div>
      <p className="homePagePostCardDescription">{item.shortDescription}</p>

      <button
        onClick={() => setExpanded(true)}
        onMouseEnter={() => setEnterMouse(true)}
        onMouseLeave={() => setEnterMouse(false)}
        className={
          enterMouse
            ? "homePagePostCardShowMoreDescriptionPost homePagePostCardButtonTextDecoration"
            : "homePagePostCardShowMoreDescriptionPost"
        }
      >
        Show More
      </button>
    </div>
  );
};

export default ShowMore;
