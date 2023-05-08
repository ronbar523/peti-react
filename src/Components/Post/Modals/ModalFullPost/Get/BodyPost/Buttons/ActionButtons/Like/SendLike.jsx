import React, { useCallback, useState } from "react";
import { sendLike } from "../../../../../../../../../Services/PostServices/PostEditService";
import { Button } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { userStore } from "../../../../../../../../../Store/User/UserStore";
import { postStore } from "../../../../../../../../../Store/Post/PostSotre";

const SendLike = ({ item, setLike, countLikes, setCountLikes, setModalPostDeleted, setModalAllComments }) => {
  const [enterMouse, setEnterMouse] = useState(false);
  
  const sendLikeFunction = useCallback(async () => {
    try {
      setLike(true);

      if (countLikes === "0") {
        setCountLikes(1);
      } else {
        setCountLikes(countLikes + 1);
      }
      const id = item._id;

      await sendLike(id);
    } catch (err) {
      if (err.response.status === 410) {
        setModalAllComments(false)
        setModalPostDeleted(true);
        postStore.postDeletedId = item._id;
      }}
  }, []);

  return (
    <>
      <Button
        className="modalFullPostGetCardLikeButton"
        disabled={!userStore.isLogin}
        sx={{
          textTransform: "unset",
          color: "black",
        }}
        onClick={() => sendLikeFunction()}
        onMouseEnter={() => setEnterMouse(true)}
        onMouseLeave={() => setEnterMouse(false)}
      >
        <ThumbUpOffAltIcon
          className="modalFullPostGetCardLikeIcon"
          sx={{
            fontSize: "24px",
          }}
          color="action"
        />
        <h5
          className={
            enterMouse
              ? "modalFullPostGetCardButtonText modalFullPostGetCardButtonTextDecoration"
              : "modalFullPostGetCardButtonText"
          }
        >
          Like
        </h5>
      </Button>
    </>
  );
};

export default SendLike;
