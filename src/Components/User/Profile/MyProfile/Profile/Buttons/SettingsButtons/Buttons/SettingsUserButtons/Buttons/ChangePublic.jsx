import React from "react";
import { userStore } from "../../../../../../../../../../Store/User/UserStore";
import { MenuItem } from "@mui/material";

const ChangePublic = ({setModalChnagePublic, setAccountSettings, setAnchorEl}) => {

    const openModalChangePublic = () => {
        setModalChnagePublic(true);
        setAccountSettings(false);
        setAnchorEl(null);
      };

  return (
    <>
      <MenuItem onClick={() => openModalChangePublic()}>
        {userStore.user.public ? "Become Private" : "Become Public"}
      </MenuItem>
    </>
  );
};

export default ChangePublic;
