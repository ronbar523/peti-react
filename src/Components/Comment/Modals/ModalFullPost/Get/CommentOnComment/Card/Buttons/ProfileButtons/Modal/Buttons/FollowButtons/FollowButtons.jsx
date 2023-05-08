import React, { useEffect, useState } from "react";
import { userStore } from "../../../../../../../../../../../../Store/User/UserStore";
import Reload from "./Buttons/Reload";
import Follow from "./Buttons/Follow";
import UnFollow from "./Buttons/UnFollow";
import UnRequest from "./Buttons/UnRequest";
import MyBlocked from "./Buttons/MyBlocked";
import UserBlocked from "./Buttons/UserBlocked";
import UserDeleted from "./Buttons/UserDeleted";

const FollowButtons = ({
  commentItem2,
  myUser,
  setMyUser,
  setDisabledClose,
  setDisabledMessage,
  myBlock,
  setMyBlock,
  user,
  setStatusFollow,
}) => {
  const [followLoading, setFollowLoading] = useState(true);
  const [follow, setFollow] = useState(false);
  const [followRequest, setFollowRequest] = useState(false);
  const [blockMe, setBlockMe] = useState(false);
  const [userDeleted, setUserDeleted] = useState(false);

  useEffect(() => {
    if (userStore.isLogin) {
      if (commentItem2.createdBy === userStore.user._id) {
        setMyUser(true);
      } else {
        for (let x = 0; x < userStore.user.arrFollowing.length; x++) {
          if (userStore.user.arrFollowing[x] === commentItem2.createdBy) {
            setFollow(true);
            break;
          }
        }

        if (!follow && !commentItem2.public) {
          for (let x = 0; x < userStore.user.arrFollowingRequest.length; x++) {
            if (
              userStore.user.arrFollowingRequest[x] === commentItem2.createdBy
            ) {
              setFollowRequest(true);
              break;
            }
          }
        }

        if (!follow && !followRequest) {
          for (let x = 0; x < userStore.user.arrBlockMe.length; x++) {
            if (userStore.user.arrBlockMe[x] === commentItem2.createdBy) {
              setBlockMe(true);
              break;
            }
          }

          if (!blockMe && !follow && !followRequest) {
            for (let x = 0; x < userStore.user.arrMyBlock.length; x++) {
              if (userStore.user.arrMyBlock[x] === commentItem2.createdBy) {
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
                      commentItem2={commentItem2}
                      setDisabledClose={setDisabledClose}
                      setFollowLoading={setFollowLoading}
                      setFollow={setFollow}
                      setFollowRequest={setFollowRequest}
                      setBlockMe={setBlockMe}
                      setMyBlock={setMyBlock}
                      setUserDeleted={setUserDeleted}
                      user={user}
                      setStatusFollow={setStatusFollow}
                    />
                  ) : follow ? (
                    <UnFollow
                      commentItem2={commentItem2}
                      setDisabledClose={setDisabledClose}
                      setFollowLoading={setFollowLoading}
                      setFollow={setFollow}
                      setBlockMe={setBlockMe}
                      setUserDeleted={setUserDeleted}
                      user={user}
                      setStatusFollow={setStatusFollow}
                    />
                  ) : followRequest ? (
                    <UnRequest
                      commentItem2={commentItem2}
                      setDisabledClose={setDisabledClose}
                      setFollowLoading={setFollowLoading}
                      setFollowRequest={setFollowRequest}
                      setBlockMe={setBlockMe}
                      setUserDeleted={setUserDeleted}
                      user={user}
                      setStatusFollow={setStatusFollow}
                    />
                  ) : myBlock ? (
                    <MyBlocked
                      commentItem2={commentItem2}
                      setDisabledClose={setDisabledClose}
                      setFollowLoading={setFollowLoading}
                      setMyBlock={setMyBlock}
                      setUserDeleted={setUserDeleted}
                      user={user}
                      setStatusFollow={setStatusFollow}
                    />
                  ) : blockMe ? (
                    <UserBlocked />
                  ) : userDeleted ? (
                    <UserDeleted />
                  ) : null}
                </>
              ) : null}
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
