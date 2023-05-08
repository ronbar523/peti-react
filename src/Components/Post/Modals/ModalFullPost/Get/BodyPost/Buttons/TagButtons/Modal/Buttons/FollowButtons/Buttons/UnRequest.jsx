import React, { useCallback } from "react";
import { userStore } from "../../../../../../../../../../../../Store/User/UserStore";
import { removeFollowRequest } from "../../../../../../../../../../../../Services/FollowServices/FollowEditService";
import { Button } from "@mui/material";

const UnRequest = ({
  item2,
  setDisabledClose,
  setFollowLoading,
  setFollowRequest,
  setBlockMe,
  setUserDeleted,
}) => {

  const removeFollowRequestFunction = useCallback(async () => {
    try {
      setDisabledClose(true);
      setFollowLoading(true);
      await removeFollowRequest(item2._id).then((res) => {
        setFollowRequest(res.data.followFlag);
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

        for (let x = 0; x < userStore.user.arrFollowingRequest.length; x++) {
          if (userStore.user.arrFollowingRequest[x] === item2._id) {
            userStore.user.arrFollowingRequest.splice(x, 1);
            break;
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
