import React, { useEffect, useState } from "react";
import { Avatar, IconButton, Menu } from "@mui/material";
import ModalUser from "./Modal/ModalUser";
import { userStore } from "../../../../../../../Store/User/UserStore";

const ProfilePhoto = ({
  item,
  setModalDeletePost,
  setModalEditPhotoPost,
  user,
  setStatusFollow,
  modalEditProfilePhoto,
  modalEditName,
  modalEditUserName,
}) => {
  const [disabledClose, setDisabledClose] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const [profilePohto, setProfilePohto] = useState(item.userProfile);
  const isMenuOpen = Boolean(anchorEl);

  const openModal = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(false);
  };

  useEffect(() => {
    if (item.createdBy === userStore.user._id) {
      setProfilePohto(userStore.user.photo);
      item.userProfile = userStore.user.photo;
    }
  }, [modalEditProfilePhoto]);

  return (
    <>
      <IconButton
        sx={{ width: 55, height: 55 }}
        onMouseEnter={(event) => openModal(event)}
      >
        <Avatar src={profilePohto} sx={{ width: 55, height: 55 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id="primary-search-account-menu"
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        className="modalUsersInfoMenu"
        open={isMenuOpen}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
        onClose={handleMenuClose}
      >
        {anchorEl ? (
          <ModalUser
            setAnchorEl={setAnchorEl}
            item={item}
            disabledClose={disabledClose}
            setDisabledClose={setDisabledClose}
            setModalDeletePost={setModalDeletePost}
            setModalEditPhotoPost={setModalEditPhotoPost}
            user={user}
            setStatusFollow={setStatusFollow}
            modalEditProfilePhoto={modalEditProfilePhoto}
            modalEditUserName={modalEditUserName}
            modalEditName={modalEditName}
          />
        ) : null}
      </Menu>
    </>
  );
};

export default ProfilePhoto;
