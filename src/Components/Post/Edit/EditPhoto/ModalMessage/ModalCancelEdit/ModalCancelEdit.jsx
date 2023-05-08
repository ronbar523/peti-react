import React from "react";
import "../../../../../../Css/Post/Edit/ModalEditPhotoPost/ModalMessagePhotoPost.css"
import Cancel from "./Buttons/Cancel";
import Close from "./Buttons/Close";
import Delete from "./Buttons/Delete";

const ModalCancelEdit = ({ setModalCancelEditPost, setModalEditPhotoPost, setOpacityZero }) => {
  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog model-border model-block modalMessagePhotoPostLocation">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="pt-2 px-2">Upload Photo</h5>
            <Close setModalCancelEditPost={setModalCancelEditPost} />
          </div>
          <div className="modal-body">
            <h6 className="p-4 text-center modalMessagePhotoPostText">
              Are you sure you want to cancel your change?
            </h6>
          </div>

          <div className="modal-footer">
            <Delete
              setModalEditPhotoPost={setModalEditPhotoPost}
              setModalCancelEditPost={setModalCancelEditPost}
              setOpacityZero={setOpacityZero}
            />
            <Cancel setModalCancelEditPost={setModalCancelEditPost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCancelEdit;
