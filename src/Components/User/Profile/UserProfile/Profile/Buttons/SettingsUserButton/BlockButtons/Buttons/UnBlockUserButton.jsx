import React, { useCallback } from "react";
import { removeBlockUser } from "../../../../../../../../../Services/BlockServices/BlockEditServices";
import { MenuItem } from "@mui/material";

const UnBlockUserButton = ({
  user,
  setModalUserDeleted,
  setIBlockUser,
  setAnchorEl,
  setAccountSettings,
  setModalReload
}) => {

  const UnBlockFunction = useCallback(async () => {
    try {
      setAnchorEl(null);
      setModalReload(true)
      await removeBlockUser(user._id).then((res) => {      
        if (res.data.userDeletedFlag) {
          setModalUserDeleted(true);
        }
        setIBlockUser(false);
        setAccountSettings(false);
        setModalReload(false)
      });
    } catch {
      window.location.reload();
    }
  }, []);

  return <MenuItem onClick={() => UnBlockFunction()}>Unblock User</MenuItem>;
};

export default UnBlockUserButton;
