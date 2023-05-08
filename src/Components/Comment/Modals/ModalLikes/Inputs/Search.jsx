import React, { useCallback} from "react";
import { commentStore } from "../../../../../Store/Comment/CommentStore";
import { findLikesAfterFilter } from "../../../../../Services/CommentServices/CommentGetService";
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { postStore } from "../../../../../Store/Post/PostSotre";

const Search = ({
  setArrFilter,
  text,
  setText,
  setModalShowLikesComment,
  setModalCommentDeleted,
  setModalPostDeleted,
  inputRef,
}) => {
  const findUsersFunction = useCallback(async (value) => {
    try {
      setText(value);
      const filter = value;
      const postId = commentStore.commentLikes.postId;
      const commentId = commentStore.commentLikes._id;
      const commentMainId = commentStore.commentLikes.commentIdCreated;

      await findLikesAfterFilter(postId, commentId, commentMainId, filter).then(
        (res) => {
          setArrFilter(res.data.filterArr);
        }
      );
    } catch (err) {
      if (err.response.status === 410) {
        if (err.response.data.msg === "Post deleted") {
          postStore.postDeletedId = commentStore.commentLikes.postId;
          setModalShowLikesComment(false);
          setModalPostDeleted(true);
        } else if (err.response.data.msg === "Comment main deleted") {
          commentStore.commentMainDeletedId =
            commentStore.commentLikes.commentIdCreated;
          setModalShowLikesComment(false);
          setModalCommentDeleted(true);
        } else if (err.response.data.msg === "Comment deleted") {
          if (commentStore.commentLikes.commentIdCreated === undefined) {
            commentStore.commentMainDeletedId = commentStore.commentLikes._id;
            setModalShowLikesComment(false);
            setModalCommentDeleted(true);
          } else {
            commentStore.commentDeletedId = commentStore.commentLikes._id;
            setModalShowLikesComment(false);
            setModalCommentDeleted(true);
          }
        }
      }
    }
  }, []);

  return (
    <Box className="modalCommentLikesBoxSearch">
      <Paper className="modalCommentLikesSearch">
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          value={text}
          onChange={(event) => findUsersFunction(event.target.value)}
          placeholder="Search User"
          inputRef={inputRef}
        />
        <IconButton
          type="button"
          sx={{ p: "8px", mr: 0.8 }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Search;
