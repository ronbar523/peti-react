import React, { useEffect } from "react";
import Close from "./Buttons/Close";
import Cancel from "./Buttons/Cancel";
import Delete from "./Buttons/Delete";
import "../../../../../Css/Post/Modals/ModalFullPost/Delete/ModalFullPostDeletePost.css";

const ModalDeletePostModal = ({
  setModalDeletePostModal,
  postArr,
  setPostArr,
  setModalAllComments,
  totalPosts,
  setTotalPosts,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog model-border model-block modalFullPostDeletePostLocation">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="pt-2 px-2">Delete Post</h5>
            <Close setModalDeletePostModal={setModalDeletePostModal} />
          </div>
          <div className="modal-body">
            <h6 className="p-4 text-center modalFullPostDeletePostText">
              Are you sure you want to delete your post
            </h6>
          </div>

          <div className="modal-footer">
            <Delete
              setModalDeletePostModal={setModalDeletePostModal}
              postArr={postArr}
              setPostArr={setPostArr}
              setModalAllComments={setModalAllComments}
              totalPosts={totalPosts}
              setTotalPosts={setTotalPosts}
            />
            <Cancel setModalDeletePostModal={setModalDeletePostModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeletePostModal;
