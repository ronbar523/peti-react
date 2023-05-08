import React, { useEffect } from "react";
import "../../../../Css/Comment/Delete/HomePageCommentDelete2.css"
import Close from "./Buttons/Close";
import Cancel from "./Buttons/Cancel";
import Delete from "./Buttons/Delete";

const ModalDeleteComment2 = ({ setModalDeleteCommentOnComment, setModalPostDeleted, setModalCommentDeleted}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);


  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog model-border model-block homePageCommentDelete2">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="pt-2 px-2">Delete Comment</h5>
            <Close setModalDeleteCommentOnComment={setModalDeleteCommentOnComment} />
          </div>
          <div className="modal-body">
            <h6 className="p-4 text-center homePageCommentDeleteText2">
              Are you sure you want to delete this comment
            </h6>
          </div>

          <div className="modal-footer">
            <Delete setModalDeleteCommentOnComment={setModalDeleteCommentOnComment} setModalPostDeleted={setModalPostDeleted} setModalCommentDeleted={setModalCommentDeleted} />
            <Cancel setModalDeleteCommentOnComment={setModalDeleteCommentOnComment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteComment2;
