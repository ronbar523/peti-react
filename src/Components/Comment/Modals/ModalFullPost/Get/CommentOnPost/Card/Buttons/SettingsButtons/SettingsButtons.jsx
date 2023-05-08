import React, { useState } from "react";
import { userStore } from "../../../../../../../../../Store/User/UserStore";
import { postStore } from "../../../../../../../../../Store/Post/PostSotre";
import { commentStore } from "../../../../../../../../../Store/Comment/CommentStore";
import { IconButton, Menu } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Edit from "./Buttons/Author/Comment/Edit";
import Delete from "./Buttons/Author/Comment/Delete";
import DeleteByAdmin from "./Buttons/Admin/DeleteByAdmin";
import DeleteByAutorPost from "./Buttons/Author/Post/DeleteByAutorPost";

const SettingsButton = ({
  commentItem,
  setEditComment,
  setModalDeleteCommentModal,
  commentsArr,
}) => {
  const [anchorEl, setAnchorEl] = useState(false);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(false);
  };

  const openModalDeleteComment = () => {
    commentStore.postId = postStore.post._id;
    commentStore.comment = commentItem;
    commentStore.commentArr = commentsArr;
    setAnchorEl(false);
    setModalDeleteCommentModal(true);
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <>
      {commentItem.createdBy === userStore.user._id ||
      postStore.post.createdBy === userStore.user._id ||
      userStore.user.isAdmin ? (
        <IconButton
          className="modalFullPostCommentGetSettingsShow1"
          onClick={(event) => {
            handleProfileMenuOpen(event);
          }}
        >
          <MoreVertIcon
            sx={{ display: { xs: "flex", sm: "none" }, fontSize: "21px" }}
          />
          <MoreVertIcon
            sx={{
              display: { xs: "none", sm: "flex", lg: "none" },
              fontSize: "22px",
            }}
          />
          <MoreVertIcon
            sx={{ display: { xs: "none", lg: "flex" }, fontSize: "23px" }}
          />
        </IconButton>
      ) : null}

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id="primary-search-account-menu"
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          mt: "28px",
          ml: "-23px",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {commentItem.createdBy === userStore.user._id ? (
          <div>
            <Edit setEditComment={setEditComment} />
            <Delete
              commentItem={commentItem}
              commentsArr={commentsArr}
              setAnchorEl={setAnchorEl}
              setModalDeleteCommentModal={setModalDeleteCommentModal}
            />
          </div>
        ) : postStore.post.createdBy === userStore.user._id ? (
          <div>
            <DeleteByAutorPost
              commentItem={commentItem}
              commentsArr={commentsArr}
              setAnchorEl={setAnchorEl}
              setModalDeleteCommentModal={setModalDeleteCommentModal}
            />
          </div>
        ) : userStore.user.isAdmin ? (
          <div>
            <DeleteByAdmin
              commentItem={commentItem}
              commentsArr={commentsArr}
              setAnchorEl={setAnchorEl}
              setModalDeleteCommentModal={setModalDeleteCommentModal}
            />
          </div>
        ) : null}
      </Menu>
    </>
  );
};

export default SettingsButton;
