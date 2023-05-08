import React from "react";
import { userStore } from "../../../../../../../../../Store/User/UserStore";

const Close = ({ setModalEditProfilePhoto, userPhoto }) => {
  const closeModal = () => {
    document.body.style.overflow = "visible";
    setModalEditProfilePhoto(false);
    userStore.user.photo = userPhoto;
  };

  return (
    <>
      <button className="btn-close" onClick={() => closeModal()} />
    </>
  );
};

export default Close;
