import React, { useState } from "react";
import { userStore } from "../../../../../../../Store/User/UserStore";
import { IconButton, Menu } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Edit from "./Buttons/Author/Edit";
import Delete from "./Buttons/Author/Delete";
import DeleteByAdmin from "./Buttons/Admin/DeleteByAdmin";

const IconOptionsButton = ({
  item,
  setModalDeletePost,
  setModalEditPhotoPost,
}) => {
  const [anchorEl, setAnchorEl] = useState(false);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(false);
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <>
      {item.createdBy === userStore.user._id || userStore.user.isAdmin ? (
        <IconButton
          aria-label="settings"
          className="homePagePostCardButtonSettings"
          onClick={(event) => {
            handleProfileMenuOpen(event);
          }}
        >
          <MoreVertIcon />
        </IconButton>
      ) : null}
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
        sx={{
          mt: "20px",
          ml: "-30px",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {item.createdBy === userStore.user._id ? (
          <div>
            <Edit
              item={item}
              setAnchorEl={setAnchorEl}
              setModalEditPhotoPost={setModalEditPhotoPost}
            />
            <Delete
              item={item}
              setAnchorEl={setAnchorEl}
              setModalDeletePost={setModalDeletePost}
            />
          </div>
        ) : userStore.user.isAdmin ? (
          <div>
            <DeleteByAdmin
              item={item}
              setAnchorEl={setAnchorEl}
              setModalDeletePost={setModalDeletePost}
            />
          </div>
        ) : null}
      </Menu>
    </>
  );
};

export default IconOptionsButton;
