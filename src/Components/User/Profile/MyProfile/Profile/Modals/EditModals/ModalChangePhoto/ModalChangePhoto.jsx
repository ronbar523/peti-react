import React, { useEffect, useState, useRef, useMemo } from "react";
import { Navigate } from "react-router";
import { uploadPhoto } from "../../../../../../../../Services/UserServices/UserPostService";
import { userStore } from "../../../../../../../../Store/User/UserStore";
import Close from "./Buttons/Close";
import Image from "./Buttons/Image";
import Cancel from "./Buttons/Cancel";
import Upload from "./Inputs/Upload";
import Delete from "./Buttons/Delete";
import Update from "./Buttons/Update";
import Change from "./Buttons/Change";

const ModalChangePhoto = ({ setModalEditProfilePhoto }) => {
  const inputRef = useRef();

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPhoto, setIsLoadingPhoto] = useState(false);
  const [cancelUpload, setCancelUpload] = useState(false);
  const [defaultPhoto, setDefaultPhoto] = useState(false);
  const [photo, setPhoto] = useState({});

  const userPhoto = useMemo(() => {
    return userStore.user.photo;
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setIsLoading(false);
    if (
      userStore.user.photo ===
      "https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352062-stock-illustration-default-placeholder-profile-icon.jpg"
    ) {
      setDefaultPhoto(true);
    }
  }, []);

  useEffect(() => {
    if (photo.name !== undefined) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("photo", photo);

      const fetchData = async () => {
        try {
          await uploadPhoto(formData).then(
            (res) => (userStore.user.photo = res.data.photo)
          );
          setIsLoading(false);
          setCancelUpload(false);
        } catch {
          window.location.reload();
        }
      };

      fetchData().catch(console.error);
    }
    setIsLoadingPhoto(false);
  }, [photo]);

  return (
    <>
      {!userStore.isLogin && <Navigate to="/" />}
      {!isLoading ? (
        <div
          className="modal show fade d-block modalChangePhotoLocation"
          tabIndex="-1"
        >
          <div className="modal-dialog model-border model-block">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="pt-2 px-2">Edit Photo</h5>
                <Close
                  setModalEditProfilePhoto={setModalEditProfilePhoto}
                  userPhoto={userPhoto}
                />
              </div>

              <Image
                cancelUpload={cancelUpload}
                userPhoto={userPhoto}
                inputRef={inputRef}
              />

              <hr className="modalChangePhotoHr" />

              <div
                className={
                  !(userStore.user.photo !== userPhoto && !cancelUpload)
                    ? "modalChangePhotoFotter"
                    : ""
                }
              >
                {userStore.user.photo !== userPhoto && !cancelUpload ? (
                  <Cancel
                    userPhoto={userPhoto}
                    setCancelUpload={setCancelUpload}
                  />
                ) : (
                  <>
                    <Change
                      inputRef={inputRef}
                      isLoadingPhoto={isLoadingPhoto}
                      defaultPhoto={defaultPhoto}
                    />
                    <Upload
                      setPhoto={setPhoto}
                      inputRef={inputRef}
                      setIsLoadingPhoto={setIsLoadingPhoto}
                    />
                  </>
                )}

                {!(userStore.user.photo !== userPhoto && !cancelUpload) ? (
                  <Delete
                    setModalEditProfilePhoto={setModalEditProfilePhoto}
                    defaultPhoto={defaultPhoto}
                  />
                ) : (
                  <Update
                    setModalEditProfilePhoto={setModalEditProfilePhoto}
                    photo={photo}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalChangePhoto;
