import React, { useState } from "react";
import { Menu } from "@mui/material";
import ModalUser from "./Modal/ModalUser";

const ProfileUserName = ({ item, setModalDeletePostModal, setModalEditPhotoPostModal, user,
  setStatusFollow }) => {
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
      <button
        className="modalFullPostGetCardButtonName"
        onMouseEnter={(event) => openModal(event)}
      >
        {item.createdByName}
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

export default ProfileUserName;
