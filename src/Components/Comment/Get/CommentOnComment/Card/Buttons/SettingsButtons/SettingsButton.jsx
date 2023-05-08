import React, { useState } from "react";
import { userStore } from "../../../../../../../Store/User/UserStore";
import { IconButton, Menu } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Edit from "./Buttons/Author/Comment/Edit";
import Delete from "./Buttons/Author/Comment/Delete";
import DeleteByAuthorPost from "./Buttons/Author/Post/DeleteByAuthorPost";
import DeleteByAuthorMain from "./Buttons/Author/MainComment/DeleteByAuthorMain";
import DeleteByAdmin from "./Buttons/Admin/DeleteByAdmin";

const SettingsButton = ({
  item,
  commentItem,
  commentItem2,
  commentOnCommentArr,
  setModalDeleteCommentOnComment,
  setEditComment,
}) => {
  const [anchorEl, setAnchorEl] = useState(false);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(false);
  };



  const isMenuOpen = Boolean(anchorEl);

  return (
    <>
      {commentItem2.createdBy === userStore.user._id ||
      commentItem.createdBy === userStore.user._id ||
      item.createdBy === userStore.user._id ||
      userStore.user.isAdmin ? (
        <IconButton
          className="homePageCommentGetSettingsShow2"
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
            sx={{ display: { xs: "none", lg: "flex" }, fontSize: "19px" }}
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
        {commentItem2.createdBy === userStore.user._id ? (
          <div>
            <Edit setEditComment={setEditComment} />
            <Delete
              commentItem={commentItem}
              commentItem2={commentItem2}
              commentOnCommentArr={commentOnCommentArr}
              setAnchorEl={setAnchorEl}
              setModalDeleteCommentOnComment={setModalDeleteCommentOnComment}
            />
          </div>
        ) : commentItem.createdBy === userStore.user._id ? (
          <div>
            <DeleteByAuthorMain
              commentItem={commentItem}
              commentItem2={commentItem2}
              commentOnCommentArr={commentOnCommentArr}
              setAnchorEl={setAnchorEl}
              setModalDeleteCommentOnComment={setModalDeleteCommentOnComment}
            />
          </div>
        ) : item.createdBy === userStore.user._id ? (
          <DeleteByAuthorPost
            commentItem={commentItem}
            commentItem2={commentItem2}
            commentOnCommentArr={commentOnCommentArr}
            setAnchorEl={setAnchorEl}
            setModalDeleteCommentOnComment={setModalDeleteCommentOnComment}
          />
        ) : userStore.user.isAdmin ? (
          <div>
            <DeleteByAdmin
              commentItem={commentItem}
              commentItem2={commentItem2}
              commentOnCommentArr={commentOnCommentArr}
              setAnchorEl={setAnchorEl}
              setModalDeleteCommentOnComment={setModalDeleteCommentOnComment}
            />
          </div>
        ) : null}
      </Menu>
    </>
  );
};

export default SettingsButton;
