import React, { useEffect, useState } from "react";
import "../../../../../Css/Post/Modals/ModalFullPost/Get/ModalFullPostGet.css";
import { postStore } from "../../../../../Store/Post/PostSotre";
import { findPostById } from "../../../../../Services/PostServices/PostGetService";
import Close from "./Buttons/Close";
import BodyPost from "./BodyPost/BodyPost";

const ModalFullPost = ({
  modalEditPhotoPostModal,
  setModalEditPhotoPostModal,
  setModalDeletePostModal,
  modalDeleteCommentModal,
  setModalDeleteCommentModal,
  modalDeleteCommentOnCommentModal,
  setModalDeleteCommentOnCommentModal,
  setModalAllComments,
  modalShowLikesPost,
  setModalShowLikesPost,
  setModalShowLikesComment,
  setModalPostDeleted,
  modalCommentDeleted,
  setModalCommentDeleted,
  modalCommentDeletedInCreate,
  setModalCommentDeletedInCreate,
  user,
  setStatusFollow,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState([]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const fetchData = async () => {
      try {
        await findPostById(postStore.post._id).then((res) => {
          setPost([res.data]);
          setIsLoading(false);
        });
      } catch (err) {
        if (err.response.status === 410) {
          postStore.postDeletedId = postStore.post._id;
          setModalAllComments(false);
          setModalPostDeleted(true);
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!modalEditPhotoPostModal) {
      setPost([postStore.post]);
    }
  }, [modalEditPhotoPostModal]);

  return (
    <>
      {!isLoading ? (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className=" model-border model-block modalFullPostGet">
            <div className="modal-content">
              <div className="modal-header">
                <Close setModalAllComments={setModalAllComments} />
              </div>
              {post.map((item) => {
                return (
                  <BodyPost
                    key={item._id}
                    item={item}
                    setModalDeletePostModal={setModalDeletePostModal}
                    setModalEditPhotoPostModal={setModalEditPhotoPostModal}
                    modalEditPhotoPostModal={modalEditPhotoPostModal}
                    modalDeleteCommentModal={modalDeleteCommentModal}
                    setModalDeleteCommentModal={setModalDeleteCommentModal}
                    modalDeleteCommentOnCommentModal={
                      modalDeleteCommentOnCommentModal
                    }
                    setModalDeleteCommentOnCommentModal={
                      setModalDeleteCommentOnCommentModal
                    }
                    modalShowLikesPost={modalShowLikesPost}
                    setModalShowLikesPost={setModalShowLikesPost}
                    setModalAllComments={setModalAllComments}
                    setModalShowLikesComment={setModalShowLikesComment}
                    setModalPostDeleted={setModalPostDeleted}
                    modalCommentDeleted={modalCommentDeleted}
                    setModalCommentDeleted={setModalCommentDeleted}
                    modalCommentDeletedInCreate={modalCommentDeletedInCreate}
                    setModalCommentDeletedInCreate={
                      setModalCommentDeletedInCreate
                    }
                    user={user}
                    setStatusFollow={setStatusFollow}
                  />
                );
              })}
              <div className="modalFullPostGetEmptryDiv" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalFullPost;
