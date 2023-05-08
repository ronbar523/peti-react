import React, { useEffect, useRef, useState } from "react";
import "../../../../../../../Css/Post/Modals/ModalFullPost/Edit/ModalEditPhotoPost/ModalFullPostModalUploadPhotoPost.css";
import { postStore } from "../../../../../../../Store/Post/PostSotre";
import { findTags } from "../../../../../../../Services/UserServices/UserGetService";
import { Box } from "@mui/system";
import Close from "./Buttons/ModalButtons/Close";
import Update from "./Buttons/ModalButtons/Update";

import Photo from "./Buttons/PostButtons/Photo";
import Category from "./Buttons/PostButtons/Category";
import CategortInput from "./Inputs/Category";
import LocationButton from "./Buttons/PostButtons/Location";
import LocationInput from "./Inputs/Location";
import DescriptionButton from "./Buttons/PostButtons/Description";
import DescriptionInput from "./Inputs/Description";
import TagInput from "./Inputs/Tag";
import TagButton from "./Buttons/PostButtons/Tag";

import ModalCategory from "../ModalCategory/ModalCategory";
import ModalDescription from "../ModalDescription/ModalDescription";
import ModalTag from "../ModalTag/ModalTag";
import ModalDeleteDescription from "../ModalMessage/ModalDeleteDescription/ModalDeletePost";
import ModalLocation from "../ModalLocation/ModalLocation";
import ModalCancelEdit from "../ModalMessage/ModalCancelEdit/ModalCancelEdit";
import Cancel from "./Buttons/ModalButtons/Cancel";
import ModalReload from "../ModalReload/ModalRelaod";

const ModalUpdateModal = ({ setModalEditPhotoPostModal, setOpacityZero, setOpacityZeroFullPostModal, setModalPostDeleted, setModalAllComments }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(postStore.post.location);
  const [description, setDescription] = useState(postStore.post.description);
  const [category, setCategory] = useState(postStore.post.category);
  const [userTaged, setUserTaged] = useState([]);

  const [modalTag, setModalTag] = useState(false);
  const [modalDescription, setModalDescription] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalCancelEditPost, setModalCancelEditPost] = useState(false);
  const [modalCategory, setModalCategory] = useState(false);
  const [modalLocation, setModalLocation] = useState(false);

  const inputRefDescription = useRef();

  useEffect(() => {
    if(modalCancelEditPost || modalDelete){
      setOpacityZero(true) 
      setOpacityZeroFullPostModal(true)
    } else {
      setOpacityZero(false)
      setOpacityZeroFullPostModal(false)
    }
  }, [modalCancelEditPost, modalDelete]) 

  useEffect(() => {
    const fetchData = async () => {
      try {
        await findTags(postStore.post.arrTag).then((res) => {
          setUserTaged(res.data.usersArr);
        });

        setIsLoading(false);
      } catch {
        window.location.reload();
      }
    };

    fetchData().catch(console.error);
  }, []);



  return (
    <>
      <div
        className={
          modalDelete
            ? "modal show fade d-block modalFullPostModalEditPhotoPostLocation opacity-modal-zero"
            : modalCancelEditPost 
            ? "modal show fade d-block modalFullPostModalEditPhotoPostLocation opacity-modal"
            : "modal show fade d-block modalFullPostModalEditPhotoPostLocation"
        }
        tabIndex="-1"
      >
        <div className="modal-dialog model-border model-block">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="pt-2 px-2">Edit Photo</h5>
              <Close setModalCancelEditPost={setModalCancelEditPost} />
            </div>

            {!isLoading ? (
              <Box className="modalFullPostModalEditPhotoPostBoxBody">
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

                <hr className="modalFullPostModalEditPhotoPostHrBody" />

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

                <hr className="modalFullPostModalEditPhotoPostHrBody" />

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

                <hr className="modalFullPostModalEditPhotoPostHrBody" />

                {userTaged.length === 0 ? (
                  <TagButton setModalTag={setModalTag} />
                ) : (
                  <TagInput userTaged={userTaged} setModalTag={setModalTag} />
                )}

                <hr className="modalFullPostModalEditPhotoPostHrBody" />

                <Photo />
              </Box>
            ) : (
              <ModalReload />
            )}

            <hr className="modalFullPostModalEditPhotoPostHrFotter" />


            <div>
              <Cancel setModalCancelEditPost={setModalCancelEditPost} />
              <Update
                description={description}
                category={category}
                location={location}
                userTaged={userTaged}
                setModalEditPhotoPostModal={setModalEditPhotoPostModal}
                setModalPostDeleted={setModalPostDeleted}
                setModalAllComments={setModalAllComments}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
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

        {modalCancelEditPost ? (
          <ModalCancelEdit
            setModalCancelEditPost={setModalCancelEditPost}
            setModalEditPhotoPostModal={setModalEditPhotoPostModal}
          />
        ) : null}
      </div>
    </>
  );
};

export default ModalUpdateModal;
