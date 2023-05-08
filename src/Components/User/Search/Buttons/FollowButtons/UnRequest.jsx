import React, { useCallback } from "react";
import { Button } from "@mui/material";
import { removeFollowRequest } from "../../../../../Services/FollowServices/FollowEditService";
import { userStore } from "../../../../../Store/User/UserStore";

const UnRequest = ({
  item,
  setFollowLoading,
  setFollowRequest,
  setBlockMe,
  setUserDeleted,
}) => {
  const removeFollowRequestFunction = useCallback(async () => {
    try {
      setFollowLoading(true);
      await removeFollowRequest(item._id).then((res) => {
        setFollowRequest(false);
        if (res.data.blockMeFlag) {
          setBlockMe(true);
          userStore.user.arrBlockMe.push(item.createdBy);
        } else if (res.data.deleteFlag) {
          setUserDeleted(true);
        }

        for (let x = 0; x < userStore.user.arrFollowingRequest.length; x++) {
          if (
            userStore.user.arrFollowingRequest[x] === item.createdBy
          ) {
            userStore.user.arrFollowingRequest.splice(x, 1);
            break;
          }
          setFollowLoading(false);
        }
      });
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
      onClick={() => removeFollowRequestFunction()}
    >
      Requested
    </Button>
  );
};

export default UnRequest;
