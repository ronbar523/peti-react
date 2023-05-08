import React from "react";
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const Register = ({ setAnchorEl }) => {

  const movePage = () => {
    setAnchorEl(false)
    window.location = "/register"
  }


  return (
    <MenuItem>
      <Link  className="text-decoration-none text-dark" onClick={() => movePage()}>
        Register
      </Link>
    </MenuItem>
  );
};

export default Register;
