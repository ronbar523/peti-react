import React, { useCallback } from "react";
import { Button } from "@mui/material";
import { removeFollow } from "../../../../../Services/FollowServices/FollowEditService";
import { userStore } from "../../../../../Store/User/UserStore";

const UnFollow = ({
  item,
  setFollowLoading,
  setFollow,
  setBlockMe,
  setUserDeleted,
}) => {
  const unFollowFunction = useCallback(async () => {
    try {
      setFollowLoading(true);
      await removeFollow(item._id).then((res) => {
        setFollow(res.data.followFlag);
        if (res.data.blockMeFlag) {
          setBlockMe(true);
          userStore.user.arrBlockMe.push(item.createdBy);
        } else if (res.data.deleteFlag) {
          setUserDeleted(true);
        }

        for (let x = 0; x < userStore.user.arrFollowing.length; x++) {
          if (userStore.user.arrFollowing[x] === item.createdBy) {
            userStore.user.arrFollowing.splice(x, 1);
            break;
          }
        }
      });

      setFollowLoading(false);
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
      className="SearchUserBodyFollowButton"
      onClick={() => unFollowFunction()}
    >
      Unfollow
    </Button>
  );
};

export default UnFollow;
