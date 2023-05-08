import React, { useState } from "react";
import { Collapse } from "@mui/material";

const ShowLess = ({ item, setExpanded, expanded }) => {
  const [enterMouse, setEnterMouse] = useState(false);

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <p className="modalFullPostGetCardDescription">{item.description}</p>
      <button
        onClick={() => setExpanded(false)}
        onMouseEnter={() => setEnterMouse(true)}
        onMouseLeave={() => setEnterMouse(false)}
        className={
          enterMouse
            ? "modalFullPostGetCardShowMoreDescriptionPost modalFullPostGetCardButtonTextDecoration"
            : "modalFullPostGetCardShowMoreDescriptionPost"
        }
      >
        Show Less
      </button>
    </Collapse>
  );
};

export default ShowLess;
