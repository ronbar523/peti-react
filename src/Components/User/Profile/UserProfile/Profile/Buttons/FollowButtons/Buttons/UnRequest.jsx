import React, { useCallback } from "react";
import { removeFollowRequest } from "../../../../../../../../Services/FollowServices/FollowEditService";
import { IconButton } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { userStore } from "../../../../../../../../Store/User/UserStore";

const UnRequest = ({
  user,
  setFollowLoading,
  setFollowRequest,
  setUserBlockMe,
  setModalUserDeleted,
}) => {
  const unFollowRequestFunction = useCallback(async () => {
    try {
      setFollowLoading(true);
      await removeFollowRequest(user._id).then((res) => {
        setFollowRequest(false);
        if (res.data.blockMeFlag) {
          setUserBlockMe(true);
          for (let x = 0; x < userStore.user.arrBlockMe.length; x++) {
            if (userStore.user.arrBlockMe[x] === user._id) {
              userStore.user.arrBlockMe.splice(x, 1);
              break;
            }
          }
        } else if (res.data.deleteFlag) {
          setModalUserDeleted(true);
        }
      });

      for (let x = 0; x < userStore.user.arrFollowingRequest.length; x++) {
        if (userStore.user.arrFollowingRequest[x] === user._id) {
          userStore.user.arrFollowingRequest.splice(x, 1);
          break;
        }
      }

      setFollowLoading(false);
    } catch {
      window.location.reload();
    }
  }, []);

  return (
    <IconButton
      sx={{
        ml: "25px",
        color: "red",
        width: "33px",
        height: "33px",
        mt: "2px",
      }}
      onClick={() => unFollowRequestFunction()}
    >
      <PersonOutlineOutlinedIcon sx={{ fontSize: "24px", mt: "-3px" }} />
    </IconButton>
  );
};

export default UnRequest;
