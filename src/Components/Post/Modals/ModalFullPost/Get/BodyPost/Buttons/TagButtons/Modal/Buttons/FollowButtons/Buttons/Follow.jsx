import React, { useCallback } from "react";
import { userStore } from "../../../../../../../../../../../../Store/User/UserStore";
import { sendFollow } from "../../../../../../../../../../../../Services/FollowServices/FollowEditService";
import { Button } from "@mui/material";

const Follow = ({
  item2,
  setDisabledClose,
  setFollowLoading,
  setFollow,
  setFollowRequest,
  setBlockMe,
  setMyBlock,
  setUserDeleted,
}) => {
  const followFunction = useCallback(async () => {
    try {
      setDisabledClose(true);
      setFollowLoading(true);
      await sendFollow(item2._id).then((res) => {
        if (res.data.followFlag) {
          setFollow(true);
          userStore.user.arrFollowing.unshift(item2._id);
        } else if (res.data.requestFollowFlag) {
          setFollowRequest(true);
          userStore.user.arrFollowingRequest.unshift(item2._id);
        } else if (res.data.blockMeFlag) {
          setBlockMe(true);
          userStore.user.arrBlockMe.unshift(item2._id);
        } else if (res.data.blockUserFlag) {
          userStore.user.arrMyBlock.unshift(item2._id);
          setMyBlock(res.data.blockUserFlag);
        } else if (res.data.deleteFlag) {
          setUserDeleted(true);
        }
      });

      setFollowLoading(false);
      setDisabledClose(false);
    } catch {
      window.location.reload();
    }
  }, []);


  return (
    <Button
      variant="contained"
      className="modalUserInfoFollowButton"
      sx={{
        textTransform: "unset",
        fontSize: "13px",
        width: "100px",
        height: "35px"
      }}
      onClick={() => followFunction()}
    >
      Follow
    </Button>
  );
};

export default Follow;
