import React, { useCallback } from "react";
import { userStore } from "../../../../../../../../../../../Store/User/UserStore";
import { rejectAllFollowRequest } from "../../../../../../../../../../../Services/FollowServices/FollowEditService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const RejectAll = ({
  totalRequest,
  isLoadingRejectAll,
  setIsLoadingRejectAll,
  setArrRequest,
  setModalMessageRejectAllRequest,
  setCountFollowersRequest,
  setTotalRequest,
  acceptSomeUser,
  setRejectAll,
  inputRef,
  setDisabledInput
}) => {
  const rejectAllRequestFunction = useCallback(async () => {
    try {
      setIsLoadingRejectAll(true);

      await rejectAllFollowRequest(totalRequest);

      userStore.user.arrFollowersRequest = [];

      if (!acceptSomeUser) {
        setArrRequest([]);
      } else {
        inputRef.current.focus()
      }
      setRejectAll(true);
      setDisabledInput(true)

      setCountFollowersRequest(0);
      setTotalRequest(0);
      setModalMessageRejectAllRequest(false);
      setIsLoadingRejectAll(false);
    } catch {
      window.location.reload();
    }
  }, [totalRequest, acceptSomeUser]);

  return (
    <>
      {isLoadingRejectAll ? (
        <LoadingButton
          loading={isLoadingRejectAll}
          variant="outlined"
          disabled
          className="modalRequestMessageRejectButton"
        ></LoadingButton>
      ) : (
        <Button
          variant="outlined"
          color="error"
          className="modalRequestMessageRejectButton"
          sx={{
            textTransform: "unset",
          }}
          onClick={() => rejectAllRequestFunction()}
        >
          Reject All
        </Button>
      )}
    </>
  );
};

export default RejectAll;
