import React, { useEffect, useState } from "react";
import { Avatar, IconButton, Menu } from "@mui/material";
import ModalUser from "./Modal/ModalUser";
import { userStore } from "../../../../../../../Store/User/UserStore";

const Photo = ({ commentItem, user, setStatusFollow, modalEditProfilePhoto, modalEditName, modalEditUserName
   }) => {
  const [disabledClose, setDisabledClose] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const [userPhoto, setUserPhoto] = useState(commentItem.userProfile)
  const isMenuOpen = Boolean(anchorEl);

  const openModal = (event) => {
    if (commentItem.createdByName !== "User Not Available") {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    if (!disabledClose) {
      setAnchorEl(false);
    }
  };

  const movePage = () => {
    window.location = `/user_profile/${commentItem.createdByName}`;
  };

  useEffect(() => {
    if(commentItem.createdBy === userStore.user._id){
      setUserPhoto(userStore.user.photo)
      commentItem.userProfile = userStore.user.photo
    }

  }, [modalEditProfilePhoto])

  
  return (
    <>
      <IconButton
        sx={{ width: 50, height: 50 }}
        className="homePageCommentGetPhoto1"
        onMouseEnter={(event) => openModal(event)}
        onClick={() => movePage()}
        disabled={commentItem.createdByName === "User Not Available"}
      >
        <Avatar sx={{ width: 50, height: 50 }} src={userPhoto} />
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
            commentItem={commentItem}
            disabledClose={disabledClose}
            setDisabledClose={setDisabledClose}
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

export default Photo;
