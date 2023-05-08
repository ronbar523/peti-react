import React, { useState, useEffect } from "react";
import { userStore } from "../../../Store/User/UserStore";
import { postStore } from "../../../Store/Post/PostSotre";
import { findUserByUserName } from "../../../Services/UserServices/UserGetService";
import { findFollowById } from "../../../Services/FollowServices/FollowGetService";
import { findUserPostArrays } from "../../../Services/PostArraysServices/PostArraysGetService";
import CardUserProfile from "../../../Components/User/Profile/UserProfile/Profile/CardUserProfile";
import ModalShowPhoto from "../../../Components/User/Profile/UserProfile/Profile/Modals/PhotoModals/ModalShowPhoto";
import ModalFollowers from "../../../Components/User/Profile/UserProfile/Profile/Modals/FollowModals/Followers/ModalFollowers";
import ModalFollowing from "../../../Components/User/Profile/UserProfile/Profile/Modals/FollowModals/Following/ModalFollowing";
import ModalUserDeleted from "../../../Components/User/Profile/UserProfile/Profile/Modals/DeleteModals/ModalUserDeleted";
import AlredayAccept from "../../../Components/User/Profile/UserProfile/Profile/Modals/MessageModals/AlredayAccept/AlredayAccept";
import RequestExpired from "../../../Components/User/Profile/UserProfile/Profile/Modals/MessageModals/RequestExpired/RequestExpired";
import ModalReload from "../../../Components/User/Profile/UserProfile/Profile/Modals/ReloadModals/ModalReload";
import PhotoPostTable from "../../../Components/Post/Get/UserProfile/UserProfile/KindPost/PhotoPost/PhotoPostTable";
import ShowButtons from "../../../Components/User/Profile/UserProfile/Profile/Buttons/ShowButtons/ShowButtons";
import PhotoPostRow from "../../../Components/Post/Get/UserProfile/UserProfile/KindPost/PhotoPost/PhotoPostRow";
import ModalFullPost from "../../../Components/Post/Modals/ModalFullPost/Get/ModalFullPost";
import ModalDeleteComment1 from "../../../Components/Comment/Delete/CommentOnPost/ModalDeleteComment1";
import ModalDeleteComment2 from "../../../Components/Comment/Delete/CommentOnComment/ModalDeleteComment2";
import ModalDeleteCommentModal1 from "../../../Components/Comment/Modals/ModalFullPost/Delete/CommentOnPost/ModalDeleteCommentModal1";
import ModalDeleteCommentModal2 from "../../../Components/Comment/Modals/ModalFullPost/Delete/CommentOnComment/ModalDeleteCommentModal2";
import ModalPostDeleted from "../../../Components/Post/Modals/ModalPostDeleted/ModalPostDeleted";
import ModalCommentDeleted from "../../../Components/Comment/Modals/ModalCommentDeleted/ModalCommentDeleted";
import ModalLikesPost from "../../../Components/Post/Modals/ModalLikes/ModalLikes";
import ModalLikesComment from "../../../Components/Comment/Modals/ModalLikes/ModalLikes";
import ModalMainCommentDeleted from "../../../Components/Comment/Modals/ModalMainCommentDeleted/ModalMainCommentDeleted";

const UserProfile = ({ modalAllComments, setModalAllComments }) => {
  const [user, setUser] = useState({});
  const [follow, setFollow] = useState(false);
  const [followAfterMe, setFollowAfterMe] = useState(false);
  const [userBlockMe, setUserBlockMe] = useState(false);
  const [iBlockUser, setIBlockUser] = useState(false);
  const [userFollow, setUserFollow] = useState({});
  const [modalShowPhoto, setModalShowPhoto] = useState(false);
  const [modalFollowers, setModalFollowers] = useState(false);
  const [modalFollowing, setModalFollowing] = useState(false);
  const [modalAlredayAcceptRequest, setModalAlredayAcceptRequest] =
    useState(false);
  const [modalRequestFollowersExpire, setModalRequestFollowersExpired] =
    useState(false);
  const [modalUserDeleted, setModalUserDeleted] = useState(false);
  const [modalReload, setModalReload] = useState(false);

  const [countFollowing, setCountFollowing] = useState(0);
  const [countFollowers, setCountFollowers] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [postArrays, setPostArrays] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);

  const [postArr, setPostArr] = useState([]);
  const [modalDeleteCommentModal, setModalDeleteCommentModal] = useState(false);
  const [
    modalDeleteCommentOnCommentModal,
    setModalDeleteCommentOnCommentModal,
  ] = useState(false);
  const [modalDeleteComment, setModalDeleteComment] = useState(false);
  const [modalDeleteCommentOnComment, setModalDeleteCommentOnComment] =
    useState(false);

  const [tableShow, setTableShow] = useState(true);

  const [modalShowLikesPost, setModalShowLikesPost] = useState(false);
  const [modalShowLikesComment, setModalShowLikesComment] = useState(false);

  const [modalPostDeleted, setModalPostDeleted] = useState(false);
  const [modalCommentDeleted, setModalCommentDeleted] = useState(false);
  const [modalCommentDeletedInCreate, setModalCommentDeletedInCreate] =
    useState(false);
  const [userPublic, setUserPublic] = useState(false);
  const [statusFollow, setStatusFollow] = useState(false);

  useEffect(() => {
    const url = window.location.href;
    const urlWordsArr = url.split("/");
    let flagMyProfile = false;

    if (userStore.isLogin) {
      if (
        userStore.user.userName.toLowerCase() === urlWordsArr[4].toLowerCase()
      ) {
        flagMyProfile = true;
        window.location = "/my_profile";
      }
    }

    if (!flagMyProfile) {
      const fetchData = async () => {
        try {
          await findUserByUserName(urlWordsArr[4]).then((res) => {
            if (res.data.msg === "User Name not exist") {
              window.location = "/";
            } else {
              setUser(res.data);
              setUserPublic(res.data.public);
            }
          });
        } catch {
          window.location.reload();
        }
      };

      fetchData().catch();
    }
  }, []);

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      if (userStore.isLogin) {
        for (let x = 0; x < userStore.user.arrBlockMe.length; x++) {
          if (userStore.user.arrBlockMe[x] === user._id) {
            setUserBlockMe(true);
            break;
          }
        }

        for (let x = 0; x < userStore.user.arrMyBlock.length; x++) {
          if (userStore.user.arrMyBlock[x] === user._id) {
            setIBlockUser(true);
            break;
          }
        }
      }

      const fetchData = async () => {
        try {
          await findFollowById(user._id).then((res) => {
            setUserFollow(res.data);
            setCountFollowing(res.data.arrFollowing.length);
            setCountFollowers(res.data.arrFollowers.length);
          });

          await findUserPostArrays(user._id).then((res) => {
            setPostArrays(res.data);
            setTotalPosts(
              res.data.arrMyTextPost.length +
                res.data.arrTagMeVideo.length +
                res.data.arrMyPhoto.length
            );
          });

          setIsLoading(false);
        } catch {
          window.location.reload();
        }
      };

      fetchData().catch();
    }
  }, [user]);

  useEffect(() => {
    if (postStore.postDeletedId !== "") {
      const arr = postArr;
      for (let x = 0; x < arr.length; x++) {
        if (arr[x]._id === postStore.postDeletedId) {
          arr.splice(x, 1);
          setTotalPosts(totalPosts - 1);
          break;
        }
      }
      setPostArr(arr);
      setModalAllComments(false);
      postStore.postDeletedId = "";
      postStore.post = {};
      postStore.postLike = {};
    }
  }, [modalPostDeleted]);

  return (
    <>
      {!isLoading ? (
        <>
          <div
            className={
              (modalCommentDeleted && modalAllComments) ||
              modalCommentDeletedInCreate
                ? "opacity-modal-zero"
                : (modalFollowers ||
                    modalShowPhoto ||
                    modalFollowers ||
                    modalFollowing ||
                    modalRequestFollowersExpire ||
                    modalUserDeleted ||
                    modalAlredayAcceptRequest ||
                    modalReload ||
                    modalDeleteComment ||
                    modalDeleteCommentOnComment ||
                    modalPostDeleted ||
                    modalCommentDeleted ||
                    modalShowLikesPost ||
                    modalShowLikesComment ||
                    modalAllComments) &&
                  !modalDeleteCommentModal
                ? "opacity-modal"
                : modalDeleteCommentModal || modalDeleteCommentOnCommentModal
                ? "opacity-modal-zero"
                : ""
            }
          >
            <CardUserProfile
              user={user}
              userFollow={userFollow}
              followAfterMe={followAfterMe}
              setFollowAfterMe={setFollowAfterMe}
              follow={follow}
              setFollow={setFollow}
              setModalShowPhoto={setModalShowPhoto}
              setModalFollowers={setModalFollowers}
              setModalFollowing={setModalFollowing}
              setModalReload={setModalReload}
              userBlockMe={userBlockMe}
              setUserBlockMe={setUserBlockMe}
              iBlockUser={iBlockUser}
              setIBlockUser={setIBlockUser}
              setModalRequestFollowersExpired={setModalRequestFollowersExpired}
              setModalAlredayAcceptRequest={setModalAlredayAcceptRequest}
              setModalUserDeleted={setModalUserDeleted}
              countFollowing={countFollowing}
              setCountFollowing={setCountFollowing}
              countFollowers={countFollowers}
              setCountFollowers={setCountFollowers}
              totalPosts={totalPosts}
              userPublic={userPublic}
              setUserPublic={setUserPublic}
              setStatusFollow={setStatusFollow}
              statusFollow={statusFollow}
            />

            {iBlockUser || userBlockMe || (!userPublic && !follow) ? null : (
              <>
                {totalPosts > 0 ? (
                  <ShowButtons
                    tableShow={tableShow}
                    setTableShow={setTableShow}
                  />
                ) : null}

                {tableShow ? (
                  <PhotoPostTable
                    user={user}
                    postArrays={postArrays}
                    postArr={postArr}
                    setPostArr={setPostArr}
                    setModalAllComments={setModalAllComments}
                  />
                ) : (
                  <PhotoPostRow
                    postArrays={postArrays}
                    postArr={postArr}
                    setPostArr={setPostArr}
                    setModalAllComments={setModalAllComments}
                    modalAllComments={modalAllComments}
                    modalDeleteComment={modalDeleteComment}
                    setModalDeleteComment={setModalDeleteComment}
                    modalDeleteCommentOnComment={modalDeleteCommentOnComment}
                    setModalDeleteCommentOnComment={
                      setModalDeleteCommentOnComment
                    }
                    modalShowLikesPost={modalShowLikesPost}
                    setModalShowLikesPost={setModalShowLikesPost}
                    modalShowLikesComment={modalShowLikesComment}
                    setModalShowLikesComment={setModalShowLikesComment}
                    setModalPostDeleted={setModalPostDeleted}
                    modalCommentDeletedInCreate={modalCommentDeletedInCreate}
                    setModalCommentDeletedInCreate={
                      setModalCommentDeletedInCreate
                    }
                    user={user}
                    setStatusFollow={setStatusFollow}
                  />
                )}
              </>
            )}
          </div>
        </>
      ) : null}

      <div>{modalReload ? <ModalReload /> : null}</div>

      {modalShowPhoto ? (
        <ModalShowPhoto user={user} setModalShowPhoto={setModalShowPhoto} />
      ) : null}

      {modalFollowers ? (
        <ModalFollowers
          user={user}
          setModalFollowers={setModalFollowers}
          setCountFollowers={setCountFollowers}
          setCountFollowing={setCountFollowing}
          countFollowers={countFollowers}
          setFollow={setFollow}
          setFollowAfterMe={setFollowAfterMe}
          follow={follow}
        />
      ) : null}

      {modalFollowing ? (
        <ModalFollowing
          user={user}
          setModalFollowing={setModalFollowing}
          setCountFollowers={setCountFollowers}
          countFollowing={countFollowing}
          setCountFollowing={setCountFollowing}
          setFollow={setFollow}
          followAfterMe={followAfterMe}
          setFollowAfterMe={setFollowAfterMe}
        />
      ) : null}

      {modalRequestFollowersExpire ? (
        <RequestExpired
          setModalRequestFollowersExpired={setModalRequestFollowersExpired}
        />
      ) : null}

      {modalUserDeleted ? (
        <ModalUserDeleted setModalUserDeleted={setModalUserDeleted} />
      ) : null}

      {modalAlredayAcceptRequest ? (
        <AlredayAccept
          user={user}
          follow={follow}
          setFollow={setFollow}
          setFollowAfterMe={setFollowAfterMe}
          setModalAlredayAcceptRequest={setModalAlredayAcceptRequest}
          setUserBlockMe={setUserBlockMe}
          setIBlockUser={setIBlockUser}
          etCountFollowers={setCountFollowers}
          setCountFollowing={setCountFollowing}
          setModalUserDeleted={setModalUserDeleted}
        />
      ) : null}

      {modalAllComments && !modalShowLikesPost && !modalShowLikesComment ? (
        <div
          className={
            modalDeleteCommentModal ||
            modalDeleteCommentOnCommentModal ||
            modalCommentDeleted ||
            modalCommentDeletedInCreate
              ? "opacity-modal"
              : ""
          }
        >
          <ModalFullPost
            setModalAllComments={setModalAllComments}
            modalDeleteCommentModal={modalDeleteCommentModal}
            setModalDeleteCommentModal={setModalDeleteCommentModal}
            modalDeleteCommentOnCommentModal={modalDeleteCommentOnCommentModal}
            setModalDeleteCommentOnCommentModal={
              setModalDeleteCommentOnCommentModal
            }
            modalShowLikesPost={modalShowLikesPost}
            setModalShowLikesPost={setModalShowLikesPost}
            setModalShowLikesComment={setModalShowLikesComment}
            setModalPostDeleted={setModalPostDeleted}
            modalCommentDeleted={modalCommentDeleted}
            setModalCommentDeleted={setModalCommentDeleted}
            modalCommentDeletedInCreate={modalCommentDeletedInCreate}
            setModalCommentDeletedInCreate={setModalCommentDeletedInCreate}
            user={user}
            setStatusFollow={setStatusFollow}
          />
        </div>
      ) : null}

      {modalDeleteComment ? (
        <ModalDeleteComment1
          setModalPostDeleted={setModalPostDeleted}
          setModalDeleteComment={setModalDeleteComment}
        />
      ) : null}

      {modalDeleteCommentOnComment ? (
        <ModalDeleteComment2
          setModalDeleteCommentOnComment={setModalDeleteCommentOnComment}
          setModalPostDeleted={setModalPostDeleted}
        />
      ) : null}

      {modalDeleteCommentModal ? (
        <ModalDeleteCommentModal1
          setModalDeleteCommentModal={setModalDeleteCommentModal}
          setModalPostDeleted={setModalPostDeleted}
          setModalAllComments={setModalAllComments}
        />
      ) : null}

      {modalDeleteCommentOnCommentModal ? (
        <ModalDeleteCommentModal2
          setModalDeleteCommentOnCommentModal={
            setModalDeleteCommentOnCommentModal
          }
          setModalPostDeleted={setModalPostDeleted}
        />
      ) : null}

      {modalShowLikesPost ? (
        <ModalLikesPost
          setModalShowLikesPost={setModalShowLikesPost}
          setModalPostDeleted={setModalPostDeleted}
          modalAllComments={modalAllComments}
        />
      ) : null}

      {modalShowLikesComment ? (
        <ModalLikesComment
          setModalShowLikesComment={setModalShowLikesComment}
          setModalCommentDeleted={setModalCommentDeleted}
          setModalPostDeleted={setModalPostDeleted}
          modalAllComments={modalAllComments}
        />
      ) : null}

      {modalPostDeleted ? (
        <ModalPostDeleted setModalPostDeleted={setModalPostDeleted} />
      ) : null}

      {modalCommentDeleted ? (
        <ModalCommentDeleted setModalCommentDeleted={setModalCommentDeleted} />
      ) : null}

      {modalCommentDeletedInCreate ? (
        <ModalMainCommentDeleted
          setModalCommentDeletedInCreate={setModalCommentDeletedInCreate}
        />
      ) : null}
    </>
  );
};

export default UserProfile;
