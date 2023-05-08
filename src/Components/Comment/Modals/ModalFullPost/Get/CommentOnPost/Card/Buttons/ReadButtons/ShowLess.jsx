import React, { useState } from "react";
import { Collapse } from "@mui/material";

const ShowLess = ({ description, expanded, setExpanded }) => {
  const [enterMouse, setEnterMouse] = useState(false);

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <p className="modalFullPostCommentGetDescription1">{description}</p>
      <button
        onMouseEnter={() => setEnterMouse(true)}
        onMouseLeave={() => setEnterMouse(false)}
        onClick={() => setExpanded(false)}
        className="modalFullPostCommentGetShowDescriptionButton1"
      >
        <p
          className={
            enterMouse
              ? "modalFullPostCommentGetShowDescriptionText1 modalFullPostCommentGetTextDescription1"
              : "modalFullPostCommentGetShowDescriptionText1"
          }
        >
          Read Less
        </p>
      </button>
    </Collapse>
  );
};

export default ShowLess;
