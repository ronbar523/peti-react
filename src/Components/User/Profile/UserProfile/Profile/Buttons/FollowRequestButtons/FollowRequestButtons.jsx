import React, { useState } from "react";
import Accept from "./Buttons/Accept";
import Reject from "./Buttons/Reject";

const FollowRequestButtons = ({
  user,
  follow,
  setFollow,
  setIBlockUser,
  setFollowAfterMe,
  setUserBlockMe,
  countFollowing,
  setCountFollowing,
  countFollowers,
  setCountFollowers,
  setModalUserDeleted,
  setFollowAfterMeRequest,
  setModalRequestFollowersExpired,
  setModalAlredayAcceptRequest,
}) => {
  const [isLoadingAccept, setIsLoadingAccept] = useState(false);
  const [isLoadingReject, setIsLoadingReject] = useState(false);
  return (
    <>
      <Accept
        user={user}
        isLoadingAccept={isLoadingAccept}
        setIsLoadingAccept={setIsLoadingAccept}
        isLoadingReject={isLoadingReject}
        follow={follow}
        setFollow={setFollow}
        setIBlockUser={setIBlockUser}
        setFollowAfterMe={setFollowAfterMe}
        setUserBlockMe={setUserBlockMe}
        countFollowing={countFollowing}
        setCountFollowing={setCountFollowing}
        countFollowers={countFollowers}
        setCountFollowers={setCountFollowers}
        setFollowAfterMeRequest={setFollowAfterMeRequest}
        setModalUserDeleted={setModalUserDeleted}
        setModalRequestFollowersExpired={setModalRequestFollowersExpired}
      />

      <Reject
        user={user}
        isLoadingReject={isLoadingReject}
        setIsLoadingReject={setIsLoadingReject}
        isLoadingAccept={isLoadingAccept}
        follow={follow}
        setFollow={setFollow}
        setIBlockUser={setIBlockUser}
        countFollowers={countFollowers}
        setCountFollowers={setCountFollowers}
        setUserBlockMe={setUserBlockMe}
        setFollowAfterMeRequest={setFollowAfterMeRequest}
        setModalUserDeleted={setModalUserDeleted}
        setModalAlredayAcceptRequest={setModalAlredayAcceptRequest}
      />
    </>
  );
};

export default FollowRequestButtons;
