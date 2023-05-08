import React, { useState } from "react";
import Close from "./AlreadyAcceptButtons/Close";
import Cancel from "./AlreadyAcceptButtons/Cancel";
import RemoveFollower from "./AlreadyAcceptButtons/RemoveFollower";

const AlredayAcceptMessage = ({
  setModalAlredayAcceptRequest,
  arrRequest,
  setArrRequest,
  setAcceptSomeUser,
  setUserMessage,
  userMessage,
  setCountFollowersRequest,
  setModalMyRequestFollowers,
  inputRef
}) => {
  const [unFollowerLoading, setUnFollowerLoading] = useState(false);

  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog model-border model-block modalRequestMessageLocation">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="pt-2 px-2">Expired Request</h5>
            <Close
              setModalAlredayAcceptRequest={setModalAlredayAcceptRequest}
              unFollowerLoading={unFollowerLoading}
              setAcceptSomeUser={setAcceptSomeUser}
              inputRef={inputRef}
            />
          </div>
          <div>
            <div className="modal-body">
              <h6 className="text-center modalRequestMessageText">
                You alreday accept this request!
                <br />
                Do you want to remove this follower?
              </h6>
            </div>
            <div className="modal-footer modalRequestMessageFotter">
              <RemoveFollower
                setModalAlredayAcceptRequest={setModalAlredayAcceptRequest}
                arrRequest={arrRequest}
                setArrRequest={setArrRequest}
                unFollowerLoading={unFollowerLoading}
                setUnFollowerLoading={setUnFollowerLoading}
                setUserMessage={setUserMessage}
                userMessage={userMessage}
                setCountFollowersRequest={setCountFollowersRequest}
                setModalMyRequestFollowers={setModalMyRequestFollowers}
                inputRef={inputRef}
              />

              <Cancel
                setModalAlredayAcceptRequest={setModalAlredayAcceptRequest}
                unFollowerLoading={unFollowerLoading}
                setAcceptSomeUser={setAcceptSomeUser}
                inputRef={inputRef}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlredayAcceptMessage;
