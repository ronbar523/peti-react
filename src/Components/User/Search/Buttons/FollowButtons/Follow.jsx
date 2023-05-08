import React, { useCallback } from "react";
import { Button } from "@mui/material";
import { sendFollow } from "../../../../../Services/FollowServices/FollowEditService";
import { userStore } from "../../../../../Store/User/UserStore";

const Follow = ({
  item,
  setFollowLoading,
  setFollow,
  setFollowRequest,
  setBlockMe,
  setMyBlock,
  setUserDeleted,
}) => {
  const followFunction = useCallback(async () => {
    try {
      setFollowLoading(true);
      await sendFollow(item._id).then((res) => {

        if (res.data.followFlag) {
          setFollow(true);
          userStore.user.arrFollowing.unshift(item.createdBy);
        } else if (res.data.requestFollowFlag) {
          setFollowRequest(true);
          userStore.user.arrFollowingRequest.unshift(item.createdBy);
        } else if (res.data.blockMeFlag) {
          setBlockMe(true);
          userStore.user.arrBlockMe.unshift(item.createdBy);
        } else if (res.data.blockUserFlag) {
          userStore.user.arrMyBlock.unshift(item.createdBy);
          setMyBlock(res.data.blockUserFlag);
        } else if (res.data.deleteFlag) {
          setUserDeleted(true);
        }
 
      });

      setFollowLoading(false);
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
      className="SearchUserBodyFollowButton"
      onClick={() => followFunction()}
    >
      Follow
    </Button>
  );
};

export default Follow;
