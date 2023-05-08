import React, { useEffect } from "react";
import "../../../../Css/Post/Modals/ModalDeleted/ModalDeleted.css"
import CloseA from "./Buttons/CloseA";
import CloseB from "./Buttons/CloseB";

const ModalPostDeleted = ({ setModalPostDeleted }) => {
    
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalMessageDeletedPostLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Message!</h5>
              <CloseA setModalPostDeleted={setModalPostDeleted} />
            </div>
            <div className="modal-body">
              <h6 className="p-4 text-center modalMessagePhotoPostText">
                The post is been deleted
              </h6>
            </div>
            <div className="modal-footer">
              <CloseB setModalPostDeleted={setModalPostDeleted} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPostDeleted;
