import React from "react";
import Cancel from "./RejectAllButtons/Cancel";
import Close from "./RejectAllButtons/Close";
import RejectAll from "./RejectAllButtons/RejectAll";

const ReqjectAllMessage = ({
  isLoadingRejectAll,
  setIsLoadingRejectAll,
  countTotalRequest,
  totalRequest,
  setModalMessageRejectAllRequest,
  setArrRequest,
  setCountFollowersRequest,
  setTotalRequest,
  acceptSomeUser,
  setRejectAll,
  inputRef,
  setDisabledInput
}) => {

  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog model-border model-block modalRequestMessageLocation">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="pt-2 px-2">Reject Requests</h5>
            <Close
              setModalMessageRejectAllRequest={setModalMessageRejectAllRequest}
              isLoadingRejectAll={isLoadingRejectAll}
              inputRef={inputRef}
            />
          </div>
          <div>
            <div className="modal-body">
              <h6 className="text-center modalRequestMessageText">
                Your are going to delete {countTotalRequest} requests!
                <br />
                Are you sure?
              </h6>
            </div>
            <div className="modal-footer modalRequestMessageFotter">
              <RejectAll
                totalRequest={totalRequest}
                isLoadingRejectAll={isLoadingRejectAll}
                setIsLoadingRejectAll={setIsLoadingRejectAll}
                setArrRequest={setArrRequest}
                setModalMessageRejectAllRequest={
                  setModalMessageRejectAllRequest
                }
                setCountFollowersRequest={setCountFollowersRequest}
                setTotalRequest={setTotalRequest}
                acceptSomeUser={acceptSomeUser}
                setRejectAll={setRejectAll}
                inputRef={inputRef}
                setDisabledInput={setDisabledInput}
              />

              <Cancel
                isLoadingRejectAll={isLoadingRejectAll}
                setModalMessageRejectAllRequest={
                  setModalMessageRejectAllRequest
                }
                inputRef={inputRef}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReqjectAllMessage;
