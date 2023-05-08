import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Close = ({ setAnchorEl, disabledClose }) => {
  return (
    <IconButton
      sx={{ mt: "-20px", width: 40, height: 40 }}
      onClick={() => setAnchorEl(false)}
      disabled={disabledClose}
    >
      <CloseIcon sx={{ fontSize: "20px" }} />
    </IconButton>
  );
};

export default Close;
