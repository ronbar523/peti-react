import React from "react";
import BlockUserButton from "./Buttons/BlockUserButton";
import UnBlockUserButton from "./Buttons/UnBlockUserButton";

const BlockButtons = ({
  user,
  iBlockUser,
  setIBlockUser,
  follow,
  setFollow,
  followAfterMe,
  setFollowAfterMe,
  setFollowRequest,
  setFollowAfterMeRequest,
  countFollowing,
  setCountFollowing,
  countFollowers,
  setCountFollowers,
  setAnchorEl,
  setAccountSettings,
  setModalUserDeleted,
  setModalReload
}) => {
  return (
    <>
      {iBlockUser ? (
        <UnBlockUserButton
          user={user}
          setModalUserDeleted={setModalUserDeleted}
          setIBlockUser={setIBlockUser}
          setAnchorEl={setAnchorEl}
          setAccountSettings={setAccountSettings}
          setModalReload={setModalReload}
        />
      ) : (
        <BlockUserButton
          user={user}
          setModalUserDeleted={setModalUserDeleted}
          setIBlockUser={setIBlockUser}
          follow={follow}
          setFollow={setFollow}
          followAfterMe={followAfterMe}
          setFollowAfterMe={setFollowAfterMe}
          setFollowRequest={setFollowRequest}
          setFollowAfterMeRequest={setFollowAfterMeRequest}
          countFollowing={countFollowing}
          setCountFollowing={setCountFollowing}
          countFollowers={countFollowers}
          setCountFollowers={setCountFollowers}
          setAnchorEl={setAnchorEl}
          setAccountSettings={setAccountSettings}
          setModalReload={setModalReload}
        />
      )}
    </>
  );
};

export default BlockButtons;
