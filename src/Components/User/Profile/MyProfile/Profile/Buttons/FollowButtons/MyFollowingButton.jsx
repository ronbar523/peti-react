import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";


const MyFollowingButton = ({ countFollowing, setModalMyFollowing }) => {
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
    <>
      <Button
        sx={{
          textTransform: "unset",
          color: "black",
        }}
        className="myProfileButtonFollowing"
        onClick={() => setModalMyFollowing(true)}
        disabled={countFollowing === 0 || showCountFollowing === 0}
      >
        <Box component="span">
          <p className="myProfileCountBox">{showCountFollowing}</p>
          <p className="myProfileStringBox">Following</p>
        </Box>
      </Button>
    </>
  );
};

export default MyFollowingButton;
