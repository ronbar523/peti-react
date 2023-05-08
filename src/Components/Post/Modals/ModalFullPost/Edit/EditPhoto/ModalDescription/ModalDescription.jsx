import React from "react";
import "../../../../../../../Css/Post/Modals/ModalFullPost/Edit/ModalEditPhotoPost/ModalFullPostModalDescriptionPhotoPost.css"
import Delete from "./Buttons/Delete";
import Close from "./Buttons/Close";
import Done from "./Buttons/Done";
import Description from "./Inputs/Description";

const ModalDescription = ({
  setModalDescription,
  description,
  setDescription,
  modalDelete,
  setModalDelete,
  inputRefDescription
}) => {
  return (
    <>
      <div
        className={
          modalDelete
            ? "modal show fade d-block modalFullPostModalDescriptionPhotoPostLocation opacity-modal"
            : "modal show fade d-block modalFullPostModalDescriptionPhotoPostLocation"
        }
        tabIndex="-1"
      >
        <div className="modal-dialog model-border model-block">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Upload Photo</h5>
              <Close setModalDescription={setModalDescription} />
            </div>

            <Description
              description={description}
              setDescription={setDescription}
              inputRefDescription={inputRefDescription}
            />

            <hr className="modalFullPostModalDescriptionPhotoPostHr" />

            <div>
              <Delete
                description={description}
                setDescription={setDescription}
                setModalDelete={setModalDelete}
                inputRefDescription={inputRefDescription}
              />

              <Done setModalDescription={setModalDescription} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDescription;
