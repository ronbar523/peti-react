import React, { useState } from "react";
import { Avatar, IconButton, Menu } from "@mui/material";
import ModalUser from "./Modal/ModalUser";

const Photo = ({ commentItem2, user, setStatusFollow }) => {
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

  const movePage = () => {
    window.location = `/user_profile/${commentItem2.createdByName}`;
  };

  return (
    <>
      <IconButton
        sx={{ width: 40, height: 40 }}
        className="modalFullPostCommentGetPhoto2"
        onMouseEnter={(event) => openModal(event)}
        onClick={() => movePage()}
        disabled={commentItem2.createdByName === "User Not Available"}

      >
        <Avatar sx={{ width: 40, height: 40 }} src={commentItem2.userProfile} />
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
          />
        ) : null}
      </Menu>
    </>
  );
};

export default Photo;
