import React, { useCallback, useState } from "react";
import { removeFollowers } from "../../../../../../../../../../Services/FollowServices/FollowEditService";
import { IconButton } from "@mui/material";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import RefreshIcon from "@mui/icons-material/Refresh";
import { userStore } from "../../../../../../../../../../Store/User/UserStore";

const Remove = ({
  item,
  setDisabledButtons,
  setBlockMe,
  setUserDeleted,
  follow,
  setFollow,
  follower,
  setFollower,
  skipCount,
  setSkipCount,
  inputRef
}) => {
  const [isLoadingRemove, setIsLoadingRemove] = useState(false);

  const removeFollowersFunction = useCallback(async () => {
    try {
      setDisabledButtons(true);
      setIsLoadingRemove(true);
      await removeFollowers(item._id).then((res) => {
        if (res.data.blockMeFlag) {
          setBlockMe(true);
          for (let x = 0; x < userStore.user.arrBlockMe.length; x++) {
            if (userStore.user.arrBlockMe[x] === item._id) {
              userStore.user.arrBlockMe.splice(x, 1);
              break;
            }
          }
        } else if (res.data.deleteFlag) {
          setUserDeleted(true);
        }

        if (res.data.blockMeFlag || res.data.deleteFlag) {
          if (follow) {
            setFollow(false);
            for (let x = 0; x < userStore.user.arrFollowing.length; x++) {
              if (userStore.user.arrFollowing[x] === item._id) {
                userStore.user.arrFollowing.splice(x, 1);
                break;
              }
            }
          } else {
            for (
              let x = 0;
              x < userStore.user.arrFollowingRequest.length;
              x++
            ) {
              if (userStore.user.arrFollowingRequest[x] === item._id) {
                userStore.user.arrFollowingRequest.splice(x, 1);
                break;
              }
            }
          }
        }
      });

      for (let x = 0; x < userStore.user.arrFollowers.length; x++) {
        if (userStore.user.arrFollowers[x] === item._id) {
          userStore.user.arrFollowers.splice(x, 1);
          break;
        }
      }
      if (skipCount !== 0) {
        setSkipCount(skipCount - 1);
      }
      inputRef.current.focus();
      setFollower(false);
      setIsLoadingRemove(false);
      setDisabledButtons(false);
    } catch {
      window.location.reload();
    }
  }, [follow]);

  return (
    <>
      {!isLoadingRemove ? (
        <IconButton
          className="modalFollowersRemoveFollowersButton"
          color="error"
          size="medium"
          disabled={!follower}
          onClick={() => removeFollowersFunction()}
        >
          <PersonRemoveIcon />
        </IconButton>
      ) : (
        <IconButton
          className="modalFollowersRemoveFollowersButton"
          color="error"
          size="medium"
        >
          <RefreshIcon
            sx={{
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

export default Remove;
