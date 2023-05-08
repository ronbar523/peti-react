import React, { useState } from "react";
import { Box } from "@mui/material";
import Photo from "./Buttons/ProfileButtons/Photo";
import UserName from "./Buttons/ProfileButtons/UserName";
import Like from "./Buttons/LikeButtons/Like";
import LikeCount from "./Buttons/CountButtons/LikeCount";
import SettingsButton from "./Buttons/SettingsButtons/SettingsButton";
import ShowMore from "./Buttons/ReadButtons/ShowMore";
import ShowLess from "./Buttons/ReadButtons/ShowLess";
import Comment from "./Buttons/CommentButtons/Comment";
import CreatedAt from "./Buttons/CreatedAt/CreatedAt";
import EditComment from "../../../Edit/CommentOnComment/EditComment";

const CardComment = ({
  commentItem,
  commentItem2,
  setOpenInputOnComment,
  setModalDeleteCommentOnCommentModal,
  commentOnCommentArr,
  setModalShowLikesComment,
  setModalPostDeleted,
  setModalCommentDeleted,
  user,
  setStatusFollow,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [countLikes, setCountLikes] = useState(commentItem2.arrLikes.length);
  const [editComment, setEditComment] = useState(false);

  const [description, setDescription] = useState(commentItem2.description);
  const [shortDescription, setShortDescription] = useState(
    commentItem2.shortDescription
  );

  const [like, setLike] = useState(false);

  return (
    <>
      {!editComment ? (
        <>
          <Box className="modalFullPostCommentGetBox2">
            <Photo
              commentItem2={commentItem2}
              user={user}
              setStatusFollow={setStatusFollow}
            />
            <div className="modalFullPostCommentGetDiv2">
              <UserName commentItem2={commentItem2} />

              <SettingsButton
                commentItem={commentItem}
                commentItem2={commentItem2}
                setModalDeleteCommentOnCommentModal={
                  setModalDeleteCommentOnCommentModal
                }
                commentOnCommentArr={commentOnCommentArr}
                setEditComment={setEditComment}
              />

              <LikeCount
                commentItem2={commentItem2}
                countLikes={countLikes}
                setCountLikes={setCountLikes}
                like={like}
                setModalShowLikesComment={setModalShowLikesComment}
              />

              {shortDescription !== description ? (
                <>
                  {!expanded ? (
                    <ShowMore
                      setExpanded={setExpanded}
                      shortDescription={shortDescription}
                    />
                  ) : (
                    <ShowLess
                      expanded={expanded}
                      setExpanded={setExpanded}
                      description={description}
                    />
                  )}
                </>
              ) : (
                <p className="modalFullPostCommentGetDescription2">
                  {shortDescription}
                </p>
              )}
            </div>
          </Box>

          <Box className="modalFullPostCommentGetBoxButtons2">
            <Like
              commentItem2={commentItem2}
              countLikes={countLikes}
              setCountLikes={setCountLikes}
              like={like}
              setLike={setLike}
              setModalPostDeleted={setModalPostDeleted}
              setModalCommentDeleted={setModalCommentDeleted}
            />

            <Comment setOpenInputOnComment={setOpenInputOnComment} />

            <CreatedAt commentItem2={commentItem2} />
          </Box>
        </>
      ) : (
        <EditComment
          commentItem2={commentItem2}
          setEditComment={setEditComment}
          description={description}
          setDescription={setDescription}
          setShortDescription={setShortDescription}
        />
      )}
    </>
  );
};

export default CardComment;
