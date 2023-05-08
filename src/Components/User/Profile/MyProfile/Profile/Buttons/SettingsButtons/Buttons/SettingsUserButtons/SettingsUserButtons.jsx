import React from "react";
import ChangeEmail from "./Buttons/ChangeEmail";
import ChangePassword from "./Buttons/ChangePassword";
import ChangePublic from "./Buttons/ChangePublic";
import DeleteAccount from "./Buttons/DeleteAccount";

const SettingsUserButtons = ({
  setModalChangeEmail,
  setModalChangePassword,
  setModalChnagePublic,
  setModalDeleteMyUser,
  setAccountSettings,
  setAnchorEl,
}) => {
  return (
    <>
      <div>
        <ChangeEmail
          setModalChangeEmail={setModalChangeEmail}
          setAccountSettings={setAccountSettings}
          setAnchorEl={setAnchorEl}
        />
        <ChangePassword
          setModalChangePassword={setModalChangePassword}
          setAccountSettings={setAccountSettings}
          setAnchorEl={setAnchorEl}
        />

        <ChangePublic
          setModalChnagePublic={setModalChnagePublic}
          setAccountSettings={setAccountSettings}
          setAnchorEl={setAnchorEl}
        />

        <DeleteAccount
          setModalDeleteMyUser={setModalDeleteMyUser}
          setAccountSettings={setAccountSettings}
          setAnchorEl={setAnchorEl}
        />
      </div>
    </>
  );
};

export default SettingsUserButtons;
