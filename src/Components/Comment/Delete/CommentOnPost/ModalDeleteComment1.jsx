import React, { useEffect } from "react";
import "../../../../Css/Comment/Delete/HomePageCommentDelete1.css";
import Close from "./Buttons/Close";
import Cancel from "./Buttons/Cancel";
import Delete from "./Buttons/Delete";

const ModalDeleteComment1 = ({
  setModalDeleteComment,
  setModalPostDeleted,
  setModalCommentDeleted
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog model-border model-block homePageCommentDelete1">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="pt-2 px-2">Delete Comment</h5>
            <Close setModalDeleteComment={setModalDeleteComment} />
          </div>
          <div className="modal-body">
            <h6 className="p-4 text-center homePageCommentDeleteText1">
              Are you sure you want to delete this comment
            </h6>
          </div>

          <div className="modal-footer">
            <Delete
              setModalDeleteComment={setModalDeleteComment}
              setModalPostDeleted={setModalPostDeleted}
              setModalCommentDeleted={setModalCommentDeleted}
            />
            <Cancel setModalDeleteComment={setModalDeleteComment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteComment1;
