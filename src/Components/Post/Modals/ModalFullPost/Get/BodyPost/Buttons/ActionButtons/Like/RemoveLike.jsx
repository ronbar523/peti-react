import React, { useCallback, useState } from "react";
import { removeLike } from "../../../../../../../../../Services/PostServices/PostEditService";
import { Button } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { postStore } from "../../../../../../../../../Store/Post/PostSotre";

const RemoveLike = ({ item, setLike, countLikes, setCountLikes, setModalPostDeleted, setModalAllComments }) => {
  const [enterMouse, setEnterMouse] = useState(false);

  const removeLikeFunction = useCallback(async () => {
    try {
      setLike(false);

      if (countLikes > 0) {
        setCountLikes(countLikes - 1);
      }
      const id = item._id;
      await removeLike(id);
    } catch (err) {
      if (err.response.status === 410) {
        setModalAllComments(false)
        setModalPostDeleted(true);
        postStore.postDeletedId = item._id;
      }}
  }, [countLikes]);

  return (
    <Button
      className="modalFullPostGetCardLikeButton"
      sx={{
        textTransform: "unset",
        color: "primary",
      }}
      onClick={() => removeLikeFunction()}
      onMouseEnter={() => setEnterMouse(true)}
      onMouseLeave={() => setEnterMouse(false)}
    >
      <ThumbUpOffAltIcon
        className="modalFullPostGetCardLikeIcon"
        sx={{
          fontSize: "24px",
        }}
        color="primary"
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
  );
};

export default RemoveLike;
