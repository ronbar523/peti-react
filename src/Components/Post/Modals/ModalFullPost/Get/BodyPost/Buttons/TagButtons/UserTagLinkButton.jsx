import React, { useState } from "react";
import { Menu } from "@mui/material";
import ModalUser from "./Modal/ModalUser";

const UserTagLinkButton = ({ item, item2 }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [removeTag, setRemoveTag] = useState(false);
  const [disabledClose, setDisabledClose] = useState(false);
  const isMenuOpen = Boolean(anchorEl);

  const moveToUserPage = () => {
    window.location = `/user_profile/${item2.userName}`;
  };

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
      {!removeTag ? (
        <>
          <button
            className="homePagePostCardButtonTag"
            onMouseEnter={(event) => openModal(event)}
            onClick={() => moveToUserPage()}
          >
            <h6>#{item2.userName}</h6>
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
            open={isMenuOpen}
            MenuListProps={{ onMouseLeave: handleMenuClose }}
            onClose={handleMenuClose}
          >
            {anchorEl ? (
              <ModalUser
                setAnchorEl={setAnchorEl}
                item={item}
                item2={item2}
                setRemoveTag={setRemoveTag}
                disabledClose={disabledClose}
                setDisabledClose={setDisabledClose}
              />
            ) : null}
          </Menu>
        </>
      ) : null}
    </>
  );
};

export default UserTagLinkButton;
