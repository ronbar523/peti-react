import React, { useState } from "react";
import Accept from "./Buttons/Accept";
import Reject from "./Buttons/Reject";

const RequestButtons = ({
  item,
  setDisabledButtons,
  setAccept,
  setTotalRequest,
  totalRequest,
  setModalRequestNotAvailable,
  setModalAlredayAcceptRequest,
  setArrRequest,
  arrRequest,
  inputRef,
  arrFilter,
  setArrFilter,
  skipCount,
  setSkipCount,
  setAcceptSomeUser,
  setUserMessage
}) => {
  const [acceptIsLoading, setAcceptIsLoading] = useState(false);
  const [rejectIsLoading, setRejectIsLoading] = useState(false);

  return (
    <>
      <Accept
        item={item}
        acceptIsLoading={acceptIsLoading}
        setAcceptIsLoading={setAcceptIsLoading}
        rejectIsLoading={rejectIsLoading}
        setDisabledButtons={setDisabledButtons}
        setAccept={setAccept}
        setModalRequestNotAvailable={setModalRequestNotAvailable}
        totalRequest={totalRequest}
        setTotalRequest={setTotalRequest}
        setArrRequest={setArrRequest}
        arrRequest={arrRequest}
        arrFilter={arrFilter}
        setArrFilter={setArrFilter}
        inputRef={inputRef}
        skipCount={skipCount}
        setSkipCount={setSkipCount}
        setAcceptSomeUser={setAcceptSomeUser}
      />

      <Reject
        item={item}
        acceptIsLoading={acceptIsLoading}
        rejectIsLoading={rejectIsLoading}
        setRejectIsLoading={setRejectIsLoading}
        setDisabledButtons={setDisabledButtons}
        setModalAlredayAcceptRequest={setModalAlredayAcceptRequest}
        totalRequest={totalRequest}
        setTotalRequest={setTotalRequest}
        setArrRequest={setArrRequest}
        arrRequest={arrRequest}
        setAccept={setAccept}
        inputRef={inputRef}
        arrFilter={arrFilter}
        setArrFilter={setArrFilter}
        skipCount={skipCount}
        setSkipCount={setSkipCount}
        setUserMessage={setUserMessage}
      />
    </>
  );
};

export default RequestButtons;
