import React, { useEffect, useState } from "react";
import { Menu } from "@mui/material";
import ModalUser from "./Modal/ModalUser";
import { userStore } from "../../../../../../../Store/User/UserStore";

const ProfileUserName = ({
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
  const [userName, setUserName] = useState(item.createdByName);
  const isMenuOpen = Boolean(anchorEl);

  const openModal = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    if (!disabledClose) {
      setAnchorEl(false);
    }
  };

  useEffect(() => {
    if (item.createdBy === userStore.user._id) {
    setUserName(userStore.user.userName);
    item.userName = userStore.user.userName;
    }
  }, [modalEditUserName]);

  return (
    <>
      <button
        className="homePagePostCardButtonName"
        onMouseEnter={(event) => openModal(event)}
      >
        {userName}
      </button>

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
        sx={{
          mt: "-3px",
        }}
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

export default ProfileUserName;
