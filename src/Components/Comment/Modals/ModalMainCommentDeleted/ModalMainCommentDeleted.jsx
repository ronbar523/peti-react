import React, { useEffect } from "react";
import "../../../../Css/Comment/Modals/ModalDeleted/ModalDeleted.css";
import Close from "./Buttons/Close";
import Delete from "./Buttons/Delete";
import Continue from "./Buttons/Continue";

const ModalMainCommentDeleted = ({ setModalCommentDeletedInCreate }) => {

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalMessageDeletedCommentLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Message!</h5>
              <Close setModalCommentDeletedInCreate={setModalCommentDeletedInCreate} />
            </div>
            <div className="modal-body">
              <h6 className="p-4 text-center modalMessageDeletedCommentText">
                This main comment it's deleted, you can continue to post your
                comment as main comment
              </h6>
            </div>
            <div className="modal-footer">
              <Delete setModalCommentDeletedInCreate={setModalCommentDeletedInCreate} />
              <Continue setModalCommentDeletedInCreate={setModalCommentDeletedInCreate} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalMainCommentDeleted;
