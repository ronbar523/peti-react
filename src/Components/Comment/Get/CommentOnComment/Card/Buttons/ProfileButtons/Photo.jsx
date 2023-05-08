import React, { useEffect, useState } from "react";
import { Avatar, IconButton, Menu } from "@mui/material";
import ModalUser from "./Modal/ModalUser";
import { userStore } from "../../../../../../../Store/User/UserStore";

const Photo = ({ commentItem2, user, setStatusFollow, modalEditProfilePhoto, modalEditUserName, modalEditName}) => {
  const [disabledClose, setDisabledClose] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const [userPhoto, setUserPhoto] = useState(commentItem2.userProfile);
  const isMenuOpen = Boolean(anchorEl);

  const openModal = (event) => {
    if (commentItem2.createdByName !== "User Not Available") {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    if (!disabledClose) {
      setAnchorEl(false);
    }
  };

  const movePage = () => {
    window.location = `/user_profile/${commentItem2.createdByName}`;
  };


  useEffect(() => {
    if(commentItem2.createdBy === userStore.user._id){
      setUserPhoto(userStore.user.photo)
      commentItem2.userProfile = userStore.user.photo
    }
   }, [modalEditProfilePhoto])


  return (
    <>
      <IconButton
        sx={{ width: 40, height: 40 }}
        onMouseEnter={(event) => openModal(event)}
        onClick={() => movePage()}
        disabled={commentItem2.createdByName === "User Not Available"}
      >
        <Avatar sx={{ width: 40, height: 40 }} src={userPhoto} />
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
            commentItem2={commentItem2}
            disabledClose={disabledClose}
            setDisabledClose={setDisabledClose}
            user={user}
            setStatusFollow={setStatusFollow}
            modalEditUserName={modalEditUserName}
            modalEditProfilePhoto={modalEditProfilePhoto}
            modalEditName={modalEditName}
          />
        ) : null}
      </Menu>
    </>
  );
};

export default Photo;
