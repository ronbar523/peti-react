import React from 'react'
import { MenuItem } from '@mui/material';

const ChangeEmail = ({setModalChangeEmail, setAccountSettings, setAnchorEl}) => {

    const openModalChangeEmail = () => {
        setModalChangeEmail(true);
        setAccountSettings(false);
        setAnchorEl(null);
      };

  return (
    <>
      <MenuItem onClick={() => openModalChangeEmail()}>Change Email</MenuItem>
    </>
  );
};

export default ChangeEmail;
