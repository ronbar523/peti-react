import React, { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../../../../../../Store/User/UserStore";
import Close from "./Buttons/Close";
import Bio from "./Inputs/Bio";
import Delete from "./Buttons/Delete";
import Update from "./Buttons/Update";

const ModalChangeBio = ({ setModalEditBio }) => {
  const inputRef = useRef();

  const [bio, setBio] = useState(userStore.user.bio);
  const [deleteButton, setDeleteButton] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    inputRef.current.focus();
  }, []);

  return (
    <>
      {!userStore.isLogin && <Navigate to="/" />}
      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block modalEditLocation">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Edit Bio</h5>
              <Close setModalEditBio={setModalEditBio} />
            </div>
            <div className="modal-body">
              <Bio
                bio={bio}
                setBio={setBio}
                inputRef={inputRef}
                setDeleteButton={setDeleteButton}
              />
            </div>

            <hr className="modalChangeBioHr" />

            <div>
              <Delete
                deleteButton={deleteButton}
                setModalEditBio={setModalEditBio}
              />
              <Update bio={bio} setModalEditBio={setModalEditBio} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalChangeBio;
