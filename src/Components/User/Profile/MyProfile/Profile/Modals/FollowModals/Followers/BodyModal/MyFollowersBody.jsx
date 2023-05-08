import React, { useEffect, useState } from "react";
import { userStore } from "../../../../../../../../../Store/User/UserStore";
import Profile from "./ProfileButtons/Profile";
import Remove from "./FollowerButtons/Remove";
import Reload from "./FollowButtons/Reload";
import Follow from "./FollowButtons/Follow";
import UnFollow from "./FollowButtons/UnFollow";
import UnRequest from "./FollowButtons/UnRequest";
import MyBlocked from "./FollowButtons/MyBlocked";
import UserBlocked from "./FollowButtons/UserBlocked";
import UserDeleted from "./FollowButtons/UserDeleted";

const MyFollowersBody = ({
  item,
  setDisabledButtons,
  text,
  skipCount,
  setSkipCount,
  inputRef,
}) => {
  const [follower, setFollower] = useState(false);

  const [follow, setFollow] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);
  const [followRequest, setFollowRequest] = useState(false);
  const [blockMe, setBlockMe] = useState(false);
  const [myBlock, setMyBlock] = useState(false);
  const [userDeleted, setUserDeleted] = useState(false);

  useEffect(() => {
    for (let x = 0; x < userStore.user.arrFollowers.length; x++) {
      if (userStore.user.arrFollowers[x] === item._id) {
        setFollower(true);
        break;
      }
    }

    for (let x = 0; x < userStore.user.arrFollowing.length; x++) {
      if (userStore.user.arrFollowing[x] === item._id) {
        setFollow(true);
        break;
      }
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
      <div className="modalMyFollowersDivUser">
        <Profile item={item} userDeleted={userDeleted} />

        <Remove
          item={item}
          setDisabledButtons={setDisabledButtons}
          setBlockMe={setBlockMe}
          setUserDeleted={setUserDeleted}
          follow={follow}
          setFollow={setFollow}
          follower={follower}
          setFollower={setFollower}
          skipCount={skipCount}
          setSkipCount={setSkipCount}
          inputRef={inputRef}
        />

        {followLoading ? (
          <Reload followLoading={followLoading} />
        ) : !follow &&
          !followRequest &&
          !myBlock &&
          !blockMe &&
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
            setFollower={setFollower}
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
            setFollower={setFollower}
          
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
            setFollower={setFollower}
            inputRef={inputRef}
          />
        ) : myBlock ? (
          <MyBlocked
            item={item}
            setDisabledButtons={setDisabledButtons}
            setFollowLoading={setFollowLoading}
            setUserDeleted={setUserDeleted}
            setMyBlock={setMyBlock}
            setFollower={setFollower}
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

export default MyFollowersBody;
