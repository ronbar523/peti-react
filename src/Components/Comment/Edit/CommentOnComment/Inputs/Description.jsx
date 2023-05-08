import React, { useEffect, useRef } from "react";
import { IconButton, Input, InputAdornment } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Description = ({ descriptionUpdate, setDescriptionUpdate, setEditComment }) => {
    
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Input
      className="homePageCommentEditInput2"
      multiline
      variant="standard"
      maxRows={6}
      value={descriptionUpdate}
      onChange={(e) => setDescriptionUpdate(e.target.value)}
      inputRef={inputRef}
      endAdornment={
        <InputAdornment position="end">
          <IconButton onClick={() => setEditComment(false)}>
            <CloseIcon color="error" />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default Description;
