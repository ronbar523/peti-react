import React from "react";
import { MenuItem } from "@mui/material";

const AccountSettingsButton = ({ setAccountSettings }) => {
  return (
    <MenuItem onClick={() => setAccountSettings(true)}>
      Account Settings
    </MenuItem>
  );
};

export default AccountSettingsButton;
