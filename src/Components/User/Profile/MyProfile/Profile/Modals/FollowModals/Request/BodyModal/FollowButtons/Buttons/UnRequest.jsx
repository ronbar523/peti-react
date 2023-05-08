import React, { useCallback } from "react";
import { removeFollowRequest } from "../../../../../../../../../../../Services/FollowServices/FollowEditService";
import { Button } from "@mui/material";
import { userStore } from "../../../../../../../../../../../Store/User/UserStore";

const UnRequest = ({
  item,
  setFollowRequest,
  setBlockMe,
  setUserDeleted,
  setFollowLoading,
  setDisabledButtons,
  inputRef
}) => {
  const removeFollowRequestFunction = useCallback(async () => {
    try {
      setDisabledButtons(true);
      setFollowLoading(true);
      await removeFollowRequest(item._id).then((res) => {
        setFollowRequest(false);
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

      for (let x = 0; x < userStore.user.arrFollowingRequest.length; x++) {
        if (userStore.user.arrFollowingRequest[x] === item._id) {
          userStore.user.arrFollowingRequest.splice(x, 1);
          break;
        }
      }
      setFollowLoading(false);
      setDisabledButtons(false);
      inputRef.current.focus();
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
      className="modalMyRequestFollowButton"
      onClick={() => removeFollowRequestFunction()}
    >
      Requested
    </Button>
  );
};

export default UnRequest;
