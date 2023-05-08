import React from "react";
import { userStore } from "../../../Store/User/UserStore";
import { Menu } from "@mui/material";
import MyProfile from "./Links/LoginMember/MyProfile";
import Logout from "./Links/LoginMember/Logout";
import Register from "./Links/UnLoginMember/Register";
import Login from "./Links/UnLoginMember/Login";

const ModalProfile = ({ anchorEl, setAnchorEl }) => {
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(false);
  };

  return (
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
        mt: "40px",
        ml: "-18px",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {!userStore.isLogin ? (
        <div>
          <Register setAnchorEl={setAnchorEl} />
          <Login setAnchorEl={setAnchorEl}/>
        </div>
      ) : (
        <div>
          <MyProfile setAnchorEl={setAnchorEl}/>
          <Logout setAnchorEl={setAnchorEl}/>
        </div>
      )}
    </Menu>
  );
};

export default ModalProfile;
