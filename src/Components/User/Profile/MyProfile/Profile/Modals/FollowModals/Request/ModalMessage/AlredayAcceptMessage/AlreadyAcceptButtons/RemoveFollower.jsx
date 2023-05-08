import React, { useCallback } from "react";
import { removeFollowers } from "../../../../../../../../../../../Services/FollowServices/FollowEditService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const RemoveFollower = ({
  setModalAlredayAcceptRequest,
  arrRequest,
  setArrRequest,
  unFollowerLoading,
  setUnFollowerLoading,
  setUserMessage,
  userMessage,
  setCountFollowersRequest,
  setModalMyRequestFollowers,
  inputRef
}) => {
  const removeFollowersFunction = useCallback(async () => {
    try {
      setUnFollowerLoading(true);

      const id = userMessage._id;
      await removeFollowers(id);

      let arr = arrRequest
      for (let x = 0; x < arr.length; x++) {
        if (id === arr[x]._id) {
          arr.splice(x, 1);
          setArrRequest(arr);
          break;
        }
      }

      if (arrRequest.length === 0) {
        setCountFollowersRequest(0);
        setModalMyRequestFollowers(false);
      }

      setUserMessage({});
      inputRef.current.focus()
      setModalAlredayAcceptRequest(false);
      setUnFollowerLoading(false);
    } catch {
      window.location.reload();
    }
  }, [arrRequest]);

  return (
    <>
      {unFollowerLoading ? (
        <LoadingButton
          className="modalRequestMessageRemoveFollower"
          loading={unFollowerLoading}
          variant="outlined"
          disabled
        ></LoadingButton>
      ) : (
        <Button
          variant="outlined"
          className="modalRequestMessageRemoveFollower"
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
