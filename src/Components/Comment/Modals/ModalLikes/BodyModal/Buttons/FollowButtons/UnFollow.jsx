import React, { useCallback } from "react";
import { userStore } from "../../../../../../../Store/User/UserStore";
import { removeFollow } from "../../../../../../../Services/FollowServices/FollowEditService";
import { Button } from "@mui/material";

const UnFollow = ({
  item,
  setDisabledButtons,
  setFollowLoading,
  setFollow,
  setBlockMe,
  setUserDeleted,
  inputRef
}) => {

  const unFollowFunction = useCallback(async () => {
    try {
      setDisabledButtons(true);
      setFollowLoading(true);
      await removeFollow(item._id).then((res) => {
        setFollow(res.data.followFlag);
        setBlockMe(res.data.blockMeFlag);
        setUserDeleted(res.data.deleteFlag);

        if (res.data.blockMeFlag) {
          userStore.user.arrBlockMe.push(item._id);
        }

        for (let x = 0; x < userStore.user.arrFollowing.length; x++) {
          if (userStore.user.arrFollowing[x] === item._id) {
            userStore.user.arrFollowing.splice(x, 1);
            break;
          }
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
      variant="outlined"
      sx={{
        textTransform: "unset",
        fontSize: "13px",
      }}
      className="modalCommentLikesFollowButton"
      onClick={() => unFollowFunction()}
    >
      Unfollow
    </Button>
  );
};

export default UnFollow;
