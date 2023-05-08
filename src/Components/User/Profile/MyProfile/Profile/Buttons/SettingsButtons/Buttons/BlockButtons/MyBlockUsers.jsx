import React from "react";
import { MenuItem } from "@mui/material";

const MyBlockUsers = ({
  setModalMyBlock,
  countBlock,
  setAnchorEl,
}) => {


  const openModalMyBlock = () => {
    setAnchorEl(null)
    setModalMyBlock(true)
  }

  return (
    <>
      <MenuItem
        onClick={() => openModalMyBlock()}
        disabled={countBlock === 0}
      >
        Block List
      </MenuItem>
    </>
  );
};

export default MyBlockUsers;
