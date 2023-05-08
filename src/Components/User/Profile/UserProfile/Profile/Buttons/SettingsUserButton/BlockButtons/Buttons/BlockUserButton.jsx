import React, { useCallback } from "react";
import { blockUser } from "../../../../../../../../../Services/BlockServices/BlockEditServices";
import { MenuItem } from "@mui/material";

const BlockUserButton = ({
  user,
  setIBlockUser,
  follow,
  setFollow,
  followAfterMe,
  setFollowAfterMe,
  setFollowRequest,
  setFollowAfterMeRequest,
  countFollowing,
  setCountFollowing,
  countFollowers,
  setCountFollowers,
  setAnchorEl,
  setAccountSettings,
  setModalReload
}) => {
  const blockFunction = useCallback(async () => {
    try {
      setAnchorEl(null);
      setModalReload(true)
      await blockUser(user._id);

      if (followAfterMe) {
        setCountFollowing(countFollowing - 1);
      }

      if (follow) {
        setCountFollowers(countFollowers - 1);
      }

      setIBlockUser(true);
      setFollow(false);
      setFollowRequest(false);
      setFollowAfterMeRequest(false);
      setFollowAfterMe(false);
      setAccountSettings(false);
      setModalReload(false)
    } catch {
      window.location.reload();
    }
  }, [follow, followAfterMe]);

  return <MenuItem onClick={() => blockFunction()}>Block User</MenuItem>;
};

export default BlockUserButton;
