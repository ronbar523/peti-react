import React, { useCallback } from "react";
import { removeFollowers } from "../../../../../../../../Services/FollowServices/FollowEditService";
import { MenuItem } from "@mui/material";

const RemoveFollower = ({
  user,
  countFollowing,
  setCountFollowing,
  followAfterMe,
  setFollowAfterMe,
  setAnchorEl,
  setAccountSettings,
}) => {
  const removeFollowersFunction = useCallback(async () => {
    try {
      await removeFollowers(user._id);
      setCountFollowing(countFollowing - 1);

      setFollowAfterMe(false);
      setAnchorEl(null);
      setAccountSettings(false);
    } catch {
      window.location.reload()
    }
  }, [countFollowing]);

  return (
    <>
      {followAfterMe ? (
        <MenuItem onClick={() => removeFollowersFunction()}>
          Remove Followers
        </MenuItem>
      ) : null}
    </>
  );
};

export default RemoveFollower;
