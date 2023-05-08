import React, { useEffect, useState } from "react";
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
import { commentStore } from "../../../../../Store/Comment/CommentStore";

const CardComment = ({
  item,
  commentItem,
  commentItem2,
  setOpenInputOnComment,
  setModalDeleteCommentOnComment,
  commentOnCommentArr,
  modalShowLikesComment,
  setModalShowLikesComment,
  setModalPostDeleted,
  setModalCommentDeleted,
  user,
  setStatusFollow,
  modalEditProfilePhoto,
  modalEditUserName,
  modalEditName
}) => {
  const [expanded, setExpanded] = useState(false);
  const [countLikes, setCountLikes] = useState(commentItem2.arrLikes.length);
  const [editComment, setEditComment] = useState(false);

  const [description, setDescription] = useState(commentItem2.description);
  const [shortDescription, setShortDescription] = useState(
    commentItem2.shortDescription
  );

  const [like, setLike] = useState(false);

  useEffect(() => {
    if (
      !modalShowLikesComment &&
      Object.keys(commentStore.commentLikes).length !== 0
    ) {
      if (commentStore.commentLikes._id === commentItem2._id) {
        if (!commentStore.deleted) {
          if (commentStore.countLikes > 0) {
            setCountLikes(commentStore.countLikes);
          } else {
            setLike(false);
            setCountLikes(0);
          }

          commentStore.commentLikes = {};
          commentStore.like = false;
          commentStore.deleted = false;
          commentStore.countLikes = Number;
        }
      }
    }
  }, [modalShowLikesComment]);

  return (
    <>
      {!editComment ? (
        <>
          <Box className="homePageCommentGetBox2">
            <Photo
              commentItem2={commentItem2}
              user={user}
              setStatusFollow={setStatusFollow}
              modalEditUserName={modalEditUserName}
              modalEditProfilePhoto={modalEditProfilePhoto}
              modalEditName={modalEditName}
              
            />
            <div className="homePageCommentGetDiv2">
              <UserName commentItem2={commentItem2} modalEditUserName={modalEditUserName} />

              <SettingsButton
                item={item}
                commentItem={commentItem}
                commentItem2={commentItem2}
                setModalDeleteCommentOnComment={setModalDeleteCommentOnComment}
                commentOnCommentArr={commentOnCommentArr}
                setEditComment={setEditComment}
              />

              <LikeCount
                like={like}
                commentItem2={commentItem2}
                countLikes={countLikes}
                setCountLikes={setCountLikes}
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
                <p className="homePageCommentGetDescription2">
                  {shortDescription}
                </p>
              )}
            </div>
          </Box>

          <Box className="homePageCommentGetBoxButtons2">
            <Like
              commentItem2={commentItem2}
              like={like}
              setLike={setLike}
              countLikes={countLikes}
              setCountLikes={setCountLikes}
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
          setModalPostDeleted={setModalPostDeleted}
          setModalCommentDeleted={setModalCommentDeleted}
        />
      )}
    </>
  );
};

export default CardComment;
