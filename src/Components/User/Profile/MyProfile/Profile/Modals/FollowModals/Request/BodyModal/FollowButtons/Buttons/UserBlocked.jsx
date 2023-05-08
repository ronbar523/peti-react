import { Button } from "@mui/material";
import React, { useState } from "react";

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
          fontSize: "13px",
          textTransform: "unset",
        }}
        className="modalMyRequestFollowButton"
        onClick={() => click()}
        disabled={blockMeFollow}
      >
        {!blockMeFollow ? "Follow" : "Blocked"}
      </Button>
    </>
  );
};

export default UserBlocked;
