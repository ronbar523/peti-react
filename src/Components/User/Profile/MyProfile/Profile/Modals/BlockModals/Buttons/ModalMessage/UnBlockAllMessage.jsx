import React, { useState } from "react";
import UnBlockAll from "./Buttons/UnBlockAll";
import Cancel from "./Buttons/Cancel";
import Close from "./Buttons/Close";

const UnAllBlockMessage = ({
  countTotalBlock,
  setModalMyBlock,
  setModalUnBlockAll,
  setCountBlock,
  setUnBlockAll,
  setTotalBlockUser,
  inputRef
}) => {
  const [isLoadingUnBlockAll, setIsLoadingUnBlockAll] = useState(false);

  return (
    <>
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalBlockMessageLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Unblock All</h5>
              <Close
                setModalUnBlockAll={setModalUnBlockAll}
                isLoadingUnBlockAll={isLoadingUnBlockAll}
                inputRef={inputRef}
              />
            </div>
            <div>
              <div className="modal-body">
                <h6 className="text-center modalBlockMessageText">
                  Your are going to unblock {countTotalBlock} users!
                  <br />
                  Are you sure?
                </h6>
              </div>
              <div className="modal-footer modalBlockMessageFotter">
                <Cancel
                  setModalUnBlockAll={setModalUnBlockAll}
                  isLoadingUnBlockAll={isLoadingUnBlockAll}
                  inputRef={inputRef}
                />

                <UnBlockAll
                  isLoadingUnBlockAll={isLoadingUnBlockAll}
                  setIsLoadingUnBlockAll={setIsLoadingUnBlockAll}
                  setModalMyBlock={setModalMyBlock}
                  setModalUnBlockAll={setModalUnBlockAll}
                  setCountBlock={setCountBlock}
                  setUnBlockAll={setUnBlockAll}
                  setTotalBlockUser={setTotalBlockUser}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnAllBlockMessage;
