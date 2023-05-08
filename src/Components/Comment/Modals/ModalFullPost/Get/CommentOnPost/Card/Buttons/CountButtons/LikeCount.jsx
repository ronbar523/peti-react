import React, { useEffect } from "react";
import { Badge, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { commentStore } from "../../../../../../../../../Store/Comment/CommentStore";

const LikeCount = ({
  commentItem,
  like,
  countLikes,
  setCountLikes,
  setModalShowLikesComment,
}) => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -5,
      top: 7.5,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  useEffect(() => {
    if (countLikes === 0) {
      setCountLikes("0");
    }
  }, [countLikes]);

  const openModalLikes = () => {
    if (countLikes !== "0") {
      commentStore.commentLikes = commentItem;
      commentStore.like = like
      setModalShowLikesComment(true);
    }
  };

  return (
    <>
      <IconButton
        className="modalFullPostCommentGetLikeShow1"
        onClick={() => openModalLikes()}
      >
        <StyledBadge badgeContent={countLikes} color="primary">
          <ThumbUpOffAltIcon
            sx={{ display: { xs: "flex", sm: "none" }, fontSize: "21px" }}
          />

          <ThumbUpOffAltIcon
            sx={{
              display: { xs: "none", sm: "flex", lg: "none" },
              fontSize: "22px",
            }}
          />

          <ThumbUpOffAltIcon
            sx={{ display: { xs: "none", lg: "flex" }, fontSize: "25px" }}
          />
        </StyledBadge>
      </IconButton>
    </>
  );
};

export default LikeCount;
