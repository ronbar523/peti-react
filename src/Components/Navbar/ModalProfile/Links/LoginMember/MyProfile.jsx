import React from "react";
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const MyProfile = ({ setAnchorEl }) => {

  const movePage = () => {
    setAnchorEl(false)
    window.location = "/my_profile"
  }
  return (
    <MenuItem>
      <Link
        className="text-decoration-none text-dark"
        onClick={() => movePage()}
      >
        My Profile
      </Link>
    </MenuItem>
  );
};

export default MyProfile;
