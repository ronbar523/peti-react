import React, { useEffect, useState } from "react";
import { userStore } from "../../../../../../../../../../Store/User/UserStore";
import Reload from "./Buttons/Reload";
import Follow from "./Buttons/Follow";
import UnFollow from "./Buttons/UnFollow";
import UnRequest from "./Buttons/UnRequest";
import MyBlocked from "./Buttons/MyBlocked";
import UserBlocked from "./Buttons/UserBlocked";
import UserDeleted from "./Buttons/UserDeleted";
import RemoveTag from "../MyUser/RemoveTag";

const FollowButtons = ({
  item,
  item2,
  myUser,
  setMyUser,
  setDisabledMessage,
  myBlock,
  setMyBlock,
  setRemoveTag,
  setDisabledClose
}) => {
  const [followLoading, setFollowLoading] = useState(true);
  const [follow, setFollow] = useState(false);
  const [followRequest, setFollowRequest] = useState(false);
  const [blockMe, setBlockMe] = useState(false);
  const [userDeleted, setUserDeleted] = useState(false);

  useEffect(() => {
    if (userStore.isLogin) {
      if (item2._id === userStore.user._id) {
        setMyUser(true);
      } else {
        for (let x = 0; x < userStore.user.arrFollowing.length; x++) {
          if (userStore.user.arrFollowing[x] === item2._id) {
            setFollow(true);
            break;
          }
        }

        if (!follow && !item2.public) {
          for (let x = 0; x < userStore.user.arrFollowingRequest.length; x++) {
            if (userStore.user.arrFollowingRequest[x] === item2._id) {
              setFollowRequest(true);
              break;
            }
          }
        }

        if (!follow && !followRequest) {
          for (let x = 0; x < userStore.user.arrBlockMe.length; x++) {
            if (userStore.user.arrBlockMe[x] === item2._id) {
              setBlockMe(true);
              break;
            }
          }

          if (!blockMe && !follow && !followRequest) {
            for (let x = 0; x < userStore.user.arrMyBlock.length; x++) {
              if (userStore.user.arrMyBlock[x] === item2._id) {
                setMyBlock(true);
                break;
              }
            }
          }
        }
      }
    }
    setFollowLoading(false);
  }, []);

  useEffect(() => {
    if (myBlock || blockMe || userDeleted) {
      setDisabledMessage(true);
      setFollow(false);
      setFollowRequest(false);
    }
  }, [myBlock, blockMe, userDeleted]);

  return (
    <>
      {userStore.isLogin ? (
        <>
          {!followLoading ? (
            <>
              {!myUser ? (
                <>
                  {!follow &&
                  !followRequest &&
                  !blockMe &&
                  !myBlock &&
                  !userDeleted ? (
                    <Follow
                      item2={item2}
                      setFollowLoading={setFollowLoading}
                      setFollow={setFollow}
                      setFollowRequest={setFollowRequest}
                      setBlockMe={setBlockMe}
                      setMyBlock={setMyBlock}
                      setUserDeleted={setUserDeleted}
                      setDisabledClose={setDisabledClose}
                    />
                  ) : follow ? (
                    <UnFollow
                      item2={item2}
                      setFollowLoading={setFollowLoading}
                      setFollow={setFollow}
                      setBlockMe={setBlockMe}
                      setUserDeleted={setUserDeleted}
                      setDisabledClose={setDisabledClose}
                    />
                  ) : followRequest ? (
                    <UnRequest
                      item2={item2}
                      setFollowLoading={setFollowLoading}
                      setFollowRequest={setFollowRequest}
                      setBlockMe={setBlockMe}
                      setUserDeleted={setUserDeleted}
                      setDisabledClose={setDisabledClose}
                    />
                  ) : myBlock ? (
                    <MyBlocked
                      item2={item2}
                      setFollowLoading={setFollowLoading}
                      setMyBlock={setMyBlock}
                      setUserDeleted={setUserDeleted}
                      setDisabledClose={setDisabledClose}
                    />
                  ) : blockMe ? (
                    <UserBlocked />
                  ) : userDeleted ? (
                    <UserDeleted />
                  ) : null}
                </>
              ) : (
                <RemoveTag
                  item={item}
                  item2={item2}
                  setRemoveTag={setRemoveTag}
                  setDisabledClose={setDisabledClose}
                />
              )}
            </>
          ) : (
            <Reload followLoading={followLoading} />
          )}
        </>
      ) : null}
    </>
  );
};

export default FollowButtons;
