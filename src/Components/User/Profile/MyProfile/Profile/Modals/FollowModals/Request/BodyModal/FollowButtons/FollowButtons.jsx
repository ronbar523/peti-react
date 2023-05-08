import React, { useState } from "react";
import Follow from "./Buttons/Follow";
import MyBlocked from "./Buttons/MyBlcoked";
import Reload from "./Buttons/Reload";
import UnFollow from "./Buttons/UnFollow";
import UnRequest from "./Buttons/UnRequest";
import UserBlocked from "./Buttons/UserBlocked";
import UserDeleted from "./Buttons/UserDeleted";

const FollowButtons = ({
  item,
  follow,
  setFollow,
  followRequest,
  setFollowRequest,
  myBlock,
  setMyBlock,
  blockMe,
  setBlockMe,
  userDeleted,
  setUserDeleted,
  setDisabledButtons,
  followLoading,
  setFollowLoading,
  inputRef,
}) => {
  return (
    <>
      {followLoading ? (
        <Reload followLoading={followLoading} />
      ) : !follow && !followRequest && !myBlock && !blockMe && !userDeleted ? (
        <Follow
          item={item}
          setFollow={setFollow}
          setFollowRequest={setFollowRequest}
          setBlockMe={setBlockMe}
          setMyBlock={setMyBlock}
          setUserDeleted={setUserDeleted}
          setFollowLoading={setFollowLoading}
          setDisabledButtons={setDisabledButtons}
          inputRef={inputRef}
        />
      ) : follow ? (
        <UnFollow
          item={item}
          setFollow={setFollow}
          setBlockMe={setBlockMe}
          setUserDeleted={setUserDeleted}
          setFollowLoading={setFollowLoading}
          setDisabledButtons={setDisabledButtons}
          inputRef={inputRef}
        />
      ) : followRequest ? (
        <UnRequest
          item={item}
          setFollowRequest={setFollowRequest}
          setBlockMe={setBlockMe}
          setUserDeleted={setUserDeleted}
          setFollowLoading={setFollowLoading}
          setDisabledButtons={setDisabledButtons}
          inputRef={inputRef}
        />
      ) : myBlock ? (
        <MyBlocked
          item={item}
          setMyBlock={setMyBlock}
          setUserDeleted={setUserDeleted}
          setFollowLoading={setFollowLoading}
          setDisabledButtons={setDisabledButtons}
          inputRef={inputRef}
        />
      ) : blockMe ? (
        <UserBlocked inputRef={inputRef} />
      ) : userDeleted ? (
        <UserDeleted />
      ) : null}
    </>
  );
};

export default FollowButtons;
