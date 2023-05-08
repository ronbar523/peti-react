import React, { useState } from "react";
import "../../../../../../../../Css/Post/Modals/ModalUsersInfo/ModalUsersInfo.css";
import { CardHeader } from "@mui/material";
import Close from "./Buttons/CloseButtons/Close";
import Photo from "./Buttons/ProfileButtons/Photo";
import Name from "./Buttons/ProfileButtons/Name";
import FollowButtons from "./Buttons/FollowButtons/FollowButtons";
import Message from "./Buttons/MessageButtons/Message";

const ModalUser = ({
  item,
  setAnchorEl,
  disabledClose,
  setDisabledClose,
  setModalDeletePost,
  setModalEditPhotoPost,
  user,
  setStatusFollow,
  modalEditProfilePhoto,
  modalEditName,
  modalEditUserName
}) => {
  const [myUser, setMyUser] = useState(false);
  const [disabledMessage, setDisabledMessage] = useState(false);
  const [myBlock, setMyBlock] = useState(false);

  return (
    <div className="modalUsersInfo">
      <CardHeader
        avatar={<Photo item={item} modalEditProfilePhoto={modalEditProfilePhoto}/>}
        title={<Name item={item} modalEditName={modalEditName} modalEditUserName={modalEditUserName} />}
        action={
          <Close setAnchorEl={setAnchorEl} disabledClose={disabledClose} />
        }
      />

      <FollowButtons
        item={item}
        myUser={myUser}
        setMyUser={setMyUser}
        myBlock={myBlock}
        setMyBlock={setMyBlock}
        setDisabledClose={setDisabledClose}
        setDisabledMessage={setDisabledMessage}
        setModalDeletePost={setModalDeletePost}
        setAnchorEl={setAnchorEl}
        setModalEditPhotoPost={setModalEditPhotoPost}
        user={user}
        setStatusFollow={setStatusFollow}
      />

      <Message myUser={myUser} disabledMessage={disabledMessage} />
    </div>
  );
};

export default ModalUser;
