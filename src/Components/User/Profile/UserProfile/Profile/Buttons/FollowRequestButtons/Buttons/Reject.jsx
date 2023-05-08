import React, { useCallback } from "react";
import { rejectFollowRequest } from "../../../../../../../../Services/FollowServices/FollowEditService";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import CloseIcon from "@mui/icons-material/Close";
import { userStore } from "../../../../../../../../Store/User/UserStore";

const Reject = ({
  user,
  isLoadingReject,
  setIsLoadingReject,
  isLoadingAccept,
  follow,
  setFollow,
  setIBlockUser,
  countFollowers,
  setCountFollowers,
  setUserBlockMe,
  setModalUserDeleted,
  setFollowAfterMeRequest,
  setModalAlredayAcceptRequest,
}) => {
  const rejectRequestFollowers = useCallback(async () => {
    try {
      setIsLoadingReject(true);
      await rejectFollowRequest(user._id).then((res) => {
        if (res.data.deleteFlag) {
          setModalUserDeleted(true);
        } else if (res.data.blockUserFlag) {
          setIBlockUser(true);
          userStore.user.arrMyBlock.push(user._id);
        } else if (res.data.alredayAcceptFlag) {
          setModalAlredayAcceptRequest(true);
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
  }, [countFollowers, follow]);

  return (
    <>
      {!isLoadingReject ? (
        <IconButton
          sx={{
            float: "right",
            mr: "5px",
            color: "black",
            width: "33px",
            height: "33px",
            mt: "-2.5px",
          }}
          disabled={isLoadingAccept}
          onClick={() => rejectRequestFollowers()}
        >
          <CloseIcon
            sx={{ fontSize: "24px" }}
            color={!isLoadingAccept ? "error" : ""}
          />
        </IconButton>
      ) : (
        <IconButton
          size="medium"
          sx={{
            float: "right",
            mr: "5px",
            color: "black",
            width: "33px",
            height: "33px",
            mt: "-2.5px",
          }}
        >
          <RefreshIcon
            color="error"
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

export default Reject;
