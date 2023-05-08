import React, { useCallback, useState } from "react";
import { userStore } from "../../../../../../../../../../Store/User/UserStore";
import { sendLike } from "../../../../../../../../../../Services/CommentServices/CommentEditService";
import { postStore } from "../../../../../../../../../../Store/Post/PostSotre";
import { commentStore } from "../../../../../../../../../../Store/Comment/CommentStore";

const SendLike = ({
  commentItem,
  countLikes,
  setCountLikes,
  setLike,
  setModalPostDeleted,
  setModalCommentDeleted,
}) => {
  const [enterMouse, setEnterMouse] = useState(false);

  const sendLikeFunction = useCallback(async () => {
    try {
      setLike(true);
      if (countLikes === "0") {
        setCountLikes(1);
      } else {
        setCountLikes(countLikes + 1);
      }
      const commentId = commentItem._id;
      const postId = commentItem.postId;
      const commentMainId = undefined;

      await sendLike(commentId, postId, commentMainId);
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
  }, []);

  return (
    <button
      disabled={!userStore.isLogin}
      className={
        enterMouse
          ? "modalFullPostCommentGetLikeButton1 modalFullPostCommentGetTextDescription1"
          : "modalFullPostCommentGetLikeButton1"
      }
      onMouseEnter={() => setEnterMouse(true)}
      onMouseLeave={() => setEnterMouse(false)}
      onClick={() => sendLikeFunction()}
    >
      <p className="modalFullPostCommentGetText1">Like</p>
    </button>
  );
};

export default SendLike;
