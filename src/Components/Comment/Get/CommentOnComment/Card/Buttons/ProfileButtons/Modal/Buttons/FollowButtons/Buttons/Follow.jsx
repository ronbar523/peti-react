import React, { useCallback } from "react";
import { userStore } from "../../../../../../../../../../../Store/User/UserStore";
import { sendFollow } from "../../../../../../../../../../../Services/FollowServices/FollowEditService";
import { Button } from "@mui/material";

const Follow = ({
  commentItem2,
  setDisabledClose,
  setFollowLoading,
  setFollow,
  setFollowRequest,
  setBlockMe,
  setMyBlock,
  setUserDeleted,
  user,
  setStatusFollow,
}) => {
  const followFunction = useCallback(async () => {
    try {
      setDisabledClose(true);
      setFollowLoading(true);
      await sendFollow(commentItem2.createdBy).then((res) => {
        if (res.data.followFlag) {
          setFollow(true);
          userStore.user.arrFollowing.unshift(commentItem2.createdBy);
        } else if (res.data.requestFollowFlag) {
          setFollowRequest(true);
          userStore.user.arrFollowingRequest.unshift(commentItem2.createdBy);
        } else if (res.data.blockMeFlag) {
          setBlockMe(true);
          userStore.user.arrBlockMe.unshift(commentItem2.createdBy);
        } else if (res.data.blockUserFlag) {
          userStore.user.arrMyBlock.unshift(commentItem2.createdBy);
          setMyBlock(res.data.blockUserFlag);
        } else if (res.data.deleteFlag) {
          setUserDeleted(true);
        }

        if (user !== undefined) {
          if (user._id === commentItem2.createdBy) {
            setStatusFollow(true);
          }
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
        height: "35px",
      }}
      onClick={() => followFunction()}
    >
      Follow
    </Button>
  );
};

export default Follow;
