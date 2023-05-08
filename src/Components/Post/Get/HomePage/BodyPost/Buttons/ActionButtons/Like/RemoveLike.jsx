import React, { useCallback, useState } from "react";
import { removeLike } from "../../../../../../../../Services/PostServices/PostEditService";
import { Button } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { postStore } from "../../../../../../../../Store/Post/PostSotre";

const RemoveLike = ({ item, setLike, countLikes, setCountLikes, setModalPostDeleted }) => {
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
        setModalPostDeleted(true);
        postStore.postDeletedId = item._id;
      }
    }
  }, [countLikes]);

  return (
    <Button
      className="homePagePostCardLikeButton"
      sx={{
        textTransform: "unset",
        color: "primary",
      }}
      onClick={() => removeLikeFunction()}
      onMouseEnter={() => setEnterMouse(true)}
      onMouseLeave={() => setEnterMouse(false)}
    >
      <ThumbUpOffAltIcon
        className="homePagePostCardLikeIcon"
        sx={{
          fontSize: "24px",
        }}
        color="primary"
      />
      <h5
        className={
          enterMouse
            ? "homePagePostCardButtonText homePagePostCardButtonTextDecoration"
            : "homePagePostCardButtonText"
        }
      >
        Like
      </h5>
    </Button>
  );
};

export default RemoveLike;
