import React, { useState } from "react";
import { userStore } from "../../../../../../../Store/User/UserStore";
import { IconButton, Menu } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Delete from "./Buttons/Author/Comment/Delete";
import Edit from "./Buttons/Author/Comment/Edit";
import DeleteByAutorPost from "./Buttons/Author/Post/DeleteByAutorPost";
import DeleteByAdmin from "./Buttons/Admin/DeleteByAdmin";

const SettingsButton = ({
  item,
  commentItem,
  setEditComment,
  setModalDeleteComment,
  commentsArr,
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
      {commentItem.createdBy === userStore.user._id ||
      item.createdBy === userStore.user._id || 
      userStore.user.isAdmin ? (
        <IconButton
          className="homePageCommentGetSettingsShow1"
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
              item={item}
              commentItem={commentItem}
              commentsArr={commentsArr}
              setAnchorEl={setAnchorEl}
              setModalDeleteComment={setModalDeleteComment}
            />
          </div>
        ) : item.createdBy === userStore.user._id ? (
          <div>
            <DeleteByAutorPost
              item={item}
              commentItem={commentItem}
              commentsArr={commentsArr}
              setAnchorEl={setAnchorEl}
              setModalDeleteComment={setModalDeleteComment}
            />
          </div>
        ) : userStore.user.isAdmin ? (
          <div>
            <DeleteByAdmin
              item={item}
              commentItem={commentItem}
              commentsArr={commentsArr}
              setAnchorEl={setAnchorEl}
              setModalDeleteComment={setModalDeleteComment}
            />
          </div>
        ) : null}
      </Menu>
    </>
  );
};

export default SettingsButton;
