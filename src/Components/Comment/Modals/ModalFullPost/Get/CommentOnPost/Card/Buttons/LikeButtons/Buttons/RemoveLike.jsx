import React, { useCallback, useState } from "react";
import { removeLike } from "../../../../../../../../../../Services/CommentServices/CommentEditService";
import { postStore } from "../../../../../../../../../../Store/Post/PostSotre";
import { commentStore } from "../../../../../../../../../../Store/Comment/CommentStore";

const RemoveLike = ({ commentItem, countLikes, setCountLikes, setLike, setModalPostDeleted, setModalCommentDeleted}) => {
  const [enterMouse, setEnterMouse] = useState(false);

  const removeLikeFunction = useCallback(async () => {
    try {
      setLike(false);
      if (countLikes > 0) {
        setCountLikes(countLikes - 1);
      }
      const commentId = commentItem._id;
      const postId = commentItem.postId;
      const commentMainId = undefined;

      await removeLike(commentId, postId, commentMainId);
    } catch (err) {
      if (err.response.status === 410) {
        if (err.response.data.msg === "Post deleted") {
          postStore.postDeletedId = commentItem.postId;
          setModalPostDeleted(true);
        } else if (err.response.data.msg === "Comment deleted") {
          commentStore.commentMainDeletedId = commentItem._id;
          setModalCommentDeleted(true);
        }
      }
    }
  }, [countLikes]);

  return (
    <button
      className={
        enterMouse
          ? "modalFullPostCommentGetLikeButton1 modalFullPostCommentGetTextDescription1 text-primary"
          : "modalFullPostCommentGetLikeButton1 text-primary"
      }
      onMouseEnter={() => setEnterMouse(true)}
      onMouseLeave={() => setEnterMouse(false)}
      onClick={() => removeLikeFunction()}
    >
      <p className="modalFullPostCommentGetText1">Like</p>
    </button>
  );
};

export default RemoveLike;
