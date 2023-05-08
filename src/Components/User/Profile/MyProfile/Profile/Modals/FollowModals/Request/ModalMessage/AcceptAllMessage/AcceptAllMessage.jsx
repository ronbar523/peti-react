import React, { useState } from "react";
import Close from "./AcceptAllButtons/Close";
import Cancel from "./AcceptAllButtons/Cancel";
import AcceptAll from "./AcceptAllButtons/AcceptAll";

const AcceptAllMessage = ({
  setModalMessageAcceptAllRequest,
  setArrRequest,
  setAcceptAll,
  totalRequest,
  countTotalRequest,
  setTotalRequest,
  setCountFollowersRequest,
  arrRequest,
  inputRef,
  setDisabledInput
}) => {

  const [isLoadingAcceptAll, setIsLoadingAcceptAll] = useState(false);

  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog model-border model-block modalRequestMessageLocation">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="pt-2 px-2">Accept Requests</h5>
            <Close
              setModalMessageAcceptAllRequest={setModalMessageAcceptAllRequest}
              isLoadingAcceptAll={isLoadingAcceptAll}
              inputRef={inputRef}
            />
          </div>
          <div>
            <div className="modal-body">
              <h6 className="text-center modalRequestMessageText">
                Your are going to accept {countTotalRequest} requests!
                <br />
                Are you sure?
              </h6>
            </div>
            <div className="modal-footer modalRequestMessageFotter">
              <Cancel
                setModalMessageAcceptAllRequest={
                  setModalMessageAcceptAllRequest
                }
                isLoadingAcceptAll={isLoadingAcceptAll}
                inputRef={inputRef}
              />

              <AcceptAll
                setModalMessageAcceptAllRequest={
                  setModalMessageAcceptAllRequest
                }
                isLoadingAcceptAll={isLoadingAcceptAll}
                setIsLoadingAcceptAll={setIsLoadingAcceptAll}
                setArrRequest={setArrRequest}
                setAcceptAll={setAcceptAll}
                totalRequest={totalRequest}
                setCountFollowersRequest={setCountFollowersRequest}
                setTotalRequest={setTotalRequest}
                arrRequest={arrRequest}
                setDisabledInput={setDisabledInput}
                
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptAllMessage;
