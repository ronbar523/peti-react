import React, { useEffect } from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

const Description = ({ description, setDescription, inputRefDescription }) => {
  useEffect(() => {
    inputRefDescription.current.focus();
  }, []);

  const descriptionText = (value) => {
    try {
      if (value === " " || value === "\n") {
        setDescription("");
      } else {
        setDescription(value);
      }
    } catch {}
  };

  return (
    <Box className="modalDescriptionPhotoPostBoxBody">
      <TextField
        className="modalDescriptionPhotoPostInput"
        id="outlined-multiline-static"
        label="Description"
        multiline
        placeholder="Write something"
        rows={11}
        inputProps={{ maxLength: 1000 }}
        value={description}
        onChange={(e) => descriptionText(e.target.value)}
        inputRef={inputRefDescription}
      />
    </Box>
  );
};

export default Description;
