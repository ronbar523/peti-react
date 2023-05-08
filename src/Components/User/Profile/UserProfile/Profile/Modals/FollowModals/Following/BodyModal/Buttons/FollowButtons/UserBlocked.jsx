import React, { useState } from "react";
import { Button } from "@mui/material";

const UserBlocked = ({ inputRef }) => {
  const [blockMeFollow, setBlockMeFollow] = useState(false);

  const closeModal = () => {
    inputRef.current.focus()
    setBlockMeFollow(true)
  }

  return (
    <>
      <Button
        variant="contained"
        sx={{
          textTransform: "unset",
          fontSize: "13px",
        }}
        className="modalFollowingFollowButton"
        onClick={() => closeModal()}
        disabled={blockMeFollow}
      >
        {!blockMeFollow ? "Follow" : "Blocked"}
      </Button>
    </>
  );
};

export default UserBlocked;
