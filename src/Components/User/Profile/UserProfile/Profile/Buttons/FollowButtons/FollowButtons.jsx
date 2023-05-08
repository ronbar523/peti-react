import React, { useState } from "react";
import Follow from "./Buttons/Follow";
import Reload from "./Buttons/Reload";
import UnFollow from "./Buttons/UnFollow";
import UnFollowMatch from "./Buttons/UnFollowMatch";
import UnRequest from "./Buttons/UnRequest";

const FollowButtons = ({
  user,
  followMatch,
  follow,
  setFollow,
  followRequest,
  setFollowRequest,
  userBlockMe,
  setUserBlockMe,
  iBlockUser,
  setIBlockUser,
  countFollowers,
  setCountFollowers,
  setModalUserDeleted,
  setUserPublic
}) => {
  const [followLoading, setFollowLoading] = useState(false);

  return (
    <>
      {followLoading ? (
        <Reload />
      ) : !follow && !followRequest ? (
        <Follow
          user={user}
          setModalUserDeleted={setModalUserDeleted}
          setFollow={setFollow}
          setFollowRequest={setFollowRequest}
          userBlockMe={userBlockMe}
          setUserBlockMe={setUserBlockMe}
          iBlockUser={iBlockUser}
          setIBlockUser={setIBlockUser}
          setFollowLoading={setFollowLoading}
          countFollowers={countFollowers}
          setCountFollowers={setCountFollowers}
          setUserPublic={setUserPublic}
        />
      ) : followMatch ? (
        <UnFollowMatch
          user={user}
          setFollow={setFollow}
          setUserBlockMe={setUserBlockMe}
          setModalUserDeleted={setModalUserDeleted}
          countFollowers={countFollowers}
          setCountFollowers={setCountFollowers}
          setFollowLoading={setFollowLoading}
        />
      ) : follow ? (
        <UnFollow
          user={user}
          setFollow={setFollow}
          setUserBlockMe={setUserBlockMe}
          setModalUserDeleted={setModalUserDeleted}
          countFollowers={countFollowers}
          setCountFollowers={setCountFollowers}
          setFollowLoading={setFollowLoading}
        />
      ) : followRequest ? (
        <UnRequest
          user={user}
          setFollowLoading={setFollowLoading}
          setFollowRequest={setFollowRequest}
          setUserBlockMe={setUserBlockMe}
          setModalUserDeleted={setModalUserDeleted}
        />
      ) : null}
    </>
  );
};

export default FollowButtons;
