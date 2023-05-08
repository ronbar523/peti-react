import React, { useState } from "react";
import { Button } from "@mui/material";

const UserBlocked = () => {
  const [blockMeFollow, setBlockMeFollow] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        className="modalUserInfoFollowButton"
        sx={{
          textTransform: "unset",
          fontSize: "13px",
          width: "100px",
          height: "35px",
        }}
        onClick={() => setBlockMeFollow(true)}
        disabled={blockMeFollow}
      >
        {!blockMeFollow ? "Follow" : "Blocked"}
      </Button>
    </>
  );
};

export default UserBlocked;
