import React, { useCallback } from "react";
import { userStore } from "../../../../../../../../../Store/User/UserStore";
import { findLengthFollow } from "../../../../../../../../../Services/FollowServices/FollowGetService";
import { Button } from "@mui/material";

const Cancel = ({
  user,
  setModalAlredayAcceptRequest,
  unFollowerLoading,
  setFollowAfterMe,
  countFollowers,
  setCountFollowers,
  countFollowing,
  setCountFollowing,
}) => {
  const closeModal = useCallback(async () => {
    try {
      setFollowAfterMe(true);
      userStore.user.arrFollowers.push(user._id);
      await findLengthFollow(user._id).then((res) => {
        if (res.data.myFollowersLength !== countFollowers) {
          setCountFollowers(res.data.myFollowersLength);
        }
        if (res.data.myFollowingLength !== countFollowing) {
          setCountFollowing(res.data.myFollowingLength);
        }
      });
      setModalAlredayAcceptRequest(false);
    } catch {
      window.location.reload();
    }
  }, [countFollowing, countFollowers]);

  return (
    <Button
      disabled={unFollowerLoading}
      variant="outlined"
      className="modalMessageCancelButton"
      sx={{
        textTransform: "unset",
      }}
      onClick={() => closeModal()}
    >
      Cancel
    </Button>
  );
};

export default Cancel;
