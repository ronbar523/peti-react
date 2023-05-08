import React, { useEffect } from "react";
import { TextField } from "@mui/material";

const Description = ({
  description,
  setDescription,
  setShowBtnSend,
  inputRef,
}) => {
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

  useEffect(() => {
    inputRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <TextField
      className="modalFullPostCommentCreateInput1"
      sx={{
        mt: "15px",
        mb: "5px",
        ml: "3px",
      }}
      placeholder="Say something..."
      id="outlined-multiline-static"
      multiline
      variant="standard"
      inputRef={inputRef}
      value={description}
      maxRows={6}
      onChange={(e) => setDescription(e.target.value)}
    />
  );
};

export default Description;
