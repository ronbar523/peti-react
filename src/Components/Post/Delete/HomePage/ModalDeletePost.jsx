import React, { useEffect } from "react";
import Close from "./Buttons/Close";
import Cancel from "./Buttons/Cancel";
import Delete from "./Buttons/Delete";
import "../../../../Css/Post/Delete/ModalDeletePost.css";

const ModalDeletePost = ({
  setModalDeletePost,
  postArr,
  setPostArr,
  totalPosts,
  setTotalPosts,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog model-border model-block modalDeletePostLocation">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="pt-2 px-2">Delete Post</h5>
            <Close setModalDeletePost={setModalDeletePost} />
          </div>
          <div className="modal-body">
            <h6 className="p-4 text-center modalDeletePostText">
              Are you sure you want to delete your post
            </h6>
          </div>

          <div className="modal-footer">
            <Delete
              setModalDeletePost={setModalDeletePost}
              postArr={postArr}
              setPostArr={setPostArr}
              totalPosts={totalPosts}
              setTotalPosts={setTotalPosts}
            />
            <Cancel setModalDeletePost={setModalDeletePost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeletePost;
