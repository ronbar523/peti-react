import React, { useState } from "react";
import { Collapse } from "@mui/material";

const ShowLess = ({ description, expanded, setExpanded }) => {

  const [enterMouse, setEnterMouse] = useState(false);
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <p className="homePageCommentGetDescription2">
        {description}
      </p>
      <button
        onMouseEnter={() => setEnterMouse(true)}
        onMouseLeave={() => setEnterMouse(false)}
        onClick={() => setExpanded(false)}
        className="homePageCommentGetShowDescriptionButton2"
      >
        <p className={enterMouse ? "homePageCommentGetShowDescriptionText2 homePageCommentGetTextDescription2" : "homePageCommentGetShowDescriptionText2"}>Read Less</p>
      </button>
    </Collapse>
  );
};

export default ShowLess;
