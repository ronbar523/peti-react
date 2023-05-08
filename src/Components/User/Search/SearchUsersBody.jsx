import React, { useEffect, useState } from "react";
import { userStore } from "../../../Store/User/UserStore";
import { Card } from "@mui/material";
import Profile from "./Buttons/ProfileButtons/Profile";
import Reload from "./Buttons/FollowButtons/Reload";
import Follow from "./Buttons/FollowButtons/Follow";
import UnFollow from "./Buttons/FollowButtons/UnFollow";
import UnRequest from "./Buttons/FollowButtons/UnRequest";
import MyBlocked from "./Buttons/FollowButtons/MyBlocked";
import UserBlocked from "./Buttons/FollowButtons/UserBlocked";
import UserDeleted from "./Buttons/FollowButtons/UserDeleted";

const SearchUsersBody = ({ item }) => {
  const [myUser, setMyUser] = useState(false);
  const [follow, setFollow] = useState(false);
  const [followRequest, setFollowRequest] = useState(false);
  const [blockMe, setBlockMe] = useState(false);
  const [myBlock, setMyBlock] = useState(false);
  const [userDeleted, setUserDeleted] = useState(false);

  const [followLoading, setFollowLoading] = useState(false);

  useEffect(() => {
    if (userStore.isLogin) {
      if (userStore.user._id === item._id) {
        setMyUser(true);
      } else {
        for (let x = 0; x < userStore.user.arrFollowing.length; x++) {
          if (userStore.user.arrFollowing[x] === item._id) {
            setFollow(true);
            break;
          }
        }

        if (!follow) {
          for (let x = 0; x < userStore.user.arrFollowingRequest.length; x++) {
            if (userStore.user.arrFollowingRequest[x] === item._id) {
              setFollowRequest(true);
              break;
            }
          }
        }

        if (!followRequest) {
          for (let x = 0; x < userStore.user.arrBlockMe.length; x++) {
            if (userStore.user.arrBlockMe[x] === item._id) {
              setBlockMe(true);
              break;
            }
          }

          for (let x = 0; x < userStore.user.arrMyBlock.length; x++) {
            if (userStore.user.arrMyBlock[x] === item._id) {
              setMyBlock(true);
              break;
            }
          }
        }
      }
    }
  }, []);

  
  return (
    <div className="modal-content">
      <Card>
        <Profile item={item} />

        {followLoading ? (
          <Reload followLoading={followLoading} />
        ) : userStore.isLogin &&
          !follow &&
          !followRequest &&
          !blockMe &&
          !userDeleted &&
          !myUser &&
          !myBlock ? (
          <Follow
            item={item}
            setFollowLoading={setFollowLoading}
            setFollow={setFollow}
            setFollowRequest={setFollowRequest}
            setBlockMe={setBlockMe}
            setUserDeleted={setUserDeleted}
            setMyBlock={setMyBlock}
          />
        ) : follow ? (
          <UnFollow
            item={item}
            setFollowLoading={setFollowLoading}
            setFollow={setFollow}
            setBlockMe={setBlockMe}
            setUserDeleted={setUserDeleted}
          />
        ) : followRequest ? (
          <UnRequest
            item={item}
            setFollowLoading={setFollowLoading}
            setFollowRequest={setFollowRequest}
            setUserDeleted={setUserDeleted}
            setBlockMe={setBlockMe}
          />
        ) : myBlock ? (
          <MyBlocked
            item={item}
            setFollowLoading={setFollowLoading}
            setUserDeleted={setUserDeleted}
            setMyBlock={setMyBlock}
          />
        ) : blockMe ? (
          <UserBlocked />
        ) : userDeleted ? (
          <UserDeleted />
        ) : null}
      </Card>
    </div>
  );
};

export default SearchUsersBody;
