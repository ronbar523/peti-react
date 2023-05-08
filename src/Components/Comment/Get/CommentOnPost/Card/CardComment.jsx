import React, { useEffect, useState } from "react";
import { commentStore } from "../../../../../Store/Comment/CommentStore";
import { Box } from "@mui/material";
import Photo from "./Buttons/ProfileButtons/Photo";
import UserName from "./Buttons/ProfileButtons/UserName";
import ShowLess from "./Buttons/ReadButtons/ShowLess";
import ShowMore from "./Buttons/ReadButtons/ShowMore";
import Like from "./Buttons/LikeButtons/Like";
import Comment from "./Buttons/CommentButtons/Comment";
import LikeCount from "./Buttons/CountButtons/LikeCount";
import CommentCount from "./Buttons/CountButtons/CommentCount";
import SettingsButton from "./Buttons/SettingsButtons/SettingsButtons";
import CreatedAt from "./Buttons/CreatedAt/CreatedAt";
import CardCreateComment from "../../../Create/CommentOnComment/CardCreateComment";
import GetComment from "../../CommentOnComment/GetComment";
import EditComment from "../../../Edit/CommentOnPost/EditComment";

const CardComment = ({
  item,
  commentsArr,
  commentItem,
  countComments,
  setCountComments,
  setModalDeleteComment,
  index,
  modalDeleteCommentOnComment,
  setModalDeleteCommentOnComment,
  modalShowLikesComment,
  setModalShowLikesComment,
  setModalPostDeleted,
  modalCommentDeleted,
  setModalCommentDeleted,
  modalAllComments,
  setModalCommentDeletedInCreate,
  user,
  setStatusFollow,
  modalEditProfilePhoto,
  modalEditUserName,
  modalEditName
}) => {
  const [expanded, setExpanded] = useState(false);
  const [openInputOnComment, setOpenInputOnComment] = useState(false);
  const [countLikes, setCountLikes] = useState(commentItem.arrLikes.length);
  const [countComments2, setCountComments2] = useState(
    commentItem.arrComments.length
  );
  const [commentOnCommentArr, setCommentOnCommentArr] = useState([]);

  const [editComment, setEditComment] = useState(false);
  const [description, setDescription] = useState(commentItem.description);
  const [shortDescription, setShortDescription] = useState(
    commentItem.shortDescription
  );
  const [like, setLike] = useState(false);
  const [slice, setSlice] = useState(2);

  useEffect(() => {
    if (
      !modalShowLikesComment &&
      Object.keys(commentStore.commentLikes).length !== 0
    ) {
      if (commentStore.commentLikes._id === commentItem._id) {
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
          <Box className="homePageCommentGetCard1">
            <Photo
              commentItem={commentItem}
              user={user}
              setStatusFollow={setStatusFollow}
              modalEditUserName={modalEditUserName}
              modalEditProfilePhoto={modalEditProfilePhoto}
              modalEditName={modalEditName}
            />
            <div className="homePageCommentGetDiv1">
              <UserName
                commentItem={commentItem}
                modalEditUserName={modalEditUserName}
              />
              <SettingsButton
                item={item}
                commentsArr={commentsArr}
                commentItem={commentItem}
                setEditComment={setEditComment}
                setModalDeleteComment={setModalDeleteComment}
              />

              <LikeCount
                commentItem={commentItem}
                like={like}
                countLikes={countLikes}
                setCountLikes={setCountLikes}
                setModalShowLikesComment={setModalShowLikesComment}
              />

              <CommentCount
                commentItem={commentItem}
                commentOnCommentArr={commentOnCommentArr}
                setCommentOnCommentArr={setCommentOnCommentArr}
                countComments2={countComments2}
                setCountComments2={setCountComments2}
                slice={slice}
                setSlice={setSlice}
                setModalPostDeleted={setModalPostDeleted}
                setModalCommentDeleted={setModalCommentDeleted}
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
                <p className="homePageCommentGetDescription1">
                  {shortDescription}
                </p>
              )}
            </div>
          </Box>
          <Box className="homePageCommentGetBoxButtons1">
            <Like
              like={like}
              setLike={setLike}
              commentItem={commentItem}
              countLikes={countLikes}
              setCountLikes={setCountLikes}
              setModalCommentDeleted={setModalCommentDeleted}
              setModalPostDeleted={setModalPostDeleted}
            />

            <Comment setOpenInputOnComment={setOpenInputOnComment} />

            <CreatedAt commentItem={commentItem} />
          </Box>
        </>
      ) : (
        <EditComment
          index={index}
          commentItem={commentItem}
          setEditComment={setEditComment}
          description={description}
          setDescription={setDescription}
          setShortDescription={setShortDescription}
          setModalPostDeleted={setModalPostDeleted}
          setModalCommentDeleted={setModalCommentDeleted}
        />
      )}
      <GetComment
        item={item}
        commentItem={commentItem}
        setOpenInputOnComment={setOpenInputOnComment}
        commentOnCommentArr={commentOnCommentArr}
        setCommentOnCommentArr={setCommentOnCommentArr}
        modalDeleteCommentOnComment={modalDeleteCommentOnComment}
        setModalDeleteCommentOnComment={setModalDeleteCommentOnComment}
        countComments={countComments}
        setCountComments={setCountComments}
        countComments2={countComments2}
        setCountComments2={setCountComments2}
        slice={slice}
        modalShowLikesComment={modalShowLikesComment}
        setModalShowLikesComment={setModalShowLikesComment}
        setModalPostDeleted={setModalPostDeleted}
        modalCommentDeleted={modalCommentDeleted}
        setModalCommentDeleted={setModalCommentDeleted}
        modalAllComments={modalAllComments}
        user={user}
        setStatusFollow={setStatusFollow}
        modalEditUserName={modalEditUserName}
        modalEditProfilePhoto={modalEditProfilePhoto}
        modalEditName={modalEditName}
      />

      {openInputOnComment ? (
        <CardCreateComment
          setOpenInputOnComment={setOpenInputOnComment}
          commentItem={commentItem}
          commentOnCommentArr={commentOnCommentArr}
          setCommentOnCommentArr={setCommentOnCommentArr}
          countComments={countComments}
          setCountComments={setCountComments}
          countComments2={countComments2}
          setCountComments2={setCountComments2}
          commentsArr={commentsArr}
          setSlice={setSlice}
          setModalPostDeleted={setModalPostDeleted}
          setModalCommentDeletedInCreate={setModalCommentDeletedInCreate}
        />
      ) : null}
    </>
  );
};

export default CardComment;
