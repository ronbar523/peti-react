import React, { useState, useEffect } from "react";
import { userStore } from "../../../../../../../../../Store/User/UserStore";
import FollowButtons from "./FollowButtons/FollowButtons";
import ProfileButton from "./ProfileButtons/ProfileButton";
import RequestButtons from "./RequestButtons/RequestButtons";

const MyRequestFollowersBody = ({
  item,
  acceptAll,
  setDisabledButtons,
  totalRequest,
  setTotalRequest,
  setModalAlredayAcceptRequest,
  setModalRequestNotAvailable,
  setArrRequest,
  arrRequest,
  text,
  inputRef,
  arrFilter,
  setArrFilter,
  skipCount,
  setSkipCount,
  setAcceptSomeUser,
  rejectAll,
  setUserMessage
}) => {
  const [accept, setAccept] = useState(false);

  const [follow, setFollow] = useState(false);
  const [followRequest, setFollowRequest] = useState(false);
  const [myBlock, setMyBlock] = useState(false);
  const [blockMe, setBlockMe] = useState(false);
  const [userDeleted, setUserDeleted] = useState(false);
  const [followLoading, setFollowLoading] = useState(true);
  const [reject, setReject] = useState(false);

  useEffect(() => {
    if (text === "") {
      let flag = false
      for (let x = 0; x < userStore.user.arrFollowersRequest.length; x++) {
        if (userStore.user.arrFollowersRequest[x] === item._id) {
          flag = true;
          break;
        }
      }
      if(!flag){
        for(let x = 0; x < userStore.user.arrFollowers.length; x++){
          if(userStore.user.arrFollowers[x] === item._id){
            setAccept(true)
            break;
          }
        }
      }
    }
  }, [text]);

  useEffect(() => {
    if (accept) {
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
      setFollowLoading(false);
    }
  }, [accept, text]);

  useEffect(() => {
    if (acceptAll) {
      if (!accept) {
        setAccept(true);
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
      }
      setFollowLoading(false);
    }
  }, [acceptAll]);


  useEffect(() => {
    if(!accept && rejectAll){
      setReject(true)
    }
  }, [rejectAll])

  

  return (
    <>
    {!reject ? (

    
      <div className="modalMyRequestDivUser">
        <ProfileButton item={item} userDeleted={userDeleted} />

        {!accept ? (
          <>
            <RequestButtons
              item={item}
              setDisabledButtons={setDisabledButtons}
              setAccept={setAccept}
              setTotalRequest={setTotalRequest}
              totalRequest={totalRequest}
              setModalRequestNotAvailable={setModalRequestNotAvailable}
              setModalAlredayAcceptRequest={setModalAlredayAcceptRequest}
              setArrRequest={setArrRequest}
              arrRequest={arrRequest}             
              inputRef={inputRef}
              arrFilter={arrFilter}
              setArrFilter={setArrFilter}
              skipCount={skipCount}
              setSkipCount={setSkipCount}
              setAcceptSomeUser={setAcceptSomeUser}
              setUserMessage={setUserMessage}
            />
          </>
        ) : (
          <FollowButtons
            item={item}
            follow={follow}
            setFollow={setFollow}
            followRequest={followRequest}
            setFollowRequest={setFollowRequest}
            myBlock={myBlock}
            setMyBlock={setMyBlock}
            blockMe={blockMe}
            setBlockMe={setBlockMe}
            userDeleted={userDeleted}
            setUserDeleted={setUserDeleted}
            setDisabledButtons={setDisabledButtons}
            followLoading={followLoading}
            setFollowLoading={setFollowLoading}
            inputRef={inputRef}
            
            
          />
        )}
      </div>
    ) : null}
    </>
  );
};

export default MyRequestFollowersBody;
