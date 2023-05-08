import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const FollowingButton = ({
  user,
  countFollowing,
  setModalFollowing,
  userBlockMe,
  iBlockUser,
  follow,
}) => {
  const [showCountFollowing, setShowCountFollowing] = useState("");

  useEffect(() => {
    if (countFollowing >= 1000 && countFollowing < 1_000_000) {
      let k = countFollowing / 1000;
      let strArr = k.toString().split(".");
      setShowCountFollowing(strArr[0] + "K");
    } else if (countFollowing >= 1_000_000) {
      let m = countFollowing / 1_000_000;
      let strArr = m.toString().split(".");
      setShowCountFollowing(strArr[0] + "M");
    } else {
      setShowCountFollowing(countFollowing);
    }
  }, [countFollowing]);

  
  return (
    <Button
      sx={{
        textTransform: "unset",
        color: "black",
      }}
      className="userProfileButtonFollowing"
      onClick={() => setModalFollowing(true)}
      disabled={
        countFollowing === 0 ||
        showCountFollowing === 0 ||
        userBlockMe ||
        iBlockUser ||
        (!follow && !user.public) 
      }
    >
      <Box component="span">
        <p className="userProfileCountBox">{showCountFollowing}</p>
        <p className="userProfileStringBox">Following</p>
      </Box>
    </Button>
  );
};

export default FollowingButton;
