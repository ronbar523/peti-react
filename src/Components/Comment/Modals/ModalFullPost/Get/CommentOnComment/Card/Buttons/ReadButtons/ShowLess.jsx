import React, { useState } from "react";
import { Collapse } from "@mui/material";

const ShowLess = ({ description, expanded, setExpanded }) => {

  const [enterMouse, setEnterMouse] = useState(false);
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <p className="modalFullPostCommentGetDescription2">
        {description}
      </p>
      <button
        onMouseEnter={() => setEnterMouse(true)}
        onMouseLeave={() => setEnterMouse(false)}
        onClick={() => setExpanded(false)}
        className="modalFullPostCommentGetShowDescriptionButton2"
      >
        <p className={enterMouse ? "modalFullPostCommentGetShowDescriptionText2 modalFullPostCommentGetTextDescription2" : "modalFullPostCommentGetShowDescriptionText2"}>Read Less</p>
      </button>
    </Collapse>
  );
};

export default ShowLess;
