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
  commentItem,
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
      if (commentItem.createdBy === userStore.user._id) {
        setMyUser(true);
      } else {
        for (let x = 0; x < userStore.user.arrFollowing.length; x++) {
          if (userStore.user.arrFollowing[x] === commentItem.createdBy) {
            setFollow(true);
            break;
          }
        }

        if (!follow && !commentItem.public) {
          for (let x = 0; x < userStore.user.arrFollowingRequest.length; x++) {
            if (
              userStore.user.arrFollowingRequest[x] === commentItem.createdBy
            ) {
              setFollowRequest(true);
              break;
            }
          }
        }

        if (!follow && !followRequest) {
          for (let x = 0; x < userStore.user.arrBlockMe.length; x++) {
            if (userStore.user.arrBlockMe[x] === commentItem.createdBy) {
              setBlockMe(true);
              break;
            }
          }

          if (!blockMe && !follow && !followRequest) {
            for (let x = 0; x < userStore.user.arrMyBlock.length; x++) {
              if (userStore.user.arrMyBlock[x] === commentItem.createdBy) {
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
                      commentItem={commentItem}
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
                      commentItem={commentItem}
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
                      commentItem={commentItem}
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
                      commentItem={commentItem}
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
