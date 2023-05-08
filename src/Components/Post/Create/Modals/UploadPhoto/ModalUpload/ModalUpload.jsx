import React, { useEffect, useRef, useState } from "react";
import "../../../../../../Css/Post/Create/ModalCreatePhotoPost/ModalUploadPhotoPost.css";
import { Box } from "@mui/system";

import Close from "./Buttons/ModalButtons/Close";
import Back from "./Buttons/ModalButtons/Back";
import Upload from "./Buttons/ModalButtons/Upload";

import Photo from "./Buttons/PostButtons/Photo";
import Category from "./Buttons/PostButtons/Category";
import CategortInput from "./Inputs/Category";
import LocationButton from "./Buttons/PostButtons/Location";
import LocationInput from "./Inputs/Location";
import DescriptionButton from "./Buttons/PostButtons/Description";
import DescriptionInput from "./Inputs/Description";
import TagInput from "./Inputs/Tag";
import TagButton from "./Buttons/PostButtons/Tag";

import ModalPhoto from "../ModalPhoto/ModalPhoto";
import ModalCategory from "../ModalCategory/ModalCategory";
import ModalDescription from "../ModalDescription/ModalDescription";
import ModalTag from "../ModalTag/ModalTag";
import ModalDeletePost from "../ModalMessage/ModalDeletePost/ModalDeletePost";
import ModalDeleteDescription from "../ModalMessage/ModalDeleteDescription/ModalDeletePost";
import ModalLocation from "../ModalLocation/ModalLocation";

const ModalUpload = ({
  setModalCreatePhotoPost,
  postArr,
  setPostArr,
  setOpacityZero
}) => {
  const [photo, setPhoto] = useState(
    "https://t4.ftcdn.net/jpg/02/83/72/41/360_F_283724163_kIWm6DfeFN0zhm8Pc0xelROcxxbAiEFI.jpg"
  );

  const [uploaded, setUploaded] = useState(false);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [userTaged, setUserTaged] = useState([]);

  const [modalTag, setModalTag] = useState(false);
  const [modalDescription, setModalDescription] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(true);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalDeletePost, setModalDeletePost] = useState(false);
  const [modalCategory, setModalCategory] = useState(false);
  const [modalLocation, setModalLocation] = useState(false);

  const inputRefDescription = useRef();

  useEffect(() => {
    if(modalDeletePost || modalDelete){
      setOpacityZero(true)
    } else {
      setOpacityZero(false)
    }
  }, [modalDeletePost, modalDelete]) 

  return (
    <>
      <div
        className={
          modalDelete || modalPhoto
            ? "modal show fade d-block modalUploadPhotoPostLocation opacity-modal-zero"
            : modalDeletePost
            ? "modal show fade d-block modalUploadPhotoPostLocation opacity-modal"
            : "modal show fade d-block modalUploadPhotoPostLocation"
        }
        tabIndex="-1"
      >
        <div className="modal-dialog model-border model-block">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Upload Photo</h5>
              <Close setModalDeletePost={setModalDeletePost} />
            </div>

            <Box className="modalUploadPhotoPostBoxBody">
              {category.length === 0 ? (
                <Category
                  setModalCategory={setModalCategory}
                  category={category}
                />
              ) : (
                <CategortInput
                  category={category}
                  modalCategory={modalCategory}
                  setModalCategory={setModalCategory}
                />
              )}

              <hr className="modalUploadPhotoPostHrBody" />

              {description === "" ? (
                <DescriptionButton
                  setModalDescription={setModalDescription}
                  description={description}
                />
              ) : (
                <DescriptionInput
                  description={description}
                  modalDescription={modalDescription}
                  setModalDescription={setModalDescription}
                />
              )}

              <hr className="modalUploadPhotoPostHrBody" />

              {location === "" ? (
                <LocationButton
                  location={location}
                  setLocation={setLocation}
                  setModalLocation={setModalLocation}
                />
              ) : (
                <LocationInput
                  location={location}
                  modalLocation={modalLocation}
                  setModalLocation={setModalLocation}
                />
              )}

              <hr className="modalUploadPhotoPostHrBody" />

              {userTaged.length === 0 ? (
                <TagButton setModalTag={setModalTag} />
              ) : (
                <TagInput userTaged={userTaged} setModalTag={setModalTag} />
              )}

              <hr className="modalUploadPhotoPostHrBody" />

              <Photo photo={photo} setModalPhoto={setModalPhoto} />
            </Box>

            <hr className="modalUploadPhotoPostHrFotter" />

            <div>
              <Back setModalPhoto={setModalPhoto} />
              <Upload
                description={description}
                category={category}
                location={location}
                photo={photo}
                userTaged={userTaged}
                setModalCreatePhotoPost={setModalCreatePhotoPost}
                
                postArr={postArr}
                setPostArr={setPostArr}
              />
            </div>
          </div>
        </div>
      </div>

      {modalPhoto ? (
        <ModalPhoto
          photo={photo}
          setPhoto={setPhoto}
          setModalPhoto={setModalPhoto}
          setModalDeletePost={setModalDeletePost}
          setModalCreatePhotoPost={setModalCreatePhotoPost}
          uploaded={uploaded}
          setUploaded={setUploaded}
          location={location}
          description={description}
          category={category}
          userTaged={userTaged}
          modalDeletePost={modalDeletePost}
        />
      ) : null}

      {modalDescription ? (
        <ModalDescription
          description={description}
          setDescription={setDescription}
          setModalDescription={setModalDescription}
          modalDelete={modalDelete}
          setModalDelete={setModalDelete}
          inputRefDescription={inputRefDescription}
        />
      ) : null}

      {modalTag ? (
        <ModalTag
          setModalTag={setModalTag}
          userTaged={userTaged}
          setUserTaged={setUserTaged}
        />
      ) : null}

      {modalDelete ? (
        <ModalDeleteDescription
          setModalDelete={setModalDelete}
          setDescription={setDescription}
          inputRefDescription={inputRefDescription}
        />
      ) : null}

      {modalDeletePost ? (
        <ModalDeletePost
          setModalDeletePost={setModalDeletePost}
          setModalCreatePhotoPost={setModalCreatePhotoPost}
        />
      ) : null}

      {modalCategory ? (
        <ModalCategory
          setModalCategory={setModalCategory}
          category={category}
          setCategory={setCategory}
        />
      ) : null}

      {modalLocation ? (
        <ModalLocation
          location={location}
          setLocation={setLocation}
          setModalLocation={setModalLocation}
        />
      ) : null}
    </>
  );
};

export default ModalUpload;
