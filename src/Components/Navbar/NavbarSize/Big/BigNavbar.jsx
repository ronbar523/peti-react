import React from "react";
import { Badge, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Search from "../../Search/Search";
import { userStore } from "../../../../Store/User/UserStore";

const BigNavbar = ({ setModalSearchUsers, setUsers, text, setText }) => {
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        <Search
          setModalSearchUsers={setModalSearchUsers}
          setUsers={setUsers}
          text={text}
          setText={setText}
        />
      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }} />

      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
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
              <Badge badgeContent={2} color="error">
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

export default BigNavbar;
