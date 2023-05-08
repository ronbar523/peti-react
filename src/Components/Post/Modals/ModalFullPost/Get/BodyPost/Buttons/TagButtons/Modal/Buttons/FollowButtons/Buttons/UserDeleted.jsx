import React from "react";
import { Button } from "@mui/material";

const UserDeleted = () => {
  return (
    <Button
      variant="contained"
      className="modalUserInfoFollowButton"
      sx={{
        textTransform: "unset",
        fontSize: "13px",
        width: "100px",
        height: "35px"
      }}
      disabled
    >
      Deleted
    </Button>
  );
};

export default UserDeleted;
