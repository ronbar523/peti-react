import React, { useCallback } from "react";
import { rejectFollowRequest } from "../../../../../../../../../../../Services/FollowServices/FollowEditService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { userStore } from "../../../../../../../../../../../Store/User/UserStore";

const Reject = ({
  item,
  rejectIsLoading,
  setRejectIsLoading,
  acceptIsLoading,
  setDisabledButtons,
  totalRequest,
  setTotalRequest,
  setModalAlredayAcceptRequest,
  setArrRequest,
  arrRequest,
  setAccept,
  inputRef,
  arrFilter,
  setArrFilter,
  skipCount,
  setSkipCount,
  setUserMessage
}) => {
  const rejectFunction = useCallback(async () => {
    try {
      setDisabledButtons(true);
      setRejectIsLoading(true);

      await rejectFollowRequest(item._id).then((res) => {
        if (res.data.alredayAcceptFlag) {
          setModalAlredayAcceptRequest(true);
          setAccept(true);
          setUserMessage(item)
        } else {
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
      });

      for (let x = 0; x < userStore.user.arrFollowersRequest.length; x++) {
        if (userStore.user.arrFollowersRequest[x] === item._id) {
          userStore.user.arrFollowersRequest.splice(x, 1);
          break;
        }
      }

      if (totalRequest > 0) {
        setTotalRequest(totalRequest - 1);
      }

      setSkipCount(skipCount - 1)
      setDisabledButtons(false);
      setRejectIsLoading(false);
      
      inputRef.current.focus();
    } catch {
      window.location.reload();
    }
  }, [totalRequest, arrRequest]);

  return (
    <>
      {rejectIsLoading ? (
        <LoadingButton
          size="small"
          loading={rejectIsLoading}
          variant="outlined"
          className="modalMyRequestRejectButton"
          disabled
        ></LoadingButton>
      ) : (
        <Button
          disabled={acceptIsLoading}
          variant="outlined"
          color="error"
          className="modalMyRequestRejectButton"
          sx={{
            textTransform: "unset",
            fontSize: "13px",
          }}
          onClick={() => rejectFunction()}
        >
          Reject
        </Button>
      )}
    </>
  );
};

export default Reject;
