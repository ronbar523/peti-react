import React from "react";
import "../../../../../../../../Css/Post/Modals/ModalFullPost/Edit/ModalEditPhotoPost/ModalFullPostModalMessagePhotoPost.css"
import Cancel from "./Buttons/Cancel";
import Close from "./Buttons/Close";
import Delete from "./Buttons/Delete";

const ModalCancelEdit = ({ setModalCancelEditPost, setModalEditPhotoPostModal }) => {
  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog model-border model-block modalFullPostModalMessagePhotoPostLocation">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="pt-2 px-2">Upload Photo</h5>
            <Close setModalCancelEditPost={setModalCancelEditPost} />
          </div>
          <div className="modal-body">
            <h6 className="p-4 text-center modalFullPostModalMessagePhotoPostText">
              Are you sure you want to cancel your change?
            </h6>
          </div>

          <div className="modal-footer">
            <Delete
              setModalEditPhotoPostModal={setModalEditPhotoPostModal}
              setModalCancelEditPost={setModalCancelEditPost}
            />
            <Cancel setModalCancelEditPost={setModalCancelEditPost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCancelEdit;
