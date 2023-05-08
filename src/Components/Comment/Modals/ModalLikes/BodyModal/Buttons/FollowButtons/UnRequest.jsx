import React, { useCallback } from "react";
import { userStore } from "../../../../../../../Store/User/UserStore";
import { removeFollowRequest } from "../../../../../../../Services/FollowServices/FollowEditService";
import { Button } from "@mui/material";

const UnRequest = ({
  item,
  setDisabledButtons,
  setFollowLoading,
  setFollowRequest,
  setBlockMe,
  setUserDeleted,
  inputRef,
}) => {
  const removeFollowRequestFunction = useCallback(async () => {
    try {
      setDisabledButtons(true);
      setFollowLoading(true);
      await removeFollowRequest(item._id).then((res) => {
        setFollowRequest(res.data.followFlag);
        setBlockMe(res.data.blockMeFlag);
        setUserDeleted(res.data.deleteFlag);

        if (res.data.blockMeFlag) {
          userStore.user.arrBlockMe.push(item._id);
        }

        for (let x = 0; x < userStore.user.arrFollowingRequest.length; x++) {
          if (userStore.user.arrFollowingRequest[x] === item._id) {
            userStore.user.arrFollowingRequest.splice(x, 1);
            break;
          }
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
      variant="outlined"
      sx={{
        textTransform: "unset",
        fontSize: "13px",
      }}
      className="modalCommentLikesFollowButton"
      onClick={() => removeFollowRequestFunction()}
    >
      Requested
    </Button>
  );
};

export default UnRequest;
