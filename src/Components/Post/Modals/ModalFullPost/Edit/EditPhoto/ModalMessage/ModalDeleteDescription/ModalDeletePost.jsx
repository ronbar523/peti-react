import React from "react";
import "../../../../../../../../Css/Post/Edit/ModalEditPhotoPost/ModalMessagePhotoPost.css"
import Cancel from "./Buttons/Cancel";
import Close from "./Buttons/Close";
import Delete from "./Buttons/Delete";

const ModalDeleteDescription = ({ setModalDelete, setDescription, inputRefDescription }) => {
  return (
    <div className="modal show fade d-block" tabIndex="-1">
      <div className="modal-dialog model-border model-block modalMessagePhotoPostLocation">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="pt-2 px-2">Upload Photo</h5>
            <Close setModalDelete={setModalDelete} inputRefDescription={inputRefDescription} />
          </div>
          <div className="modal-body">
            <h6 className="p-4 text-center modalMessagePhotoPostText">
              Are you sure you want to delete your description?
            </h6>
          </div>

          <div className="modal-footer">

            <Delete setModalDelete={setModalDelete} setDescription={setDescription} inputRefDescription={inputRefDescription}/>
            <Cancel setModalDelete={setModalDelete} inputRefDescription={inputRefDescription}/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteDescription;
