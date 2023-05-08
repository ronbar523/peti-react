import { MenuItem } from "@mui/material";
import React from "react";

const Edit = ({ setEditComment }) => {
  return <MenuItem onClick={() => setEditComment(true)}>Edit</MenuItem>;
};

export default Edit;
