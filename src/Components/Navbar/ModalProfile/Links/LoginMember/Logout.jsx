import React from "react";
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const Logout = ({ setAnchorEl }) => {
  return (
    <MenuItem>
      <Link
        to={`/logout`}
        className="text-decoration-none text-dark"
        onClick={() => setAnchorEl(false)}
      >
        Logout
      </Link>
    </MenuItem>
  );
};

export default Logout;
