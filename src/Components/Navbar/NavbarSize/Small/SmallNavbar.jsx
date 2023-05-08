import React from "react";
import { Badge, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconSearch from "./Icons/IconSearch";
import { userStore } from "../../../../Store/User/UserStore";

const SmallNavbar = ({
  discoverSearchInput,
  setDiscoverSearchInput,
  setModalSearchUsers,
  setUsers,
  text,
  setText,
}) => {
  
  const closeModalSearchUsers = () => {
    setText("");
    setModalSearchUsers(false);
    setDiscoverSearchInput(false);
  };

  return (
    <>
      <Box sx={{ display: { xs: "flex", sm: "none" }}}>
        <IconSearch
          discoverSearchInput={discoverSearchInput}
          setDiscoverSearchInput={setDiscoverSearchInput}
          text={text}
          setText={setText}
          setUsers={setUsers}
          setModalSearchUsers={setModalSearchUsers}
        />
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" }}} />

      <Box
        onClick={() => closeModalSearchUsers()}
        sx={{ display: { sm: "none" } }}
        className={discoverSearchInput || text !== "" ? "navbarCoverIcon" : ""}
      >
        <IconButton size="large" color="inherit" onClick={() => window.location.replace("/")} >
          <HomeIcon />
        </IconButton>
        {userStore.isLogin ? (
          <>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              disabled={true}
            >
              <Badge badgeContent={122} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              disabled={true}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </>
        ) : null}
      </Box>
    </>
  );
};

export default SmallNavbar;
