import React, { useCallback } from "react";
import { removeFollow } from "../../../../../../../../../../../../Services/FollowServices/FollowEditService";
import { Button } from "@mui/material";
import { userStore } from "../../../../../../../../../../../../Store/User/UserStore";

const UnFollow = ({
  item2,
  setDisabledClose,
  setFollowLoading,
  setFollow,
  setBlockMe,
  setUserDeleted,
}) => {
  const unFollowFunction = useCallback(async () => {
    try {
      setDisabledClose(true);
      setFollowLoading(true);
      await removeFollow(item2._id).then((res) => {
        setFollow(res.data.followFlag);
        setBlockMe(res.data.blockMeFlag);
        setUserDeleted(res.data.deleteFlag);

        if (res.data.blockMeFlag) {
          for (let x = 0; x < userStore.user.arrBlockMe.length; x++) {
            if (userStore.user.arrBlockMe[x] === item2._id) {
              userStore.user.arrBlockMe.splice(x, 1);
              break;
            }
          }
        }

        for (let x = 0; x < userStore.user.arrFollowing.length; x++) {
          if (userStore.user.arrFollowing[x] === item2._id) {
            userStore.user.arrFollowing.splice(x, 1);
            break;
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
      variant="outlined"
      className="modalUserInfoFollowButton"
      sx={{
        textTransform: "unset",
        fontSize: "13px",
        width: "100px",
        height: "35px"
      }}
      onClick={() => unFollowFunction()}
    >
      Unfollow
    </Button>
  );
};

export default UnFollow;
