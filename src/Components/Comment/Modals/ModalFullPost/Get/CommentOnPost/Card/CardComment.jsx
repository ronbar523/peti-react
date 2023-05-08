import React, { useState } from "react";
import "../../../../../../../Css/Comment/Modals/ModalFullPost/Get/ModalFullPostGetComment1.css";
import { Box } from "@mui/material";
import Photo from "./Buttons/ProfileButtons/Photo";
import UserName from "./Buttons/ProfileButtons/UserName";
import SettingsButton from "./Buttons/SettingsButtons/SettingsButtons";
import LikeCount from "./Buttons/CountButtons/LikeCount";
import CommentCount from "./Buttons/CountButtons/CommentCount";
import ShowLess from "./Buttons/ReadButtons/ShowLess";
import ShowMore from "./Buttons/ReadButtons/ShowMore";
import Like from "./Buttons/LikeButtons/Like";
import Comment from "./Buttons/CommentButtons/Comment";
import CreatedAt from "./Buttons/CreatedAt/CreatedAt";
import EditComment from "../../../Edit/CommentOnPost/EditComment";
import GetComment from "../../CommentOnComment/GetComment";
import CardCreateComment from "../../../Create/CommentOnComment/CardCreateComment";

const CardComment = ({
  commentItem,
  commentsArr,
  countComments,
  setCountComments,
  setModalDeleteCommentModal,
  modalDeleteCommentOnCommentModal,
  setModalDeleteCommentOnCommentModal,
  setModalShowLikesComment,
  modalCommentDeleted,
  setModalCommentDeleted,
  setModalPostDeleted,
  setModalCommentDeletedInCreate,
  user,
  setStatusFollow,
}) => {
  const [like, setLike] = useState(false);
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

  const [slice, setSlice] = useState(2);

  return (
    <>
      {!editComment ? (
        <>
          <Box className="modalFullPostCommentGetCard1" sx={{ mt: "45px" }}>
            <Photo
              commentItem={commentItem}
              user={user}
              setStatusFollow={setStatusFollow}
            />
            <div className="modalFullPostCommentGetDiv1">
              <UserName commentItem={commentItem} />
              <SettingsButton
                commentItem={commentItem}
                setEditComment={setEditComment}
                commentsArr={commentsArr}
                setModalDeleteCommentModal={setModalDeleteCommentModal}
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
                <p className="modalFullPostCommentGetDescription1">
                  {shortDescription}
                </p>
              )}
            </div>
          </Box>
          <Box className="modalFullPostCommentGetBoxButtons1">
            <Like
              commentItem={commentItem}
              like={like}
              setLike={setLike}
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
        commentItem={commentItem}
        setOpenInputOnComment={setOpenInputOnComment}
        commentOnCommentArr={commentOnCommentArr}
        setCommentOnCommentArr={setCommentOnCommentArr}
        modalDeleteCommentOnCommentModal={modalDeleteCommentOnCommentModal}
        setModalDeleteCommentOnCommentModal={
          setModalDeleteCommentOnCommentModal
        }
        countComments={countComments}
        setCountComments={setCountComments}
        countComments2={countComments2}
        setCountComments2={setCountComments2}
        slice={slice}
        setModalShowLikesComment={setModalShowLikesComment}
        setModalPostDeleted={setModalPostDeleted}
        setModalCommentDeleted={setModalCommentDeleted}
        modalCommentDeleted={modalCommentDeleted}
        user={user}
        setStatusFollow={setStatusFollow}
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
