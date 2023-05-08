import React, { useEffect, useRef, useState } from "react";
import "../../../../Css/Comment/Create/HomePageCommentCreate1.css";
import { userStore } from "../../../../Store/User/UserStore";
import { commentStore } from "../../../../Store/Comment/CommentStore";
import { Box } from "@mui/system";
import { Avatar, IconButton } from "@mui/material";
import Description from "./Inputs/Description";
import Send from "./Buttons/Send";

const CardCreateComment = ({
  item,
  commentsArr,
  setCommentsArr,
  countComments,
  setCountComments,
  setModalPostDeleted,
  modalCommentDeletedInCreate,
  modalAllComments
}) => {
  const [description, setDescription] = useState("");
  const [arrTag, setArrTags] = useState([]);

  const [showBtnSend, setShowBtnSend] = useState(false);

  const inputRef = useRef()

  useEffect(() => {
    if(commentStore.continue && !modalAllComments){
      setArrTags(commentStore.comment.arrTag)
      setDescription(commentStore.comment.description)
      commentStore.continue = false
      commentStore.comment = {}
      inputRef.current.focus()
    }
  }, [modalCommentDeletedInCreate])

  


  return (
    <>
      {userStore.isLogin  ? (
        <Box
          className={
            countComments > 0 && !showBtnSend
              ? "homePageCommentCreateBoxWithComment1"
              : countComments > 0 && showBtnSend ? "homePageCommentCreateBoxWithCommentAndButton1" 
              : "homePageCommentCreateBoxWithoutComment1"
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
