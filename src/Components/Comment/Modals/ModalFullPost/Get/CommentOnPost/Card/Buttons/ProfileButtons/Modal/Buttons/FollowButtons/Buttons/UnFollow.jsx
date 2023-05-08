import React, { useCallback } from "react";
import { userStore } from "../../../../../../../../../../../../../Store/User/UserStore";
import { removeFollow } from "../../../../../../../../../../../../../Services/FollowServices/FollowEditService";
import { Button } from "@mui/material";

const UnFollow = ({
  commentItem,
  setDisabledClose,
  setFollowLoading,
  setFollow,
  setBlockMe,
  setUserDeleted,
  user,
  setStatusFollow,
}) => {
  const unFollowFunction = useCallback(async () => {
    try {
      setDisabledClose(true);
      setFollowLoading(true);
      await removeFollow(commentItem.createdBy).then((res) => {
        setFollow(false);

        if (res.data.blockMeFlag) {
          setBlockMe(true);
          userStore.user.arrBlockMe.push(commentItem.createdBy);
        } else if (res.data.deleteFlag) {
          setUserDeleted(true);
        }

        for (let x = 0; x < userStore.user.arrFollowing.length; x++) {
          if (userStore.user.arrFollowing[x] === commentItem.createdBy) {
            userStore.user.arrFollowing.splice(x, 1);
            break;
          }
        }
      });

      if (user !== undefined) {
        if (user._id === commentItem.createdBy) {
          setStatusFollow(true);
        }
      }

      setFollowLoading(false);
      setDisabledClose(false);
    } catch {
      window.location.reload();
    }
  }, []);

  return (
    <Button
      variant="outlined"
      className="modalUserInfoFollowButton"
      sx={{
        textTransform: "unset",
        fontSize: "13px",
        width: "100px",
        height: "35px",
      }}
      onClick={() => unFollowFunction()}
    >
      Unfollow
    </Button>
  );
};

export default UnFollow;
