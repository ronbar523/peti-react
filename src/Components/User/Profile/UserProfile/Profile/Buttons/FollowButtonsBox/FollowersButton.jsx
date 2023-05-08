import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const FollowersButton = ({
  user,
  countFollowers,
  setModalFollowers,
  follow,
  userBlockMe,
  iBlockUser,
}) => {
  
  const [showCountFollowers, setShowCountFollowers] = useState("");

  useEffect(() => {
    if (countFollowers >= 1000 && countFollowers < 1_000_000) {
      let k = countFollowers / 1000;
      let strArr = k.toString().split(".");
      setShowCountFollowers(strArr[0] + "K");
    } else if (countFollowers >= 1_000_000) {
      let m = countFollowers / 1_000_000;
      let strArr = m.toString().split(".");
      setShowCountFollowers(strArr[0] + "M");
    } else {
      setShowCountFollowers(countFollowers);
    }
  }, [countFollowers]);

 
  return (
    <>
      <Button
        className="userProfileButtonFollowers"
        sx={{
          textTransform: "unset",
          color: "black",
        }}
        onClick={() => setModalFollowers(true)}
        disabled={
          countFollowers === 0 ||
          showCountFollowers === 0 ||
          userBlockMe ||
          iBlockUser ||
          (!follow && !user.public)
        }
      >
        <Box component="span">
          <p className="userProfileCountBox">{showCountFollowers}</p>
          <p className="userProfileStringBox">Followers</p>
        </Box>
      </Button>
    </>
  );
};

export default FollowersButton;
