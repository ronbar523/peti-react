import React, { useEffect, useState } from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { userStore } from "../../Store/User/UserStore";
import Logo from "./Logo/Logo";
import SearchModal from "./Search/Modals/SearchModal";
import SmallNavbar from "./NavbarSize/Small/SmallNavbar";
import BigNavbar from "./NavbarSize/Big/BigNavbar";
import ModalProfile from "./ModalProfile/ModalProfile";
import PhotoLogin from "./Search/Buttons/PhotoLogin";
import PhotoUnLogin from "./Search/Buttons/PhotoUnLogin";

const Navbar = ({
  setModalSearchUsers,
  modalSearchUsers,
  text,
  setText,
  discoverSearchInput,
  setDiscoverSearchInput,
  modalEditProfilePhoto
}) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [users, setUsers] = useState([]);

  const [userPhoto, setUserPhoto] = useState(userStore.user.photo)

  useEffect(() => {
    if(userStore.isLogin){
      setUserPhoto(userStore.user.photo)
    }
  }, [modalEditProfilePhoto])

  const handleProfileMenuOpen = (event) => {
    setText("");
    setModalSearchUsers(false);
    setDiscoverSearchInput(false);
    setAnchorEl(event.currentTarget);
  };


  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 12 }}>
        <AppBar sx={{ height: "70px",  }} style={{ background: '#1E90FF' }}>
          <Toolbar>
            <Logo />

            <SmallNavbar
              discoverSearchInput={discoverSearchInput}
              setDiscoverSearchInput={setDiscoverSearchInput}
              setModalSearchUsers={setModalSearchUsers}
              setUsers={setUsers}
              text={text}
              setText={setText}
            />

            <BigNavbar
              setModalSearchUsers={setModalSearchUsers}
              setUsers={setUsers}
              text={text}
              setText={setText}
            />

            <Box>
              {userStore.isLogin ? (
                <PhotoLogin handleProfileMenuOpen={handleProfileMenuOpen} userPhoto={userPhoto} />
              ) : (
                <PhotoUnLogin handleProfileMenuOpen={handleProfileMenuOpen} />
              )}
            </Box>

          </Toolbar>
            <ModalProfile anchorEl={anchorEl} setAnchorEl={setAnchorEl} />

          {modalSearchUsers ? (
            <SearchModal
              users={users}
              setModalSearchUsers={setModalSearchUsers}
              setDiscoverSearchInput={setDiscoverSearchInput}
              text={text}
              setText={setText}
            />
          ) : null}
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
