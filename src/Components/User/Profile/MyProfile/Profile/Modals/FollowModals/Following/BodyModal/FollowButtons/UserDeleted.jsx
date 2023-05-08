import React from "react";
import { Button } from "@mui/material";

const UserDeleted = () => {
  return (
    <Button
      variant="contained"
      sx={{
        fontSize: "13px",
        textTransform: "unset",
      }}
      className="modalMyFollowingFollowButton"
      disabled
    >
      Deleted
    </Button>
  );
};

export default UserDeleted;
