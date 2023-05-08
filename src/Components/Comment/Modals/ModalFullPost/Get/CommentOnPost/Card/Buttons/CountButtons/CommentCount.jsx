import React, { useCallback, useEffect } from "react";
import { getCommentByCommentId } from "../../../../../../../../../Services/CommentServices/CommentGetService";
import { Badge, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { commentStore } from "../../../../../../../../../Store/Comment/CommentStore";
import { postStore } from "../../../../../../../../../Store/Post/PostSotre";

const CommentCount = ({
  commentItem,
  countComments2,
  setCountComments2,
  commentOnCommentArr,
  setCommentOnCommentArr,
  slice,
  setSlice,
  setModalPostDeleted,
  setModalCommentDeleted
}) => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -5,
      top: 5,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  useEffect(() => {
    if (countComments2 === 0) {
      setCountComments2("0");
    }
  }, [countComments2]);

  const showAllComments = useCallback(async () => {
    try {
      if (slice === 2) {
        if (commentOnCommentArr.length === 2) {
          const postId = commentItem.postId;
          const commentId = commentItem._id;
          const skip = 0;
          const limit = "All";

          await getCommentByCommentId(postId, commentId, skip, limit).then(
            (res) => {
              setCommentOnCommentArr(res.data.comments);
              setCountComments2(res.data.comments.length);
              setSlice(res.data.comments.length);
            }
          );
        } else {
          setSlice(commentOnCommentArr.length);
        }
      } else {
        setSlice(2);
      }
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
  }, [slice, commentItem, commentOnCommentArr]);

  return (
    <>
      <IconButton
        className="modalFullPostCommentGetCommentShow1"
        onClick={() => showAllComments()}
        
      >
        <StyledBadge badgeContent={countComments2} color="primary">
          <ChatBubbleOutlineIcon
            sx={{ display: { xs: "flex", sm: "none" }, fontSize: "18px" }}
          />

          <ChatBubbleOutlineIcon
            sx={{
              display: { xs: "none", sm: "flex", lg: "none" },
              fontSize: "19px",
            }}
          />
          <ChatBubbleOutlineIcon
            sx={{ display: { xs: "none", lg: "flex" }, fontSize: "21px" }}
          />
        </StyledBadge>
      </IconButton>
    </>
  );
};

export default CommentCount;
