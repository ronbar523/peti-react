import React, { useCallback, useState } from "react";
import { findMyFollow } from "../../../../../../../../../Services/FollowServices/FollowGetService";
import { userStore } from "../../../../../../../../../Store/User/UserStore";
import RefreshIcon from "@mui/icons-material/Refresh";

const Close = ({
  countFollowers,
  setCountFollowers,
  countFollowing,
  setCountFollowing,
  disabledClose,
  setModalMyFollowers,
}) => {
  const [isLoadingClose, setIsLoadingClose] = useState(false);

  const closeModal = useCallback(async () => {
    try {
      document.body.style.overflow = "visible";
      setIsLoadingClose(true);

      await findMyFollow().then((res) => {
        userStore.user.arrFollowing = res.data.arrFollowing;
        userStore.user.arrFollowingRequest = res.data.arrFollowingRequest;
        userStore.user.arrFollowers = res.data.arrFollowers;
        userStore.user.arrFollowersRequest = res.data.arrFollowersRequest;

        if (res.data.arrFollowers.length !== countFollowers) {
          setCountFollowers(res.data.arrFollowers.length);
        }
        if (res.data.arrFollowing.length !== countFollowing) {
          setCountFollowing(res.data.arrFollowing.length);
        }
      });

      setModalMyFollowers(false);
    } catch {
      window.location.reload();
    }
  }, [countFollowers, countFollowing]);

  return (
    <>
      {!isLoadingClose ? (
        <button
          className="btn-close modalMyFollowingCloseButton"
          onClick={() => closeModal()}
          disabled={disabledClose}
        />
      ) : (
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
      )}
    </>
  );
};

export default Close;
