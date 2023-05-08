import { Avatar, Box, IconButton } from "@mui/material";
import "../../../../../../Css/Comment/Modals/ModalFullPost/Edit/ModalFullPostEditComment2.css"
import React, { useState } from "react";
import { userStore } from "../../../../../../Store/User/UserStore";
import Description from "./Inputs/Description";
import Send from "./Buttons/Send";

const EditComment = ({
  commentItem2,
  description,
  setEditComment,
  setShortDescription,
  setDescription,
}) => {
  const [descriptionUpdate, setDescriptionUpdate] = useState(
    description
  );
  const [userTaged, setUserTaged] = useState(commentItem2.arrTag);

  return (
    <>
      <Box className="modalFullPostCommentEditBox2">
        <IconButton sx={{ width: 40, height: 40 }} className="modalFullPostCommentEditPhoto2">
          <Avatar sx={{ width: 40, height: 40 }} src={userStore.user.photo} />
        </IconButton>

        <Description
          descriptionUpdate={descriptionUpdate}
          setDescriptionUpdate={setDescriptionUpdate}
          setEditComment={setEditComment}
        />
      </Box>

      <Send
        commentItem2={commentItem2}
        userTaged={userTaged}
        descriptionUpdate={descriptionUpdate}
        setEditComment={setEditComment}
        setDescription={setDescription}
        setShortDescription={setShortDescription}
      />
    </>
  );
};

export default EditComment;
