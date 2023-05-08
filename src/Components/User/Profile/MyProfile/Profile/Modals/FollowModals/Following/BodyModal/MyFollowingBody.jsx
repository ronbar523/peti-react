import React, { useEffect, useState } from "react";
import Profile from "./ProfileButtons/Profile";
import Reload from "./FollowButtons/Reload";
import Follow from "./FollowButtons/Follow";
import UnFollow from "./FollowButtons/UnFollow";
import UnRequest from "./FollowButtons/UnRequest";
import UserBlocked from "./FollowButtons/UserBlocked";
import MyBlocked from "./FollowButtons/MyBlocked";
import UserDeleted from "./FollowButtons/UserDeleted";
import { userStore } from "../../../../../../../../../Store/User/UserStore";

const MyFollowingBody = ({ item, setDisabledButtons, text, skipCount, setSkipCount, inputRef }) => {
  const [follow, setFollow] = useState(true);
  const [followRequest, setFollowRequest] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);
  const [myBlock, setMyBlock] = useState(false);
  const [blockMe, setBlockMe] = useState(false);
  const [userDeleted, setUserDeleted] = useState(false);

  useEffect(() => {
    let flag = false 
    for (let x = 0; x < userStore.user.arrFollowing.length; x++) {
      if (userStore.user.arrFollowing[x] === item._id) {
        flag = true
        break;
      }
    }
    if(!flag){
      setFollow(false)
    }

    if (!follow && !item.public) {
      for (let x = 0; x < userStore.user.arrFollowingRequest.length; x++) {
        if (userStore.user.arrFollowingRequest[x] === item._id) {
          setFollowRequest(true);
          break;
        }
      }
    }

    if (!follow && !followRequest) {
      for (let x = 0; x < userStore.user.arrBlockMe.length; x++) {
        if (userStore.user.arrBlockMe[x] === item._id) {
          setBlockMe(true);
          break;
        }
      }

      if (blockMe) {
        for (let x = 0; x < userStore.user.arrMyBlock.length; x++) {
          if (userStore.user.arrMyBlock[x] === item._id) {
            myBlock(true);
            break;
          }
        }
      }
    }

    setFollowLoading(false);
  }, [text]);

  return (
    <>
      <div className="modalMyFollowingDivUser">
        <Profile item={item} userDeleted={userDeleted} />

        {followLoading ? (
          <Reload followLoading={followLoading} />
        ) : !follow &&
          !followRequest &&
          !blockMe &&
          !myBlock &&
          !userDeleted ? (
          <Follow
            item={item}
            setDisabledButtons={setDisabledButtons}
            setFollowLoading={setFollowLoading}
            setFollow={setFollow}
            setFollowRequest={setFollowRequest}
            setBlockMe={setBlockMe}
            setMyBlock={setMyBlock}
            setUserDeleted={setUserDeleted}
            setSkipCount={setSkipCount}
            skipCount={skipCount}
            inputRef={inputRef}
          />
        ) : follow ? (
          <UnFollow
            item={item}
            setDisabledButtons={setDisabledButtons}
            setFollowLoading={setFollowLoading}
            setFollow={setFollow}
            setBlockMe={setBlockMe}
            setUserDeleted={setUserDeleted}
            setSkipCount={setSkipCount}
            skipCount={skipCount}
            inputRef={inputRef}
          />
        ) : followRequest ? (
          <UnRequest
            item={item}
            setDisabledButtons={setDisabledButtons}
            setFollowLoading={setFollowLoading}
            setFollowRequest={setFollowRequest}
            setBlockMe={setBlockMe}
            setUserDeleted={setUserDeleted}
            inputRef={inputRef}
          />
        ) : myBlock ? (
          <MyBlocked
            item={item}
            setDisabledButtons={setDisabledButtons}
            setFollowLoading={setFollowLoading}
            setMyBlock={setMyBlock}
            setUserDeleted={setUserDeleted}
            inputRef={inputRef}
          />
        ) : blockMe ? (
          <UserBlocked inputRef={inputRef} />
        ) : userDeleted ? (
          <UserDeleted />
        ) : null}
      </div>
    </>
  );
};

export default MyFollowingBody;
