import React, { useCallback } from "react";
import { userStore } from "../../../../../../../Store/User/UserStore";
import { sendFollow } from "../../../../../../../Services/FollowServices/FollowEditService";
import { Button } from "@mui/material";

const Follow = ({
  item,
  setDisabledButtons,
  setFollowLoading,
  setFollow,
  setFollowRequest,
  setBlockMe,
  setMyBlock,
  setUserDeleted,
  inputRef
}) => {
  const followFunction = useCallback(async () => {
    try {
      setDisabledButtons(true);
      setFollowLoading(true);
      await sendFollow(item._id).then((res) => {
        setFollow(res.data.followFlag);
        setFollowRequest(res.data.requestFollowFlag);
        setBlockMe(res.data.blockMeFlag);
        setMyBlock(res.data.blockUserFlag);
        setUserDeleted(res.data.deleteFlag);

        if (res.data.blockMeFlag) {
          userStore.user.arrBlockMe.push(item._id);
        } else if (res.data.requestFollowFlag) {
          userStore.user.arrFollowingRequest.push(item._id);
        } else if (res.data.followFlag) {
          userStore.user.arrFollowing.push(item._id);
        }
      });

      inputRef.current.focus()
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
      className="modalPostLikesFollowButton"
      onClick={() => followFunction()}
    >
      Follow
    </Button>
  );
};

export default Follow;
