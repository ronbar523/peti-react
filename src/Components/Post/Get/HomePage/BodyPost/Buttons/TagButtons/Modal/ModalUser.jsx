import React, { useState } from "react";
import "../../../../../../../../Css/Post/Modals/ModalUsersInfo/ModalUsersInfo.css";
import { CardHeader } from "@mui/material";
import Close from "./Buttons/CloseButtons/Close";
import Photo from "./Buttons/ProfileButtons/Photo";
import Name from "./Buttons/ProfileButtons/Name";
import FollowButtons from "./Buttons/FollowButtons/FollowButtons";
import Message from "./Buttons/MessageButtons/Message";

const ModalUser = ({ item, item2, setAnchorEl, setRemoveTag, disabledClose, setDisabledClose }) => {
  const [myUser, setMyUser] = useState(false);
  const [disabledMessage, setDisabledMessage] = useState(false);
  const [myBlock, setMyBlock] = useState(false);

  return (
    <div className="modalUsersInfo">
      <CardHeader
        avatar={<Photo item2={item2} />}
        title={<Name item2={item2} />}
        action={<Close setAnchorEl={setAnchorEl} disabledClose={disabledClose} />}
      />

      <FollowButtons
        item={item}
        item2={item2}
        myUser={myUser}
        setMyUser={setMyUser}
        myBlock={myBlock}
        setMyBlock={setMyBlock}
        setDisabledMessage={setDisabledMessage}
        setRemoveTag={setRemoveTag}
        setDisabledClose={setDisabledClose}
      />

      <Message myUser={myUser} disabledMessage={disabledMessage} />
    </div>
  );
};

export default ModalUser;
