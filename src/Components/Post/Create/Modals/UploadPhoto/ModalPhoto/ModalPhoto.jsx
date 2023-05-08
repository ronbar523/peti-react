import React, { useEffect, useRef, useState } from "react";
import "../../../../../../Css/Post/Create/ModalCreatePhotoPost/ModalPhotoPhotoPost.css"
import { uploadPhoto } from "../../../../../../Services/UserServices/UserPostService";
import ImageInput from "./Inputs/Image";
import Close from "./Buttons/Close";
import ImageButton from "./Buttons/Image";
import Done from "./Buttons/Done";
import Delete from "./Buttons/Delete";

const ModalPhoto = ({
  photo,
  setPhoto,
  setModalDeletePost,
  setModalPhoto,
  uploaded,
  setUploaded,
  location,
  description,
  category,
  userTaged,
  setModalCreatePhotoPost,
  modalDeletePost,
}) => {
  const inputRef = useRef();

  const [isLoadingPhoto, setIsLoadingPhoto] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, [])

  useEffect(() => {
    if (photo.name !== undefined) {
      const formData = new FormData();
      formData.append("photo", photo);

      const fetchData = async () => {
        try {
          await uploadPhoto(formData).then((res) => 
          setPhoto(res.data.photo));
          setUploaded(true);
        } catch {
          window.location.reload();
        }
      };
      setIsLoadingPhoto(false);
      fetchData().catch(console.error);
    }
  }, [photo]);

  return (
    <>
      <div
        className={
          modalDeletePost
            ? "modal show fade d-block modalPhotoPhotoPostLocation opacity-modal "
            : "modal show fade d-block modalPhotoPhotoPostLocation"
        }
        tabIndex="-1"
      >
        <div className="modal-dialog model-border model-block">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Upload Photo</h5>
              <Close
                setModalDeletePost={setModalDeletePost}
                setModalPhoto={setModalPhoto}
                setModalCreatePhotoPost={setModalCreatePhotoPost}
                uploaded={uploaded}
                location={location}
                description={description}
                category={category}
                userTaged={userTaged}
              />
            </div>
            <ImageButton
              photo={photo}
              uploaded={uploaded}
              inputRef={inputRef}
              isLoadingPhoto={isLoadingPhoto}
            />

            <hr className="modalPhotoPhotoPostHr" />

            <div>
              <>
                <ImageInput
                  inputRef={inputRef}
                  setPhoto={setPhoto}
                  isLoadingPhoto={isLoadingPhoto}
                  setIsLoadingPhoto={setIsLoadingPhoto}
                />

                <Done setModalPhoto={setModalPhoto} uploaded={uploaded} />

                <Delete
                  uploaded={uploaded}
                  setUploaded={setUploaded}
                  setPhoto={setPhoto}
                  setIsLoadingPhoto={setIsLoadingPhoto}
                />
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPhoto;
