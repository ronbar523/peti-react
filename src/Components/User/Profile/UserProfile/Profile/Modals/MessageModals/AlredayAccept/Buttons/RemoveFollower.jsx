import React, { useCallback } from "react";
import { removeFollowers } from "../../../../../../../../../Services/FollowServices/FollowEditService";
import { findLengthFollow } from "../../../../../../../../../Services/FollowServices/FollowGetService";
import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";
import { userStore } from "../../../../../../../../../Store/User/UserStore";

const RemoveFollower = ({
  user,
  setFollowAfterMe,
  setUserBlockMe,
  setModalUserDeleted,
  setIBlockUser,
  follow,
  setFollow,
  countFollowers,
  setCountFollowers,
  countFollowing,
  setCountFollowing,
  setModalAlredayAcceptRequest,
  unFollowerLoading,
  setUnFollowerLoading,
}) => {
  const removeFollowersFunction = useCallback(async () => {
    try {
      setUnFollowerLoading(true);
      setFollowAfterMe(false);
      await removeFollowers(user._id).then((res) => {

        if (res.data.deleteFlag) {
          setModalUserDeleted(true);
        } else if (res.data.blockMeFlag) {
          userStore.user.arrBlockMe.push(user._id);
          setUserBlockMe(true);
        } else if (res.data.blockUserFlag) {
          userStore.user.arrMyBlock.push(user._id);
          setIBlockUser(true);
        }

        if (follow) {
          setFollow(false);
          for (let x = 0; x < userStore.user.arrFollowing.length; x++) {
            if (userStore.user.arrFollowing[x] === user._id) {
              userStore.user.arrFollowing.splice(x, 1);
              break;
            }
          }
        }
      });

      await findLengthFollow(user._id).then((res) => {
        if (res.data.myFollowersLength !== countFollowers) {
          setCountFollowers(res.data.myFollowersLength);
        }
        if (res.data.myFollowingLength !== countFollowing) {
          setCountFollowing(res.data.myFollowingLength);
        }
      });
      setModalAlredayAcceptRequest(false);
      document.body.style.overflow = "visible";
    } catch {
      window.location.reload()
    }
  }, [follow, countFollowing, countFollowers]);

  return (
    <>
      {unFollowerLoading ? (
        <LoadingButton
          className="modalMessageRemoveFollower"
          loading={unFollowerLoading}
          variant="outlined"
          disabled
        ></LoadingButton>
      ) : (
        <Button
          variant="outlined"
          className="modalMessageRemoveFollower"
          color="error"
          sx={{
            textTransform: "unset",
          }}
          onClick={() => removeFollowersFunction()}
        >
          Remove Follower
        </Button>
      )}
    </>
  );
};

export default RemoveFollower;
