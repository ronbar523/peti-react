import React from "react";
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const Login = ({ setAnchorEl }) => {

  const movePage = () => {
    setAnchorEl(false)
    window.location = "/login"
  }

  return (
    <MenuItem>
      <Link  className="text-decoration-none text-dark" onClick={() => movePage()}>
        Login
      </Link>
    </MenuItem>
  );
};

export default Login;
