import React from "react";
import { Button } from "@mui/material";

const Login = () => {
  return (
    <Button
      sx={{
        height: 35,
        mr: "10px",
        marginTop: "5px",
        textTransform: "unset",
      }}
      variant="outlined"
      onClick={() => window.location.replace("/forget_password")}
    >
      Login
    </Button>
  );
};

export default Login;
