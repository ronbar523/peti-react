import React, { useState } from "react";
import { Avatar, IconButton, Menu } from "@mui/material";
import ModalUser from "./Modal/ModalUser";

const ProfilePhoto = ({
  item,
  setModalDeletePostModal,
  setModalEditPhotoPostModal,
  user,
  setStatusFollow,
}) => {
  const [disabledClose, setDisabledClose] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const isMenuOpen = Boolean(anchorEl);

  const openModal = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    if (!disabledClose) {
      setAnchorEl(false);
    }
  };

  return (
    <>
      <IconButton
        sx={{ width: 45, height: 45 }}
        onMouseEnter={(event) => openModal(event)}
      >
        <Avatar src={item.userProfile} sx={{ width: 45, height: 45 }} />
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
            setModalDeletePostModal={setModalDeletePostModal}
            setModalEditPhotoPostModal={setModalEditPhotoPostModal}
            user={user}
            setStatusFollow={setStatusFollow}
          />
        ) : null}
      </Menu>
    </>
  );
};

export default ProfilePhoto;
