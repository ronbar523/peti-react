import React from 'react'
import { Button } from "@mui/material";

const ForgetPassword = () => {
    return ( 
        <Button
        sx={{
          height: 35,
          mr: "10px",
          marginTop: "15px",
          textTransform: "unset",
        }}
        variant="outlined"
        
        onClick={() => window.location.replace("/forget_password")}
      >
        Forget Password
      </Button>
     );
}
 
export default ForgetPassword;