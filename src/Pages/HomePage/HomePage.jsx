import React, { useEffect, useState } from "react";
import { postStore } from "../../Store/Post/PostSotre";
import CardCreatePost from "../../Components/Post/Create/Card/CardCreatePost";
import ModalUpload from "../../Components/Post/Create/Modals/UploadPhoto/ModalUpload/ModalUpload";
import ModalDeletePost from "../../Components/Post/Delete/HomePage/ModalDeletePost";
import ModalUpdate from "../../Components/Post/Edit/EditPhoto/ModalUpdate/ModalUpdate";
import CardPost from "../../Components/Post/Get/HomePage/CardPost";
import ModalFullPost from "../../Components/Post/Modals/ModalFullPost/Get/ModalFullPost";
import ModalDeleteComment1 from "../../Components/Comment/Delete/CommentOnPost/ModalDeleteComment1";
import ModalDeleteComment2 from "../../Components/Comment/Delete/CommentOnComment/ModalDeleteComment2";
import ModalDeleteCommentModal1 from "../../Components/Comment/Modals/ModalFullPost/Delete/CommentOnPost/ModalDeleteCommentModal1";
import ModalDeleteCommentModal2 from "../../Components/Comment/Modals/ModalFullPost/Delete/CommentOnComment/ModalDeleteCommentModal2";
import ModalUpdateModal from "../../Components/Post/Modals/ModalFullPost/Edit/EditPhoto/ModalUpdate/ModalUpdateModal";
import ModalDeletePostModal from "../../Components/Post/Modals/ModalFullPost/Delete/ModalDeletePostModal";
import ModalLikesPost from "../../Components/Post/Modals/ModalLikes/ModalLikes";
import ModalLikesComment from "../../Components/Comment/Modals/ModalLikes/ModalLikes";
import ModalPostDeleted from "../../Components/Post/Modals/ModalPostDeleted/ModalPostDeleted";
import ModalCommentDeleted from "../../Components/Comment/Modals/ModalCommentDeleted/ModalCommentDeleted";
import ModalMainCommentDeleted from "../../Components/Comment/Modals/ModalMainCommentDeleted/ModalMainCommentDeleted";

const HomePage = ({ modalAllComments, setModalAllComments }) => {
  //   const [modalCreateTextPost, setModalCreateTextPost] = useState(false);
  //   const [modalCreateVideoPost, setModalCreateVideoPost] = useState(false);
  const [modalCreatePhotoPost, setModalCreatePhotoPost] = useState(false);
  const [modalDeletePost, setModalDeletePost] = useState(false);
  const [modalDeletePostModal, setModalDeletePostModal] = useState(false);
  const [modalEditPhotoPost, setModalEditPhotoPost] = useState(false);
  const [modalEditPhotoPostModal, setModalEditPhotoPostModal] = useState(false);
  const [postArr, setPostArr] = useState([]);
  const [modalDeleteComment, setModalDeleteComment] = useState(false);
  const [modalDeleteCommentOnComment, setModalDeleteCommentOnComment] =
    useState(false);

  const [modalDeleteCommentModal, setModalDeleteCommentModal] = useState(false);
  const [
    modalDeleteCommentOnCommentModal,
    setModalDeleteCommentOnCommentModal,
  ] = useState(false);

  const [opacityZero, setOpacityZero] = useState(false);
  const [opacityZeroFullPostModal, setOpacityZeroFullPostModal] =
    useState(false);

  const [modalShowLikesPost, setModalShowLikesPost] = useState(false);
  const [modalShowLikesComment, setModalShowLikesComment] = useState(false);

  const [modalPostDeleted, setModalPostDeleted] = useState(false);
  const [modalCommentDeleted, setModalCommentDeleted] = useState(false);
  const [modalCommentDeletedInCreate, setModalCommentDeletedInCreate] =
    useState(false);

  useEffect(() => {
    if (
      !modalEditPhotoPost ||
      !modalEditPhotoPostModal ||
      modalCreatePhotoPost
    ) {
      setOpacityZero(false);
    }
  }, [modalEditPhotoPost, modalEditPhotoPostModal, modalCreatePhotoPost]);

  useEffect(() => {
    if (!modalEditPhotoPostModal) {
      setOpacityZeroFullPostModal(false);
    }
  }, [modalEditPhotoPostModal]);

  useEffect(() => {
    if (postStore.postDeletedId !== "") {
      let arr = postArr;
      for (let x = 0; x < arr.length; x++) {
        if (arr[x]._id === postStore.postDeletedId) {
          arr.splice(x, 1);
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
      <div
        className={
          (modalCommentDeleted && modalAllComments) ||
          modalCommentDeletedInCreate
            ? "opacity-modal-zero"
            : (modalCreatePhotoPost ||
                modalDeletePost ||
                modalEditPhotoPost ||
                modalAllComments ||
                modalDeleteComment ||
                modalPostDeleted ||
                modalCommentDeleted ||
                modalShowLikesPost ||
                modalShowLikesComment ||
                modalDeleteCommentOnComment) &&
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
        <CardCreatePost setModalCreatePhotoPost={setModalCreatePhotoPost} />

        <CardPost
          setModalDeletePost={setModalDeletePost}
          postArr={postArr}
          setPostArr={setPostArr}
          setModalEditPhotoPost={setModalEditPhotoPost}
          modalEditPhotoPost={modalEditPhotoPost}
          modalAllComments={modalAllComments}
          setModalAllComments={setModalAllComments}
          modalDeleteComment={modalDeleteComment}
          setModalDeleteComment={setModalDeleteComment}
          modalDeleteCommentOnComment={modalDeleteCommentOnComment}
          setModalDeleteCommentOnComment={setModalDeleteCommentOnComment}
          modalShowLikesPost={modalShowLikesPost}
          setModalShowLikesPost={setModalShowLikesPost}
          modalShowLikesComment={modalShowLikesComment}
          setModalShowLikesComment={setModalShowLikesComment}
          setModalPostDeleted={setModalPostDeleted}
          modalCommentDeleted={modalCommentDeleted}
          setModalCommentDeleted={setModalCommentDeleted}
          modalCommentDeletedInCreate={modalCommentDeletedInCreate}
          setModalCommentDeletedInCreate={setModalCommentDeletedInCreate}
        />
      </div>

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

      {modalCreatePhotoPost ? (
        <ModalUpload
          setModalCreatePhotoPost={setModalCreatePhotoPost}
          postArr={postArr}
          setPostArr={setPostArr}
          setOpacityZero={setOpacityZero}
        />
      ) : null}

      {modalEditPhotoPost ? (
        <ModalUpdate
          setModalEditPhotoPost={setModalEditPhotoPost}
          setOpacityZero={setOpacityZero}
          postArr={postArr}
          setModalPostDeleted={setModalPostDeleted}
        />
      ) : null}

      {modalEditPhotoPostModal ? (
        <ModalUpdateModal
          setModalEditPhotoPostModal={setModalEditPhotoPostModal}
          setOpacityZero={setOpacityZero}
          setOpacityZeroFullPostModal={setOpacityZeroFullPostModal}
          setModalAllComments={setModalAllComments}
          setModalPostDeleted={setModalPostDeleted}
        />
      ) : null}

      {modalDeletePost ? (
        <ModalDeletePost
          setModalDeletePost={setModalDeletePost}
          postArr={postArr}
          setPostArr={setPostArr}
        />
      ) : null}

      {modalDeletePostModal ? (
        <ModalDeletePostModal
          setModalDeletePostModal={setModalDeletePostModal}
          setModalAllComments={setModalAllComments}
          postArr={postArr}
          setPostArr={setPostArr}
        />
      ) : null}

      {modalDeleteComment ? (
        <ModalDeleteComment1
          setModalDeleteComment={setModalDeleteComment}
          setModalPostDeleted={setModalPostDeleted}
          setModalCommentDeleted={setModalCommentDeleted}
        />
      ) : null}

      {modalDeleteCommentOnComment ? (
        <ModalDeleteComment2
          setModalDeleteCommentOnComment={setModalDeleteCommentOnComment}
          setModalPostDeleted={setModalPostDeleted}
          setModalCommentDeleted={setModalCommentDeleted}
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
          setModalCommentDeleted={setModalCommentDeleted}
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
          setModalPostDeleted={setModalPostDeleted}
          setModalCommentDeleted={setModalCommentDeleted}
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

export default HomePage;
