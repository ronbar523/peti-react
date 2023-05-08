import React from "react";
import { userStore } from "../../../../../../../../../Store/User/UserStore";

const Image = ({ cancelUpload, userPhoto, inputRef }) => {
  const clickOnPhoto = () => {
    inputRef.current.click();
  };

  return (
    <>
      <button className="modalChangePhotoBody" onClick={() => clickOnPhoto()}>
        {!cancelUpload ? (
          <img src={userStore.user.photo} className="modalChangePhotoImage" />
        ) : (
          <img src={userPhoto} className="modalChangePhotoImage" />
        )}
      </button>
    </>
  );
};

export default Image;
