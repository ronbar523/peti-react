import React, { useEffect } from "react";
import "../../../../Css/Comment/Modals/ModalDeleted/ModalDeleted.css"
import CloseA from "./Buttons/CloseA";
import CloseB from "./Buttons/CloseB";

const ModalCommentDeleted = ({ setModalCommentDeleted }) => {
    
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
              <CloseA setModalCommentDeleted={setModalCommentDeleted} />
            </div>
            <div className="modal-body">
              <h6 className="p-4 text-center modalMessageDeletedCommentText">
                The comment is been deleted
              </h6>
            </div>
            <div className="modal-footer">
              <CloseB setModalCommentDeleted={setModalCommentDeleted} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCommentDeleted;
