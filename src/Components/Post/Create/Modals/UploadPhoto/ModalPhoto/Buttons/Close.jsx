import React from "react";

const Close = ({
  setModalDeletePost,
  setModalPhoto,
  uploaded,
  location,
  description,
  category,
  userTaged,
  setModalCreatePhotoPost
}) => {
  const closeModal = () => {
    if (
      !uploaded &&
      location === "" &&
      description === "" &&
      category.length === 0 &&
      userTaged.length === 0
    ) {
      setModalPhoto(false);
      setModalCreatePhotoPost(false);
      document.body.style.overflow = "visible";
    } else {
      setModalDeletePost(true);
    }
  };

  return (
    <>
      <button className="btn-close" onClick={() => closeModal()} />
    </>
  );
};

export default Close;
