import React, { useCallback } from "react";
import { userStore } from "../../../../../../../../../../../Store/User/UserStore";
import { acceptAllFollowRequest } from "../../../../../../../../../../../Services/FollowServices/FollowEditService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const AcceptAll = ({
  isLoadingAcceptAll,
  setIsLoadingAcceptAll,
  setArrRequest,
  setAcceptAll,
  setModalMessageAcceptAllRequest,
  totalRequest,
  setCountFollowersRequest,
  setTotalRequest,
  arrRequest,
  setDisabledInput={setDisabledInput}

}) => {
  const acceptAllRequestFunction = useCallback(async () => {
    try {
      setIsLoadingAcceptAll(true);

      await acceptAllFollowRequest(totalRequest).then((res) => {
        const acceptRequest = res.data.requestUserArr;
        const arr = arrRequest;

        const arr2 = [];
        for (let x = 0; x < acceptRequest.length; x++) {
          let flag = false;
          for (let y = 0; y < arr.length; y++) {
            if (acceptRequest[x]._id === arr[y]._id) {
              flag = true;
              break;
            }
          }
          if (!flag) {
            arr2.push(arr[x]);
          }
        }

        setArrRequest(arrRequest.concat(arr2));

        userStore.user.arrFollowing =
          res.data.myFollowAfterAccept[0].arrFollowing;

        userStore.user.arrFollowers =
          res.data.myFollowAfterAccept[0].arrFollowers;

        userStore.user.arrFollowingRequest =
          res.data.myFollowAfterAccept[0].arrFollowingRequest;

        userStore.user.arrFollowersRequest =
          res.data.myFollowAfterAccept[0].arrFollowersRequest;
      });

      setDisabledInput(true)
      setTotalRequest(0);
      setCountFollowersRequest(0);
      setAcceptAll(true);
      setIsLoadingAcceptAll(false);
      setModalMessageAcceptAllRequest(false);
    } catch {
      window.location.reload();
    }
  }, [totalRequest]);

  return (
    <>
      {isLoadingAcceptAll ? (
        <LoadingButton
          loading={isLoadingAcceptAll}
          variant="outlined"
          disabled
          className="modalRequestMessageAcceptButton"
        ></LoadingButton>
      ) : (
        <Button
          variant="outlined"
          className="modalRequestMessageAcceptButton"
          sx={{
            textTransform: "unset",
          }}
          onClick={() => acceptAllRequestFunction()}
        >
          Aceept
        </Button>
      )}
    </>
  );
};

export default AcceptAll;
