import React from "react";
import { MenuItem } from "@mui/material";

const DeleteAccount = ({
  setModalDeleteMyUser,
  setAccountSettings,
  setAnchorEl,
}) => {
  const openModalDeleteMyUser = () => {
    setModalDeleteMyUser(true);
    setAccountSettings(false);
    setAnchorEl(null);
  };
  return (
    <>
      <MenuItem onClick={() => openModalDeleteMyUser()}>
        Delete Account
      </MenuItem>
    </>
  );
};

export default DeleteAccount;
