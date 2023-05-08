import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import RemoveFollower from "./FollowersButtons/RemoveFollower";
import BlockButtons from "./BlockButtons/BlockButtons";
import AccountSettings from "./AccountSettingsButton/AccountSettings";

const IconOptionsButton = ({
  user,
  iBlockUser,
  setIBlockUser,
  follow,
  setFollow,
  followRequest,
  setFollowRequest,
  followAfterMe,
  setFollowAfterMe,
  setFollowAfterMeRequest,
  countFollowers,
  setCountFollowers,
  countFollowing,
  setCountFollowing,
  setModalUserDeleted,
  setModalReload
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
      <IconButton
        sx={{ mt: "-7px", float: "right", mr: "-10px" }}
        aria-controls={"primary-search-account-menu"}
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
        id={"primary-search-account-menu"}
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
          <AccountSettings setAccountSettings={setAccountSettings} />
        ) : (
          <div>
            <RemoveFollower
              user={user}
              countFollowing={countFollowing}
              setCountFollowing={setCountFollowing}
              followAfterMe={followAfterMe}
              setFollowAfterMe={setFollowAfterMe}
              setAnchorEl={setAnchorEl}
              setAccountSettings={setAccountSettings}
            />

            <BlockButtons
              user={user}
              iBlockUser={iBlockUser}
              setIBlockUser={setIBlockUser}
              follow={follow}
              setFollow={setFollow}
              followAfterMe={followAfterMe}
              setFollowAfterMe={setFollowAfterMe}
              followRequest={followRequest}
              setFollowRequest={setFollowRequest}
              setFollowAfterMeRequest={setFollowAfterMeRequest}
              countFollowing={countFollowing}
              setCountFollowing={setCountFollowing}
              countFollowers={countFollowers}
              setCountFollowers={setCountFollowers}
              setAnchorEl={setAnchorEl}
              setAccountSettings={setAccountSettings}
              setModalUserDeleted={setModalUserDeleted}
              setModalReload={setModalReload}
            />

           
          </div>
        )}
      </Menu>
    </>
  );
};

export default IconOptionsButton;
