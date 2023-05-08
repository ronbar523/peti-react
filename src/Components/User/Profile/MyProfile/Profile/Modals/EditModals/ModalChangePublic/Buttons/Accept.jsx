import React, { useCallback, useState } from "react";
import { userStore } from "../../../../../../../../../Store/User/UserStore";
import { changePublic } from "../../../../../../../../../Services/UserServices/UserEditService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Accept = ({
  countFollowers,
  setCountFollowers,
  countFollowing,
  setCountFollowing,
  setModalChnagePublic,
  setCountFollowersRequest,
}) => {
  const [isLoadingAccept, setIsLoadingAccept] = useState(false);

  const changeStatusPublic = useCallback(async () => {
    try {
      setIsLoadingAccept(true);
      if (userStore.user.public) {
        userStore.user.public = false;
      } else {
        userStore.user.public = true;
      }

      const status = userStore.user.public;

      await changePublic(status).then((res) => {
        if (userStore.user.public) {
          userStore.user.arrFollowing = res.data.myFollow[0].arrFollowing;
          userStore.user.arrFollowers = res.data.myFollow[0].arrFollowers;

          if (res.data.myFollow[0].arrFollowers.length !== countFollowers) {
            setCountFollowers(res.data.myFollow[0].arrFollowers.length);
          }
          if (res.data.myFollow[0].arrFollowing.length !== countFollowing) {
            setCountFollowing(res.data.myFollow[0].arrFollowing.length);
          }
        }
      });

      setCountFollowersRequest(0);
      document.body.style.overflow = "visible";
      setModalChnagePublic(false);
    } catch {
      window.location.reload();
    }
  }, [countFollowers, countFollowing]);
  return (
    <>
      {!isLoadingAccept ? (
        <Button
          variant="outlined"
          sx={{
            float: "right",
            marginRight: "5px",
            marginTop: "7px",
            marginBottom: "9px",
            textTransform: "unset",
            height: 37,
            width: 77,
          }}
          onClick={() => changeStatusPublic()}
        >
          Accept
        </Button>
      ) : (
        <LoadingButton
          loading={isLoadingAccept}
          variant="outlined"
          disabled
          sx={{
            float: "right",
            marginRight: "5px",
            marginTop: "7px",
            marginBottom: "9px",
            height: 37,
            width: 77,
          }}
        ></LoadingButton>
      )}
    </>
  );
};

export default Accept;
