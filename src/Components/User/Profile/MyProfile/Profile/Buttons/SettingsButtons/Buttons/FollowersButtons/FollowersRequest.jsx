import React from "react";
import { MenuItem } from "@mui/material";

const FollowersRequest = ({
  setModalMyRequestFollowers,
  setAccountSettings,
  setAnchorEl,
  countFollowersRequest,
}) => {

  const openModalMyRequestFollowers = () => {
    setAnchorEl(null);
    setAccountSettings(false);
    setModalMyRequestFollowers(true);
  };

  return (
    <>
      <MenuItem
        onClick={() => openModalMyRequestFollowers()}
        disabled={countFollowersRequest === 0}
      >
        Follow Request
      </MenuItem>
    </>
  );
};

export default FollowersRequest;
