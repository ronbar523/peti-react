import React, { useState } from "react";
import { Button } from "@mui/material";

const UserBlocked = ({ inputRef }) => {
  const [blockMeFollow, setBlockMeFollow] = useState(false);

  const click = () => {
    setBlockMeFollow(true)
    inputRef.current.focus();
  }

  return (
    <>
      <Button
        variant="contained"
        sx={{
          textTransform: "unset",
          fontSize: "13px",
        }}
        className="modalMyFollowersFollowButton"
        onClick={() => click()}
        disabled={blockMeFollow}
      >
        {!blockMeFollow ? "Follow" : "Blocked"}
      </Button>
    </>
  );
};

export default UserBlocked;
