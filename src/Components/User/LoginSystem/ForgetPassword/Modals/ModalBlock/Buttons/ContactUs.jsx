import React from "react";
import { Button } from "@mui/material";

const ContactUs = ({ setModalUserBlock }) => {
  
  const contactUs = () => {
    window.open("https://www.google.com", "_blank");
    document.body.style.overflow = "visible";
    setModalUserBlock(false);
  };
  return (
    <Button
      variant="outlined"
      sx={{
        float: "right",
        marginRight: "5px",
        marginTop: "7px",
        marginBottom: "9px",
        textTransform: "unset",
      }}
      onClick={() => contactUs()}
    >
      Contact Us
    </Button>
  );
};

export default ContactUs;
