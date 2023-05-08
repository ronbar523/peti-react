import React, { useEffect } from "react";
import "../../../../../../Css/Comment/Modals/ModalFullPost/Delete/modalFullPostCommentDelete1.css"
import Close from "./Buttons/Close";
import Cancel from "./Buttons/Cancel";
import Delete from "./Buttons/Delete";

const ModalDeleteCommentModal1 = ({ setModalDeleteCommentModal, setModalPostDeleted, setModalAllComments }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog model-border model-block modalFullPostCommentDelete1">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="pt-2 px-2">Delete Comment</h5>
            <Close setModalDeleteCommentModal={setModalDeleteCommentModal} />
          </div>
          <div className="modal-body">
            <h6 className="p-4 text-center modalFullPostCommentDeleteText1">
              Are you sure you want to delete this comment
            </h6>
          </div>

          <div className="modal-footer">
            <Delete setModalDeleteCommentModal={setModalDeleteCommentModal} setModalPostDeleted={setModalPostDeleted} setModalAllComments={setModalAllComments}/>
            <Cancel setModalDeleteCommentModal={setModalDeleteCommentModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteCommentModal1;
