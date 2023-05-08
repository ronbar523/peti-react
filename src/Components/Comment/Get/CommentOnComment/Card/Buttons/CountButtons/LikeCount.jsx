import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Badge, IconButton } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { commentStore } from "../../../../../../../Store/Comment/CommentStore";

const LikeCount = ({
  like,
  commentItem2,
  countLikes,
  setCountLikes,
  setModalShowLikesComment,
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
    if (countLikes === 0) {
      setCountLikes("0");
    }
  }, [countLikes]);

  const openModalLikes = () => {
    if (countLikes !== "0") {
      commentStore.commentLikes = commentItem2;
      commentStore.like = like;
      setModalShowLikesComment(true);
    }
  };

  return (
    <IconButton
      className="homePageCommentGetLikeShow2"
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
          sx={{ display: { xs: "none", lg: "flex" }, fontSize: "20px" }}
        />
      </StyledBadge>
    </IconButton>
  );
};

export default LikeCount;
