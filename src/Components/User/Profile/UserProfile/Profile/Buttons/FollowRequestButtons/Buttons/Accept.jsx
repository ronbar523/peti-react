import React, { useCallback } from "react";
import { acceptFollowRequest } from "../../../../../../../../Services/FollowServices/FollowEditService";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import CheckIcon from "@mui/icons-material/Check";
import { userStore } from "../../../../../../../../Store/User/UserStore";

const Accept = ({
  user,
  isLoadingAccept,
  setIsLoadingAccept,
  isLoadingReject,
  setModalUserDeleted,
  follow,
  setFollow,
  setIBlockUser,
  setFollowAfterMe,
  setUserBlockMe,
  countFollowing,
  setCountFollowing,
  countFollowers,
  setCountFollowers,
  setFollowAfterMeRequest,
  setModalRequestFollowersExpired,
}) => {
  const acceptRequestFollowers = useCallback(async () => {
    try {
      setIsLoadingAccept(true);
      await acceptFollowRequest(user._id).then((res) => {
        setModalRequestFollowersExpired(res.data.notAvailableFlag);

        if (res.data.deleteFlag) {
          setModalUserDeleted(true);
        } else if (res.data.blockUserFlag) {
          setIBlockUser(true);
          userStore.user.arrMyBlock.push(user._id);
        } else if (res.data.acceptFlag || res.data.alredayAcceptFlag) {
          setFollowAfterMe(true);
          setCountFollowing(countFollowing + 1);
          userStore.user.arrFollowers.push(user._id);
        } else if (res.data.blockMeFlag) {
          if (follow) {
            if (countFollowers > 0) {
              setCountFollowers(countFollowers - 1);
            }
            setFollow(false);
          }
          userStore.user.arrBlockMe.push(user._id);
          setUserBlockMe(true);
        }
        setFollowAfterMeRequest(false);
      });
    } catch {
      window.location.reload();
    }
  }, [countFollowing, countFollowers, follow]);

  return (
    <>
      {!isLoadingAccept ? (
        <IconButton
          sx={{
            float: "right",
            color: "black",
            width: "33px",
            height: "33px",
            mt: "-2.5px",
          }}
          disabled={isLoadingReject}
          onClick={() => acceptRequestFollowers()}
        >
          <CheckIcon
            sx={{ fontSize: "24px" }}
            color={!isLoadingReject ? "success" : ""}
          />
        </IconButton>
      ) : (
        <IconButton
          color="success"
          size="medium"
          sx={{
            float: "right",
            color: "black",
            width: "33px",
            height: "33px",
            mt: "-2.5px",
          }}
        >
          <RefreshIcon
            sx={{
              fontSize: "24px",
              animation: "spin 0.7s linear infinite",
              "@keyframes spin": {
                "0%": {
                  transform: "rotate(0deg)",
                },
                "100%": {
                  transform: "rotate(360deg)",
                },
              },
            }}
          />
        </IconButton>
      )}
    </>
  );
};

export default Accept;
