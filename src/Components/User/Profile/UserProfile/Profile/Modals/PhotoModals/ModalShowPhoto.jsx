import React from "react";
import CloseB from "./Buttons/CloseB";
import CloseA from "./Buttons/CloseA";

const ModalShowPhoto = ({ user, setModalShowPhoto }) => {

  return (
    <div
      className="modal show fade d-block modalChangePhotoLocation"
      tabIndex="-1"
    >
      <div className="modal-dialog model-border model-block">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="pt-2 px-2">{user.userName}</h5>
            <CloseA setModalShowPhoto={setModalShowPhoto} />
          </div>

          <div className="modalUserPhotoBody">
            <img src={user.photo} className="modalUserPhotoPhoto" />
          </div>

          <div className="modal-footer">
            <CloseB setModalShowPhoto={setModalShowPhoto} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalShowPhoto;
