import React, { useState } from "react";
import "../../../../../../../../../../Css/Post/Modals/ModalUsersInfo/ModalUsersInfo.css";
import { CardHeader } from "@mui/material";
import Close from "./Buttons/CloseButtons/Close";
import Photo from "./Buttons/ProfileButtons/Photo";
import Name from "./Buttons/ProfileButtons/Name";
import FollowButtons from "./Buttons/FollowButtons/FollowButtons";
import Message from "./Buttons/MessageButtons/Message";

const ModalUser = ({
  commentItem,
  setAnchorEl,
  disabledClose,
  setDisabledClose,
  user,
  setStatusFollow,
}) => {
  const [myUser, setMyUser] = useState(false);
  const [disabledMessage, setDisabledMessage] = useState(false);
  const [myBlock, setMyBlock] = useState(false);

  return (
    <div className="modalUsersInfo">
      <CardHeader
        avatar={<Photo commentItem={commentItem} />}
        title={<Name commentItem={commentItem} />}
        action={
          <Close setAnchorEl={setAnchorEl} disabledClose={disabledClose} />
        }
      />

      <FollowButtons
        commentItem={commentItem}
        myUser={myUser}
        setMyUser={setMyUser}
        myBlock={myBlock}
        setMyBlock={setMyBlock}
        setDisabledClose={setDisabledClose}
        setDisabledMessage={setDisabledMessage}
        setAnchorEl={setAnchorEl}
        user={user} setStatusFollow={setStatusFollow}
      />

      <Message myUser={myUser} disabledMessage={disabledMessage} />
    </div>
  );
};

export default ModalUser;
