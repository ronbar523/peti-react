import React, { useState } from "react";
import { Collapse } from "@mui/material";

const ShowLess = ({ description, expanded, setExpanded }) => {
  const [enterMouse, setEnterMouse] = useState(false);

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <p className="homePageCommentGetDescription1">{description}</p>
      <button
        onMouseEnter={() => setEnterMouse(true)}
        onMouseLeave={() => setEnterMouse(false)}
        onClick={() => setExpanded(false)}
        className="homePageCommentGetShowDescriptionButton1"
      >
        <p
          className={
            enterMouse
              ? "homePageCommentGetShowDescriptionText1 homePageCommentGetTextDescription1"
              : "homePageCommentGetShowDescriptionText1"
          }
        >
          Read Less
        </p>
      </button>
    </Collapse>
  );
};

export default ShowLess;
