import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const MyFollowersButton = ({ countFollowers, setModalMyFollowers }) => {
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
        className="myProfileButtonFollowers"
        sx={{
          textTransform: "unset",
          color: "black",
        }}
        onClick={() => setModalMyFollowers(true)}
        disabled={countFollowers === 0 || showCountFollowers === 0}
      >
        <Box component="span">
          <p className="myProfileCountBox">{showCountFollowers}</p>
          <p className="myProfileStringBox">Followers</p>
        </Box>
      </Button>
    </>
  );
};

export default MyFollowersButton;
