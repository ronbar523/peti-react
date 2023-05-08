import React, { useCallback, useState } from "react";
import { removeLike } from "../../../../../../../../Services/CommentServices/CommentEditService";
import { postStore } from "../../../../../../../../Store/Post/PostSotre";
import { commentStore } from "../../../../../../../../Store/Comment/CommentStore";

const RemoveLike = ({
  commentItem2,
  countLikes,
  setCountLikes,
  setLike,
  setModalPostDeleted,
  setModalCommentDeleted,
}) => {
  const [enterMouse, setEnterMouse] = useState(false);

  const removeLikeFunction = useCallback(async () => {
    try {
      setLike(false);
      if (countLikes > 0) {
        setCountLikes(countLikes - 1);
      }
      const postId = commentItem2.postId;
      const commentId = commentItem2._id;
      const commentMainId = commentItem2.commentIdCreated;

      await removeLike(commentId, postId, commentMainId);
    } catch (err) {
      if (err.response.status === 410) {
        if (err.response.data.msg === "Post deleted") {
          postStore.postDeletedId = commentItem2.postId;
          setModalPostDeleted(true);
        } else if (err.response.data.msg === "Comment main deleted") {
          commentStore.commentMainDeletedId = commentItem2.commentIdCreated;
          setModalCommentDeleted(true);
        } else if (err.response.data.msg === "Comment deleted") {
          commentStore.commentDeletedId = commentItem2._id;
          setModalCommentDeleted(true);
        }
      }
    }
  }, [countLikes]);

  return (
    <button
      className={
        enterMouse
          ? "homePageCommentGetLikeButton2 homePageCommentGetTextDescription1 text-primary"
          : "homePageCommentGetLikeButton2 text-primary"
      }
      onMouseEnter={() => setEnterMouse(true)}
      onMouseLeave={() => setEnterMouse(false)}
      onClick={() => removeLikeFunction()}
    >
      <p className="homePageCommentGetText1">Like</p>
    </button>
  );
};

export default RemoveLike;
