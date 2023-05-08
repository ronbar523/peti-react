import React, { useCallback } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";
import { acceptFollowRequest } from "../../../../../../../../../../../Services/FollowServices/FollowEditService";
import { userStore } from "../../../../../../../../../../../Store/User/UserStore";

const Accept = ({
  item,
  acceptIsLoading,
  rejectIsLoading,
  setAcceptIsLoading,
  setDisabledButtons,
  setAccept,
  setModalRequestNotAvailable,
  setTotalRequest,
  totalRequest,
  setArrRequest,
  arrRequest,
  inputRef,
  arrFilter,
  setArrFilter,
  skipCount,
  setSkipCount,
  setAcceptSomeUser,
}) => {
  const acceptFunction = useCallback(async () => {
    try {
      setAcceptIsLoading(true);
      setDisabledButtons(true);

      await acceptFollowRequest(item._id).then((res) => {
        if (res.data.acceptFlag || res.data.alredayAcceptFlag) {
          setAccept(true);
          userStore.user.arrFollowers.unshift(item._id);
        } else if (
          res.data.blockMeFlag ||
          res.data.notAvailableFlag ||
          res.data.deleteFlag ||
          res.data.blockUserFlag
        ) {
          setModalRequestNotAvailable(true);
          let arr = arrRequest;
          let filter = arrFilter;
          for (let x = 0; x < arr.length; x++) {
            if (arr[x]._id === item._id) {
              arr.splice(x, 1);
              setArrRequest(arr);
              break;
            }
          }
          for (let x = 0; x < filter.length; x++) {
            if (filter[x]._id === item._id) {
              filter.splice(x, 1);
              setArrFilter(filter);
              break;
            }
          }
        }

        for (let x = 0; x < userStore.user.arrFollowersRequest.length; x++) {
          if (userStore.user.arrFollowersRequest[x] === item._id) {
            userStore.user.arrFollowersRequest.splice(x, 1);
            break;
          }
        }
      });
      if (totalRequest > 0) {
        setTotalRequest(totalRequest - 1);
      }
      setAcceptSomeUser(true)
      setDisabledButtons(false);
      setAcceptIsLoading(false);
      setSkipCount(skipCount - 1)
      inputRef.current.focus();
    } catch {
      window.location.reload();
    }
  }, [totalRequest]);

  return (
    <>
      {acceptIsLoading ? (
        <LoadingButton
          size="small"
          loading={acceptIsLoading}
          variant="outlined"
          disabled
          className="modalMyRequestAcceptButton"
        ></LoadingButton>
      ) : (
        <Button
          variant="outlined"
          className="modalMyRequestAcceptButton"
          sx={{
            fontSize: "13px",
            textTransform: "unset",
          }}
          disabled={rejectIsLoading}
          onClick={() => acceptFunction()}
        >
          Accept
        </Button>
      )}
    </>
  );
};

export default Accept;
