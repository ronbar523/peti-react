import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../Store/User/UserStore";
import { postStore } from "../../../Store/Post/PostSotre";
import CardMyProfile from "../../../Components/User/Profile/MyProfile/Profile/CardMyProfile";
import ModalChangePhoto from "../../../Components/User/Profile/MyProfile/Profile/Modals/EditModals/ModalChangePhoto/ModalChangePhoto";
import ModalChangeUserName from "../../../Components/User/Profile/MyProfile/Profile/Modals/EditModals/ModalChangeUserName/ModalChangeUserName";
import ModalChangeName from "../../../Components/User/Profile/MyProfile/Profile/Modals/EditModals/ModalChangeName/ModalChangeName";
import ModalChangeBio from "../../../Components/User/Profile/MyProfile/Profile/Modals/EditModals/ModalChangeBio/ModalChangeBio";
import ModalChangePassword from "../../../Components/User/Profile/MyProfile/Profile/Modals/EditModals/ModalChangePassword/ModalChangePassword";
import ModalChangeEmail from "../../../Components/User/Profile/MyProfile/Profile/Modals/EditModals/ModalChangeEmail/ModalChangeEmail";
import ModalMyFollowing from "../../../Components/User/Profile/MyProfile/Profile/Modals/FollowModals/Following/ModalMyFollowing";
import ModalMyFollowers from "../../../Components/User/Profile/MyProfile/Profile/Modals/FollowModals/Followers/ModalMyFollowers";
import ModalChangePublic from "../../../Components/User/Profile/MyProfile/Profile/Modals/EditModals/ModalChangePublic/ModalChangePublic";
import ModalDeleteMyUser from "../../../Components/User/Profile/MyProfile/Profile/Modals/DeleteModals/ModalDeleteMyUser";
import ModalMyRequestFollowers from "../../../Components/User/Profile/MyProfile/Profile/Modals/FollowModals/Request/ModalMyRequestFollowers";
import ModalMyBlockUsers from "../../../Components/User/Profile/MyProfile/Profile/Modals/BlockModals/ModalMyBlockUsers";
import ModalAlreadyVerify from "../../../Components/User/Profile/MyProfile/Profile/Modals/AlreadyVerifyModal/ModalAlreadyVerify";
import PhotoPostTable from "../../../Components/Post/Get/UserProfile/MyProfile/KindPost/PhotoPost/PhotoPostTable";
import ModalFullPost from "../../../Components/Post/Modals/ModalFullPost/Get/ModalFullPost";
import ModalDeleteCommentModal2 from "../../../Components/Comment/Modals/ModalFullPost/Delete/CommentOnComment/ModalDeleteCommentModal2";
import ModalDeleteCommentModal1 from "../../../Components/Comment/Modals/ModalFullPost/Delete/CommentOnPost/ModalDeleteCommentModal1";
import ModalDeletePostModal from "../../../Components/Post/Modals/ModalFullPost/Delete/ModalDeletePostModal";
import ModalUpdateModal from "../../../Components/Post/Modals/ModalFullPost/Edit/EditPhoto/ModalUpdate/ModalUpdateModal";
import PhotoPostRow from "../../../Components/Post/Get/UserProfile/MyProfile/KindPost/PhotoPost/PhotoPostRow";
import ModalDeleteComment1 from "../../../Components/Comment/Delete/CommentOnPost/ModalDeleteComment1";
import ModalDeleteComment2 from "../../../Components/Comment/Delete/CommentOnComment/ModalDeleteComment2";
import ModalUpdate from "../../../Components/Post/Edit/EditPhoto/ModalUpdate/ModalUpdate";
import ModalDeletePost from "../../../Components/Post/Delete/HomePage/ModalDeletePost";
import VerifyCard from "../../../Components/User/Profile/MyProfile/Verify/VerifyCard";
import ShowButtons from "../../../Components/User/Profile/MyProfile/Profile/Buttons/ShowButtons/ShowButtons";
import ModalPostDeleted from "../../../Components/Post/Modals/ModalPostDeleted/ModalPostDeleted";
import ModalCommentDeleted from "../../../Components/Comment/Modals/ModalCommentDeleted/ModalCommentDeleted";
import ModalLikesPost from "../../../Components/Post/Modals/ModalLikes/ModalLikes";
import ModalLikesComment from "../../../Components/Comment/Modals/ModalLikes/ModalLikes";
import ModalMainCommentDeleted from "../../../Components/Comment/Modals/ModalMainCommentDeleted/ModalMainCommentDeleted";

const MyProfile = ({
  modalEditProfilePhoto,
  setModalEditProfilePhoto,
  modalAllComments,
  setModalAllComments,
}) => {
  const [modalEditName, setModalEditName] = useState(false);
  const [modalEditUserName, setModalEditUserName] = useState(false);
  const [modalEditBio, setModalEditBio] = useState(false);
  const [modalChangePassword, setModalChangePassword] = useState(false);
  const [modalChangeEmail, setModalChangeEmail] = useState(false);
  const [modalChangePublic, setModalChnagePublic] = useState(false);
  const [modalDeleteMyUser, setModalDeleteMyUser] = useState(false);
  const [modalMyFollowing, setModalMyFollowing] = useState(false);
  const [modalMyFollowers, setModalMyFollowers] = useState(false);
  const [modalMyRequestFollowers, setModalMyRequestFollowers] = useState(false);
  const [modalMyBlock, setModalMyBlock] = useState(false);
  const [modalAlreadyVerify, setModalAlreadyVerify] = useState(false);

  const [countFollowing, setCountFollowing] = useState(
    userStore.user.arrFollowing.length
  );

  const [countFollowers, setCountFollowers] = useState(
    userStore.user.arrFollowers.length
  );

  const [countFollowersRequest, setCountFollowersRequest] = useState(
    userStore.user.arrFollowersRequest.length
  );

  const [countBlock, setCountBlock] = useState(
    userStore.user.arrMyBlock.length
  );

  const [verify, setVerify] = useState(userStore.user.verify);

  const [postArr, setPostArr] = useState([]);
  const [modalDeletePostModal, setModalDeletePostModal] = useState(false);
  const [modalEditPhotoPostModal, setModalEditPhotoPostModal] = useState(false);
  const [modalDeleteCommentModal, setModalDeleteCommentModal] = useState(false);
  const [
    modalDeleteCommentOnCommentModal,
    setModalDeleteCommentOnCommentModal,
  ] = useState(false);

  const [modalDeletePost, setModalDeletePost] = useState(false);
  const [modalEditPhotoPost, setModalEditPhotoPost] = useState(false);
  const [modalDeleteComment, setModalDeleteComment] = useState(false);
  const [modalDeleteCommentOnComment, setModalDeleteCommentOnComment] =
    useState(false);

  const [opacityZero, setOpacityZero] = useState(false);
  const [opacityZeroFullPostModal, setOpacityZeroFullPostModal] =
    useState(false);

  const [tableShow, setTableShow] = useState(true);
  const [totalPosts, setTotalPosts] = useState(0);

  const [modalShowLikesPost, setModalShowLikesPost] = useState(false);
  const [modalShowLikesComment, setModalShowLikesComment] = useState(false);

  const [modalPostDeleted, setModalPostDeleted] = useState(false);
  const [modalCommentDeleted, setModalCommentDeleted] = useState(false);
  const [modalCommentDeletedInCreate, setModalCommentDeletedInCreate] =
    useState(false);

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
      {!userStore.isLogin && <Navigate to="/" />}

      <div
        className={
          (modalCommentDeleted && modalAllComments) ||
          modalCommentDeletedInCreate
            ? "opacity-modal-zero"
            : (modalEditProfilePhoto ||
                modalEditName ||
                modalEditUserName ||
                modalEditBio ||
                modalChangePassword ||
                modalChangeEmail ||
                modalMyFollowing ||
                modalMyFollowers ||
                modalChangePublic ||
                modalDeleteMyUser ||
                modalMyRequestFollowers ||
                modalMyBlock ||
                modalAlreadyVerify ||
                modalDeletePost ||
                modalEditPhotoPost ||
                modalDeleteComment ||
                modalDeleteCommentOnComment ||
                modalPostDeleted ||
                modalCommentDeleted ||
                modalShowLikesPost ||
                modalShowLikesComment ||
                modalAllComments) &&
              !modalDeleteCommentModal &&
              !modalDeleteCommentOnCommentModal &&
              !modalDeletePostModal &&
              !modalEditPhotoPostModal &&
              !opacityZero
            ? "opacity-modal"
            : modalDeleteCommentModal ||
              modalDeleteCommentOnCommentModal ||
              modalDeletePostModal ||
              modalEditPhotoPostModal ||
              opacityZero
            ? "opacity-modal-zero"
            : ""
        }
      >
        <VerifyCard
          verify={verify}
          setVerify={setVerify}
          setModalAlreadyVerify={setModalAlreadyVerify}
        />

        <CardMyProfile
          setModalEditProfilePhoto={setModalEditProfilePhoto}
          setModalEditName={setModalEditName}
          setModalEditUserName={setModalEditUserName}
          setModalEditBio={setModalEditBio}
          setModalChangePassword={setModalChangePassword}
          setModalChangeEmail={setModalChangeEmail}
          setModalChnagePublic={setModalChnagePublic}
          setModalMyFollowing={setModalMyFollowing}
          setModalMyFollowers={setModalMyFollowers}
          setModalMyRequestFollowers={setModalMyRequestFollowers}
          setModalDeleteMyUser={setModalDeleteMyUser}
          setModalAlreadyVerify={setModalAlreadyVerify}
          verify={verify}
          setVerify={setVerify}
          countFollowing={countFollowing}
          countFollowers={countFollowers}
          countFollowersRequest={countFollowersRequest}
          setModalMyBlock={setModalMyBlock}
          countBlock={countBlock}
          setCountBlock={setCountBlock}
          tableShow={tableShow}
          setTableShow={setTableShow}
          totalPosts={totalPosts}
          setTotalPosts={setTotalPosts}
        />

        {totalPosts > 0 ? (
          <ShowButtons tableShow={tableShow} setTableShow={setTableShow} />
        ) : null}

        {tableShow ? (
          <PhotoPostTable
            postArr={postArr}
            setPostArr={setPostArr}
            setModalAllComments={setModalAllComments}
            modalPostDeleted={modalPostDeleted}
            modalEditUserName={modalEditUserName}
            modalEditProfilePhoto={modalEditProfilePhoto}
            modalEditName={modalEditName}
          />
        ) : (
          <PhotoPostRow
            postArr={postArr}
            setPostArr={setPostArr}
            setModalAllComments={setModalAllComments}
            setModalDeletePost={setModalDeletePost}
            setModalEditPhotoPost={setModalEditPhotoPost}
            modalEditPhotoPost={modalEditPhotoPost}
            modalAllComments={modalAllComments}
            modalDeleteComment={modalDeleteComment}
            setModalDeleteComment={setModalDeleteComment}
            modalDeleteCommentOnComment={modalDeleteCommentOnComment}
            setModalDeleteCommentOnComment={setModalDeleteCommentOnComment}
            modalShowLikesPost={modalShowLikesPost}
            setModalShowLikesPost={setModalShowLikesPost}
            modalShowLikesComment={modalShowLikesComment}
            setModalShowLikesComment={setModalShowLikesComment}
            setModalPostDeleted={setModalPostDeleted}
            modalCommentDeletedInCreate={modalCommentDeletedInCreate}
            setModalCommentDeletedInCreate={setModalCommentDeletedInCreate}
            modalEditUserName={modalEditUserName}
            modalEditProfilePhoto={modalEditProfilePhoto}
            modalEditName={modalEditName}
          />
        )}
      </div>

      {modalEditProfilePhoto ? (
        <ModalChangePhoto setModalEditProfilePhoto={setModalEditProfilePhoto} />
      ) : null}

      {modalEditUserName ? (
        <ModalChangeUserName setModalEditUserName={setModalEditUserName} />
      ) : null}

      {modalEditName ? (
        <ModalChangeName setModalEditName={setModalEditName} />
      ) : null}

      {modalEditBio ? (
        <ModalChangeBio setModalEditBio={setModalEditBio} />
      ) : null}

      {modalChangePassword ? (
        <ModalChangePassword setModalChangePassword={setModalChangePassword} />
      ) : null}

      {modalChangeEmail ? (
        <ModalChangeEmail
          setModalChangeEmail={setModalChangeEmail}
          setVerify={setVerify}
        />
      ) : null}

      {modalChangePublic ? (
        <ModalChangePublic
          setModalChnagePublic={setModalChnagePublic}
          setCountFollowers={setCountFollowers}
          countFollowers={countFollowers}
          setCountFollowing={setCountFollowing}
          countFollowing={countFollowing}
          setCountFollowersRequest={setCountFollowersRequest}
        />
      ) : null}

      {modalMyFollowing ? (
        <ModalMyFollowing
          setModalMyFollowing={setModalMyFollowing}
          countFollowing={countFollowing}
          setCountFollowing={setCountFollowing}
          countFollowers={countFollowers}
          setCountFollowers={setCountFollowers}
        />
      ) : null}

      {modalMyFollowers ? (
        <ModalMyFollowers
          setModalMyFollowers={setModalMyFollowers}
          countFollowing={countFollowing}
          setCountFollowing={setCountFollowing}
          countFollowers={countFollowers}
          setCountFollowers={setCountFollowers}
        />
      ) : null}

      {modalMyRequestFollowers ? (
        <ModalMyRequestFollowers
          setModalMyRequestFollowers={setModalMyRequestFollowers}
          countFollowing={countFollowing}
          setCountFollowing={setCountFollowing}
          countFollowers={countFollowers}
          setCountFollowers={setCountFollowers}
          setCountFollowersRequest={setCountFollowersRequest}
          // countFollowersRequest={countFollowersRequest}
        />
      ) : null}

      {modalMyBlock ? (
        <ModalMyBlockUsers
          setModalMyBlock={setModalMyBlock}
          setCountBlock={setCountBlock}
        />
      ) : null}

      {modalAlreadyVerify ? (
        <ModalAlreadyVerify
          setModalAlreadyVerify={setModalAlreadyVerify}
          setModalChangeEmail={setModalChangeEmail}
        />
      ) : null}

      {modalDeleteMyUser ? (
        <ModalDeleteMyUser setModalDeleteMyUser={setModalDeleteMyUser} />
      ) : null}

      {modalAllComments && !modalShowLikesPost && !modalShowLikesComment ? (
        <div
          className={
            (modalDeleteCommentModal ||
              modalDeleteCommentOnCommentModal ||
              modalEditPhotoPostModal ||
              modalDeletePostModal ||
              modalCommentDeleted ||
              modalCommentDeletedInCreate) &&
            !opacityZeroFullPostModal
              ? "opacity-modal"
              : opacityZeroFullPostModal
              ? "opacity-modal-zero"
              : ""
          }
        >
          <ModalFullPost
            setModalEditPhotoPostModal={setModalEditPhotoPostModal}
            modalEditPhotoPostModal={modalEditPhotoPostModal}
            setModalDeletePostModal={setModalDeletePostModal}
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
          />
        </div>
      ) : null}

      {modalEditPhotoPostModal ? (
        <ModalUpdateModal
          setModalEditPhotoPostModal={setModalEditPhotoPostModal}
          setOpacityZero={setOpacityZero}
          setOpacityZeroFullPostModal={setOpacityZeroFullPostModal}
          setModalPostDeleted={setModalPostDeleted}
          setModalAllComments={setModalAllComments}
        />
      ) : null}

      {modalDeletePost ? (
        <ModalDeletePost
          setModalDeletePost={setModalDeletePost}
          postArr={postArr}
          setPostArr={setPostArr}
          totalPosts={totalPosts}
          setTotalPosts={setTotalPosts}
        />
      ) : null}

      {modalDeletePostModal ? (
        <ModalDeletePostModal
          setModalDeletePostModal={setModalDeletePostModal}
          setModalAllComments={setModalAllComments}
          postArr={postArr}
          setPostArr={setPostArr}
          totalPosts={totalPosts}
          setTotalPosts={setTotalPosts}
        />
      ) : null}

      {modalEditPhotoPost ? (
        <ModalUpdate
          setModalPostDeleted={setModalPostDeleted}
          setModalEditPhotoPost={setModalEditPhotoPost}
          setOpacityZero={setOpacityZero}
          postArr={postArr}
        />
      ) : null}

      {modalDeleteComment ? (
        <ModalDeleteComment1
          setModalDeleteComment={setModalDeleteComment}
          setModalPostDeleted={setModalPostDeleted}
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

export default MyProfile;
