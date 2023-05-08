import React, { useState } from "react";
import ButtonBase from "@mui/material/ButtonBase";

const ImageButton = ({
  user,
  setModalShowPhoto,
  userBlockMe,
  follow,
  iBlockUser,
}) => {
  const [showDivImage, setShowDivImage] = useState(false);

  return (
    <>
      <ButtonBase
        onClick={() => setModalShowPhoto(true)}
        onMouseEnter={() => setShowDivImage(true)}
        onMouseLeave={() => setShowDivImage(false)}
        disabled={userBlockMe || iBlockUser || (!follow && !user.public)}
        className="userProfilebuttonImage"
      >
        <img
          alt="complex"
          className={
            showDivImage
              ? "userProfileImage profileOpacityImage"
              : "userProfileImage"
          }
          src={user.photo}
        />
      </ButtonBase>

      {showDivImage &&
      !userBlockMe &&
      !iBlockUser &&
      (follow || user.public) ? (
        <div className="userProfileShowImageHover">
          <p className="userProfileShowImageHoverText">Show Photo</p>
        </div>
      ) : null}
    </>
  );
};

export default ImageButton;
