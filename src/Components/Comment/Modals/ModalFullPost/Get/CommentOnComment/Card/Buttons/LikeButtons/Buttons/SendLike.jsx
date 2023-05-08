import React, { useCallback, useState } from "react";
import { userStore } from "../../../../../../../../../../Store/User/UserStore";
import { sendLike } from "../../../../../../../../../../Services/CommentServices/CommentEditService";
import { postStore } from "../../../../../../../../../../Store/Post/PostSotre";
import { commentStore } from "../../../../../../../../../../Store/Comment/CommentStore";

const SendLike = ({
  commentItem2,
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
      const postId = commentItem2.postId;
      const commentId = commentItem2._id;
      const commentMainId = commentItem2.commentIdCreated;

      await sendLike(commentId, postId, commentMainId);
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
  }, []);

  return (
    <button
      disabled={!userStore.isLogin}
      className={
        enterMouse
          ? "modalFullPostCommentGetLikeButton2 modalFullPostCommentGetTextDescription2"
          : "modalFullPostCommentGetLikeButton2"
      }
      onMouseEnter={() => setEnterMouse(true)}
      onMouseLeave={() => setEnterMouse(false)}
      onClick={() => sendLikeFunction()}
    >
      <p className="modalFullPostCommentGetText2">Like</p>
    </button>
  );
};

export default SendLike;
