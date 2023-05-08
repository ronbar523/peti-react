import React, { useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { postStore } from "../../../../../../../Store/Post/PostSotre";

const Like = ({ item, countLikes, setModalShowLikesPost, like }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const openModalLikes = () => {
    if (countLikes > 0) {
      postStore.postLike = item;
      postStore.like = like;
      setModalShowLikesPost(true);
    }
  };

  return (
    <div>
      <button
        className={
          mouseEnter
            ? "homePagePostCardButtonShowLikes homePagePostCardButtonTextDecoration"
            : "homePagePostCardButtonShowLikes"
        }
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
        onClick={() => openModalLikes()}
      >
        <h6>
          <ThumbUpOffAltIcon sx={{ mt: "-4px", mr: "12px" }} />
          {countLikes}
        </h6>
      </button>
    </div>
  );
};

export default Like;
