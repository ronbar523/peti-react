import React, { useEffect, useRef } from "react";
import { IconButton, Input, InputAdornment } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Description = ({
  description,
  setDescription,
  setOpenInputOnComment,
}) => {

  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    if (description === " " || description === "\n") {
      setDescription("");
    } else if (description[0] === " ") {
      let str = description.substr(1);
      setDescription(str);
    }
  }, [description]);

  return (
    <Input
      className="homePageCommentCreateInput2"
      multiline
      variant="standard"
      maxRows={6}
      onChange={(e) => setDescription(e.target.value)}
      inputRef={inputRef}
      endAdornment={
        <InputAdornment position="end">
          <IconButton onClick={() => setOpenInputOnComment(false)}>
            <CloseIcon color="error" />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default Description;
