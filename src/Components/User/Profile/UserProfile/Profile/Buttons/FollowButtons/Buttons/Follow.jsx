import React, { useCallback } from "react";
import { userStore } from "../../../../../../../../Store/User/UserStore";
import { sendFollow } from "../../../../../../../../Services/FollowServices/FollowEditService";
import { IconButton } from "@mui/material";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

const Follow = ({
  user,
  setFollow,
  setModalUserDeleted,
  setFollowRequest,
  userBlockMe,
  setUserBlockMe,
  iBlockUser,
  setIBlockUser,
  setFollowLoading,
  countFollowers,
  setCountFollowers,
  setUserPublic
}) => {
  const followFunction = useCallback(async () => {
    try {
      setFollowLoading(true);
      await sendFollow(user._id).then((res) => {
        if (res.data.followFlag) {
          setFollow(true);
          setUserPublic(true)
          setCountFollowers(countFollowers + 1);
          userStore.user.arrFollowing.push(user._id);
        } else if (res.data.requestFollowFlag) {
          userStore.user.arrFollowingRequest.push(user._id);
          
          setUserPublic(false)
          setFollowRequest(true);
        } else if (res.data.blockMeFlag) {
          userStore.user.arrBlockMe.push(user._id);
          setUserBlockMe(true);
        } else if (res.data.blockUserFlag) {
          userStore.user.arrMyBlock.push(user._id);
          setIBlockUser(true);
        } else if (res.data.deleteFlag) {
          setModalUserDeleted(true);
        }
      });
    } catch {
      window.location.reload()
    }
    setFollowLoading(false);
  }, [countFollowers]);

  return (
    <IconButton
      sx={{
        ml: "25px",
        color: "black",
        width: "33px",
        height: "33px",
        mt: "2px",
      }}
      onClick={() => followFunction()}
      disabled={!userStore.isLogin || userBlockMe || iBlockUser}
    >
      <PersonAddOutlinedIcon sx={{ fontSize: "24px", mt: "-3px" }} />
    </IconButton>
  );
};

export default Follow;
