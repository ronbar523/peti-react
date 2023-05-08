import React, { useCallback } from "react";
import { IconButton } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { removeFollow } from "../../../../../../../../Services/FollowServices/FollowEditService";
import { userStore } from "../../../../../../../../Store/User/UserStore";

const UnFollowMatch = ({
  user,
  setFollow,
  setUserBlockMe,
  setModalUserDeleted,
  countFollowers,
  setCountFollowers,
  setFollowLoading,
}) => {

  const unFollowFunction = useCallback(async () => {
    try {
      setFollowLoading(true);
      await removeFollow(user._id).then((res) => {
        setFollow(false);
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

      for (let x = 0; x < userStore.user.arrFollowing.length; x++) {
        if (userStore.user.arrFollowing[x] === user._id) {
          userStore.user.arrFollowing.splice(x, 1);
          break;
        }
      }
      if (countFollowers > 0) {
        setCountFollowers(countFollowers - 1);
      }
    } catch {
      window.location.reload()
    }

    setFollowLoading(false);
  }, [countFollowers]);

  return (
    <IconButton
      sx={{
        ml: "25px",
        color: "green",
        width: "33px",
        height: "33px",
        mt: "2px",
      }}
      onClick={() => unFollowFunction()}
    >
      <PersonOutlineOutlinedIcon sx={{ fontSize: "24px", mt: "-3px" }} />
    </IconButton>
  );
};

export default UnFollowMatch;
