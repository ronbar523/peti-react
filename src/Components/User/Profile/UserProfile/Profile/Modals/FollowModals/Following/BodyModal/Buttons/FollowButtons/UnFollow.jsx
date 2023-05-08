import React, { useCallback } from "react";
import { removeFollow } from "../../../../../../../../../../../Services/FollowServices/FollowEditService";
import { Button } from "@mui/material";
import { userStore } from "../../../../../../../../../../../Store/User/UserStore";

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
        setFollow(false);
        if (res.data.blockMeFlag) {
          setBlockMe(true);
          for (let x = 0; x < userStore.user.arrBlockMe.length; x++) {
            if (userStore.user.arrBlockMe[x] === item._id) {
              userStore.user.arrBlockMe.splice(x, 1);
              break;
            }
          }
        } else if (res.data.deleteFlag) {
          setUserDeleted(true);
        }
      });

      for (let x = 0; x < userStore.user.arrFollowing.length; x++) {
        if (userStore.user.arrFollowing[x] === item._id) {
          userStore.user.arrFollowing.splice(x, 1);
          break;
        }
      }
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
      className="modalFollowingFollowButton"
      onClick={() => unFollowFunction()}
    >
      Unfollow
    </Button>
  );
};

export default UnFollow;
