import React, { useEffect } from "react";
import "../../../../../../Css/Comment/Modals/ModalFullPost/Delete/modalFullPostCommentDelete2.css"
import Close from "./Buttons/Close";
import Cancel from "./Buttons/Cancel";
import Delete from "./Buttons/Delete";

const ModalDeleteCommentModal2 = ({ setModalDeleteCommentOnCommentModal, setModalPostDeleted, setModalCommentDeleted }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);


  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog model-border model-block modalFullPostCommentDelete2">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="pt-2 px-2">Delete Comment</h5>
            <Close setModalDeleteCommentOnCommentModal={setModalDeleteCommentOnCommentModal} />
          </div>
          <div className="modal-body">
            <h6 className="p-4 text-center modalFullPostCommentDeleteText2">
              Are you sure you want to delete this comment
            </h6>
          </div>

          <div className="modal-footer">
            <Delete setModalDeleteCommentOnCommentModal={setModalDeleteCommentOnCommentModal} setModalPostDeleted={setModalPostDeleted} setModalCommentDeleted={setModalCommentDeleted}/>
            <Cancel setModalDeleteCommentOnCommentModal={setModalDeleteCommentOnCommentModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteCommentModal2;
