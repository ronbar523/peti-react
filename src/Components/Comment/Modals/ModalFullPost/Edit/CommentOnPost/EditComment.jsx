import React, { useState } from "react";
import "../../../../../../Css/Comment/Modals/ModalFullPost/Edit/ModalFullPostEditComment1.css";
import { userStore } from "../../../../../../Store/User/UserStore";
import { Box } from "@mui/material";
import { Avatar, IconButton } from "@mui/material";
import Description from "./Inputs/Description";
import Send from "./Buttons/Send";

const EditComment = ({
  commentItem,
  setEditComment,
  description,
  setShortDescription,
  setDescription,
  index,
  setModalPostDeleted,
  setModalCommentDeleted,
}) => {
  const [descriptionUpdate, setDescriptionUpdate] = useState(description);
  const [userTaged, setUserTaged] = useState(commentItem.arrTag);

  return (
    <>
      <Box
        className={
          index === 0
            ? "modalFullPostCommentEditBoxZeroIndex1"
            : "modalFullPostCommentEditBox1"
        }
      >
        <IconButton
          sx={{ width: 50, height: 50 }}
          className="modalFullPostCommentEditPhoto1"
        >
          <Avatar sx={{ width: 50, height: 50 }} src={userStore.user.photo} />
        </IconButton>

        <Description
          descriptionUpdate={descriptionUpdate}
          setDescriptionUpdate={setDescriptionUpdate}
          setEditComment={setEditComment}
        />
      </Box>

      <Send
        commentItem={commentItem}
        userTaged={userTaged}
        descriptionUpdate={descriptionUpdate}
        setEditComment={setEditComment}
        setDescription={setDescription}
        setShortDescription={setShortDescription}
        setModalPostDeleted={setModalPostDeleted}
        setModalCommentDeleted={setModalCommentDeleted}
      />
    </>
  );
};

export default EditComment;
