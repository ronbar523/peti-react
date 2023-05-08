import React, { useCallback } from "react";
import { sendFollow } from "../../../../../../../../../../Services/FollowServices/FollowEditService";
import { Button } from "@mui/material";
import { userStore } from "../../../../../../../../../../Store/User/UserStore";

const Follow = ({
  item,
  setDisabledButtons,
  setFollowLoading,
  setFollow,
  setFollowRequest,
  setBlockMe,
  setMyBlock,
  setUserDeleted,
  setFollower,
  inputRef,
}) => {
  const followFunction = useCallback(async () => {
    try {
      setDisabledButtons(true);
      setFollowLoading(true);
      await sendFollow(item._id).then((res) => {
        if (res.data.followFlag) {
          setFollow(true);
          userStore.user.arrFollowing.push(item._id);
        } else if (res.data.requestFollowFlag) {
          userStore.user.arrFollowingRequest.push(item._id);
          setFollowRequest(true);
        } else if (res.data.blockMeFlag) {
          userStore.user.arrBlockMe.push(item._id);
          setBlockMe(true);
          setFollower(false);
        } else if (res.data.blockUserFlag) {
          userStore.user.arrMyBlock.push(item._id);
          setMyBlock(true);
          setFollower(false);
        } else if (res.data.deleteFlag) {
          setUserDeleted(true);
          setFollower(false);
        }
      });

      inputRef.current.focus();
      setFollowLoading(false);
      setDisabledButtons(false);
    } catch {
      window.location.reload();
    }
  }, []);

  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "unset",
        fontSize: "13px",
      }}
      className="modalMyFollowersFollowButton"
      onClick={() => followFunction()}
    >
      Follow
    </Button>
  );
};

export default Follow;
