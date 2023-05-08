import React from 'react'
import { userStore } from "../../../../../../../../Store/User/UserStore";
import { MenuItem } from "@mui/material";

const AccountSettings = ({ setAccountSettings }) => {
  return (
    <>
      <MenuItem
        onClick={() => setAccountSettings(true)}
        disabled={!userStore.isLogin}
      >
        Account Settings
      </MenuItem>
    </>
  );
};

export default AccountSettings;
