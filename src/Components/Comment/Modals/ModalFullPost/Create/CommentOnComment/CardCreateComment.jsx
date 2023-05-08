import React, { useState } from "react";
import "../../../../../../Css/Comment/Modals/ModalFullPost/Create/ModalFullPostCreateComment2.css";
import { userStore } from "../../../../../../Store/User/UserStore";
import { Avatar, Box } from "@mui/material";
import Description from "./Inputs/Description";
import Send from "./Buttons/Send";

const CardCreateComment = ({
  commentItem,
  setOpenInputOnComment,
  commentOnCommentArr,
  setCommentOnCommentArr,
  countComments,
  setCountComments,
  countComments2,
  setCountComments2,
  setSlice,
  setModalPostDeleted,
  setModalCommentDeletedInCreate,
}) => {
  const [description, setDescription] = useState("");
  const [userTaged, setUserTaged] = useState([]);

  return (
    <>
      <Box className="modalFullPostCommentCreateBox2">
        <Avatar
        className="modalFullPostCommentCreatePhoto2"
          sx={{ mr: 1, width: 40, height: 40}}
          src={userStore.user.photo}
        />

        <Description
          description={description}
          setDescription={setDescription}
          setOpenInputOnComment={setOpenInputOnComment}
        />
      </Box>

      <Send
        userTaged={userTaged}
        description={description}
        commentItem={commentItem}
        commentOnCommentArr={commentOnCommentArr}
        setCommentOnCommentArr={setCommentOnCommentArr}
        setOpenInputOnComment={setOpenInputOnComment}
        countComments={countComments}
        setCountComments={setCountComments}
        countComments2={countComments2}
        setCountComments2={setCountComments2}
        setSlice={setSlice}
        setModalPostDeleted={setModalPostDeleted}
        setModalCommentDeletedInCreate={setModalCommentDeletedInCreate}
      />
    </>
  );
};

export default CardCreateComment;
