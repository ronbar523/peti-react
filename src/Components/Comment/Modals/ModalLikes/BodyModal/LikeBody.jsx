import React, { useEffect, useState } from "react";
import { userStore } from "../../../../../Store/User/UserStore";
import Profile from "./Buttons/ProfileButtons/Profile";
import Reload from "./Buttons/FollowButtons/Reload";
import Follow from "./Buttons/FollowButtons/Follow";
import UnFollow from "./Buttons/FollowButtons/UnFollow";
import UnRequest from "./Buttons/FollowButtons/UnRequest";
import MyBlocked from "./Buttons/FollowButtons/MyBlocked";
import UserBlocked from "./Buttons/FollowButtons/UserBlocked";
import UserDeleted from "./Buttons/FollowButtons/UserDeleted";

const LikeBody = ({ item, setDisabledButtons, text, inputRef }) => {
  const [myUser, setMyUser] = useState(false);
  const [follow, setFollow] = useState(false);
  const [followLoading, setFollowLoading] = useState(true);
  const [followRequest, setFollowRequest] = useState(false);
  const [blockMe, setBlockMe] = useState(false);
  const [myBlock, setMyBlock] = useState(false);
  const [userDeleted, setUserDeleted] = useState(false);



  useEffect(() => {
    if (userStore.isLogin) {
      if (item._id === userStore.user._id) {
        setMyUser(true);
      } else {
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

          if (!blockMe && !follow && !followRequest) {
            for (let x = 0; x < userStore.user.arrMyBlock.length; x++) {
              if (userStore.user.arrMyBlock[x] === item._id) {
                setMyBlock(true);
                break;
              }
            }
          }
        }
      }
      setFollowLoading(false);
    }
  }, [text]);

  return (
    <>
      <div className="modalCommentLikesDivUser">
        <Profile item={item} />

        {followLoading && userStore.isLogin ? (
          <Reload followLoading={followLoading} />
        ) : !follow &&
          !followRequest &&
          !myBlock &&
          !blockMe &&
          !userDeleted &&
          !myUser &&
          userStore.isLogin 
          ? (
          <Follow
            item={item}
            setDisabledButtons={setDisabledButtons}
            setFollowLoading={setFollowLoading}
            setFollow={setFollow}
            setFollowRequest={setFollowRequest}
            setBlockMe={setBlockMe}
            setMyBlock={setMyBlock}
            setUserDeleted={setUserDeleted}
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
            setUserDeleted={setUserDeleted}
            setMyBlock={setMyBlock}
            inputRef={inputRef}
          />
        ) : blockMe ? (
          <UserBlocked inputRef={inputRef}/>
        ) : userDeleted ? (
          <UserDeleted />
        ) : null}
      </div>
    </>
  );
};

export default LikeBody;
