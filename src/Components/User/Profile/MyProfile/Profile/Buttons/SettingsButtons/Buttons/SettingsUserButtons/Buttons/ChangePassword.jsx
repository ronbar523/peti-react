import React from "react";
import { MenuItem } from "@mui/material";

const ChangePassword = ({setModalChangePassword, setAccountSettings, setAnchorEl}) => {
  const openModalChangePassword = () => {
    setModalChangePassword(true);
    setAccountSettings(false);
    setAnchorEl(null);
  };

  return (
    <>
      <MenuItem onClick={() => openModalChangePassword()}>
        Change Password
      </MenuItem>
    </>
  );
};

export default ChangePassword;
