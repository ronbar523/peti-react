import React, { useState } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../../../../../Store/User/UserStore";
import ButtonBase from "@mui/material/ButtonBase";

const ImageButton = ({ setModalEditProfilePhoto }) => {
  const [editDivImage, setEditDivImage] = useState(false);

  return (
    <>
      {!userStore.isLogin && <Navigate to="/" />}

      <ButtonBase
        onClick={() => setModalEditProfilePhoto(true)}
        onMouseEnter={() => setEditDivImage(true)}
        onMouseLeave={() => setEditDivImage(false)}
        className="myProfileButtonEditImage"
      >
        <img
          alt="complex"
          className={
            editDivImage
              ? "myProfileImage myProfileOpacityImage"
              : "myProfileImage"
          }
          src={userStore.user.photo}
        />
      </ButtonBase>

      {editDivImage ? (
        <div className="myProfileEditImageHover">
          <p className="myProfileEditImageHoverText">Edit photo</p>
        </div>
      ) : null}
    </>
  );
};

export default ImageButton;
