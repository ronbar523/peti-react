import React, { useState } from "react";
import { Navigate } from "react-router";
import { userStore } from "../../../../../../../Store/User/UserStore";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import SettingsUserButtons from "./Buttons/SettingsUserButtons/SettingsUserButtons";
import AccountSettingsButtons from "./Buttons/SettingsUserButtons/AccountSettingsButtons";
import FollowersRequest from "./Buttons/FollowersButtons/FollowersRequest";
import MyBlockUsers from "./Buttons/BlockButtons/MyBlockUsers";

const IconOptionsButton = ({
  setModalChangePassword,
  setModalChangeEmail,
  setModalChnagePublic,
  setModalMyRequestFollowers,
  setModalDeleteMyUser,
  countFollowersRequest,
  setModalMyBlock,
  countBlock,
}) => {
  const [accountSettings, setAccountSettings] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setAccountSettings(false);
  };


  return (
    <>
      {!userStore.isLogin && <Navigate to="/" />}
      <IconButton
        sx={{ mt: "-7px", float: "right", mr: "-10px" }}
        aria-controls="primary-search-account-menu"
        onClick={handleProfileMenuOpen}
        size="medium"
      >
        <MoreVertIcon />
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
        sx={{
          mt: "40px",
          ml: "-18px",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {!accountSettings ? (
          <div>
            <AccountSettingsButtons setAccountSettings={setAccountSettings} />
            
            <FollowersRequest
              setModalMyRequestFollowers={setModalMyRequestFollowers}
              countFollowersRequest={countFollowersRequest}
              setAccountSettings={setAccountSettings}
              setAnchorEl={setAnchorEl}
            />

            <MyBlockUsers
              setModalMyBlock={setModalMyBlock}
              countBlock={countBlock}
              setAnchorEl={setAnchorEl}
            />

          </div>
        ) : (
          <SettingsUserButtons
            setModalChangeEmail={setModalChangeEmail}
            setModalChangePassword={setModalChangePassword}
            setModalChnagePublic={setModalChnagePublic}
            setModalDeleteMyUser={setModalDeleteMyUser}
            setAccountSettings={setAccountSettings}
            setAnchorEl={setAnchorEl}
          />
        )}
      </Menu>
    </>
  );
};

export default IconOptionsButton;
