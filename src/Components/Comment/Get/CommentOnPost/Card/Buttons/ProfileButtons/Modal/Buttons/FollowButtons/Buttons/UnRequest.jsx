import React, { useCallback } from "react";
import { userStore } from "../../../../../../../../../../../Store/User/UserStore";
import { removeFollowRequest } from "../../../../../../../../../../../Services/FollowServices/FollowEditService";
import { Button } from "@mui/material";

const UnRequest = ({
  commentItem,
  setDisabledClose,
  setFollowLoading,
  setFollowRequest,
  setBlockMe,
  setUserDeleted,
  user,
  setStatusFollow,
}) => {

  const removeFollowRequestFunction = useCallback(async () => {
    try {
      setDisabledClose(true);
      setFollowLoading(true);
      await removeFollowRequest(commentItem.createdBy).then((res) => {
        setFollowRequest(false);

        if (res.data.blockMeFlag) {
          setBlockMe(true);
          userStore.user.arrBlockMe.push(commentItem.createdBy);
        } else if (res.data.deleteFlag) {
          setUserDeleted(true);
        }

        for (let x = 0; x < userStore.user.arrFollowingRequest.length; x++) {
          if (userStore.user.arrFollowingRequest[x] === commentItem.createdBy) {
            userStore.user.arrFollowingRequest.splice(x, 1);
            break;
          }
        }

        if (user !== undefined) {
          if (user._id === commentItem.createdBy) {
            setStatusFollow(true);
          }
        }
      });
      
      setFollowLoading(false);
      setDisabledClose(false);
    } catch  {
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
      onClick={() => removeFollowRequestFunction()}
    >
      Requested
    </Button>
  );
};

export default UnRequest;
