import React, { useEffect, useState } from "react";
import "../../../../../../Css/Comment/Modals/ModalFullPost/Create/ModalFullPostCreateComment1.css"
import { userStore } from "../../../../../../Store/User/UserStore";
import { Box } from "@mui/system";
import { Avatar, IconButton } from "@mui/material";
import Description from "./Inputs/Description";
import Send from "./Buttons/Send";
import { commentStore } from "../../../../../../Store/Comment/CommentStore";

const CardCreateComment = ({
  item,
  commentsArr,
  setCommentsArr,
  countComments,
  setCountComments,
  inputRef,
  setModalPostDeleted,
  modalCommentDeletedInCreate
}) => {
  const [description, setDescription] = useState("");
  const [arrTag, setArrTags] = useState([]);

  const [showBtnSend, setShowBtnSend] = useState(false);


  useEffect(() => {
    if(commentStore.continue){
      setArrTags(commentStore.comment.arrTag)
      setDescription(commentStore.comment.description)
      commentStore.continue = false
      commentStore.comment = {}
      inputRef.current.focus()
    }
  }, [modalCommentDeletedInCreate])

  

  return (
    <>
      {userStore.isLogin ? (
        <Box
        className={
          countComments > 0 && !showBtnSend
            ? "modalFullPostCommentCreateBoxWithComment1"
            : countComments > 0 && showBtnSend ? "modalFullPostCommentCreateBoxWithCommentAndButton1" 
            : "modalFullPostCommentCreateBoxWithoutComment1"
        }
        >
          <IconButton sx={{ width: 50, height: 50 }}>
            <Avatar sx={{ width: 50, height: 50 }} src={userStore.user.photo} />
          </IconButton>

          <Description
            description={description}
            setDescription={setDescription}
            setShowBtnSend={setShowBtnSend}
            inputRef={inputRef}
          />
        </Box>
      ) : (
        <Box
          sx={{
            height: "7px",
          }}
        />
      )}

      {showBtnSend ? (
        <Send
          item={item}
          description={description}
          setDescription={setDescription}
          arrTag={arrTag}
          setShowBtnSend={setShowBtnSend}
          commentsArr={commentsArr}
          setCommentsArr={setCommentsArr}
          countComments={countComments}
          setCountComments={setCountComments}
          setModalPostDeleted={setModalPostDeleted}
        />
      ) : null}
    </>
  );
};

export default CardCreateComment;
