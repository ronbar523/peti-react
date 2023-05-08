import React, { useEffect } from "react";
import { TextField } from "@mui/material";

const Description = ({ description, setDescription, setShowBtnSend, inputRef }) => {
  
  useEffect(() => {
    if (description === " " || description === "\n") {
      setDescription("");
      setShowBtnSend(false);
    } else {
      if (description[0] === " ") {
        let str = description.substr(1);
        setDescription(str);
        setShowBtnSend(true);
      } else {
        setShowBtnSend(true);
      }
    }
    if (description === "") {
      setShowBtnSend(false);
    }
  }, [description]);

  return (
    <TextField
      className="homePageCommentCreateInput1"
      sx={{
        mt: "15px",
        mb: "5px",
        ml: "3px",
      }}
      placeholder="Say something..."
      id="outlined-multiline-static"
      multiline
      variant="standard"
      value={description}
      maxRows={6}
      onChange={(e) => setDescription(e.target.value)}
      inputRef={inputRef}
    />
  );
};

export default Description;
