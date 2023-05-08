import React, { useState } from "react";
import { Button } from "@mui/material";

const UserBlocked = () => {
  const [blockMeFollow, setBlockMeFollow] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        sx={{
          textTransform: "unset",
          fontSize: "13px",
        }}
        className="SearchUserBodyFollowButton"
        onClick={() => setBlockMeFollow(true)}
        disabled={blockMeFollow}
      >
        {!blockMeFollow ? "Follow" : "Blocked"}
      </Button>
    </>
  );
};

export default UserBlocked;
