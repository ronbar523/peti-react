import React, { useEffect, useRef, useState } from "react";
import "../../../../../../Css/Comment/Modals/ModalFullPost/ModalFullPost.css";
import { postStore } from "../../../../../../Store/Post/PostSotre";
import { commentStore } from "../../../../../../Store/Comment/CommentStore";
import { findTags } from "../../../../../../Services/UserServices/UserGetService";
import { Box, Card, CardHeader, CircularProgress } from "@mui/material";
import CardCreateComment from "../../../../../Comment/Modals/ModalFullPost/Create/CommentOnPost/CardCreateComment";
import GetComment from "../../../../../Comment/Modals/ModalFullPost/Get/CommentOnPost/GetComment";
import ProfilePhoto from "./Buttons/ProfileButtons/ProfilePhoto";
import ProfileUserName from "./Buttons/ProfileButtons/ProfileUserName";
import IconOptionsButton from "./Buttons/SettingsButtons/IconOptionsButton";
import ShowMore from "./Buttons/ShowButtons/ShowMore";
import ShowLess from "./Buttons/ShowButtons/ShowLess";
import UserTagLinkButton from "./Buttons/TagButtons/UserTagLinkButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleIcon from "@mui/icons-material/People";
import Like from "./Buttons/ActionButtons/Like";
import Comments from "./Buttons/ActionButtons/Comments";
import Share from "./Buttons/ActionButtons/Share";
import LikeModal from "./Buttons/LikeButtons/Like";

const BodyPost = ({
  item,
  setModalDeletePostModal,
  modalEditPhotoPostModal,
  setModalEditPhotoPostModal,
  modalDeleteCommentModal,
  setModalDeleteCommentModal,
  modalDeleteCommentOnCommentModal,
  setModalDeleteCommentOnCommentModal,
  modalShowLikesPost,
  setModalShowLikesPost,
  setModalAllComments,
  setModalShowLikesComment,
  setModalPostDeleted,
  modalCommentDeleted,
  setModalCommentDeleted,
  modalCommentDeletedInCreate,
  setModalCommentDeletedInCreate,
  user,
  setStatusFollow,
}) => {
  const inputRef = useRef();
  const [expanded, setExpanded] = useState(false);
  const [createdAt, setCreatedAt] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [arrTags, setArrTags] = useState([]);
  const [commentsArr, setCommentsArr] = useState([]);
  const [countLikes, setCountLikes] = useState(item.arrLikes.length);
  const [countComments, setCountComments] = useState(
    item.arrComments.length + item.arrCommentsForComments.length
  );
  const [like, setLike] = useState(false);

  useEffect(() => {
    let dateNow = Date.now();
    let createdBefore = (dateNow - item.createdAt) / 1000;
    if (createdBefore < 60) {
      if (createdBefore < 2) {
        setCreatedAt("1 sec ago");
      } else {
        setCreatedAt(createdBefore.toFixed(0) + " secs ago");
      }
    } else if (createdBefore < 3570) {
      if (createdBefore < 90) {
        setCreatedAt((createdBefore / 60).toFixed(0) + " min ago");
      } else {
        setCreatedAt((createdBefore / 60).toFixed(0) + " mins ago");
      }
    } else if (createdBefore < 84_600) {
      if (createdBefore < 5400) {
        setCreatedAt((createdBefore / 3600).toFixed(0) + " hour ago");
      } else {
        setCreatedAt((createdBefore / 3600).toFixed(0) + " hours ago");
      }
    } else if (createdBefore < 129_600) {
      setCreatedAt((createdBefore / 86_400).toFixed(0) + " day ago");
    } else {
      setCreatedAt((createdBefore / 86_400).toFixed(0) + " days ago");
    }
  }, []);

  useEffect(() => {
    if (item.userNameTags === undefined && item.arrTag.length > 0) {
      const fetchData = async () => {
        try {
          await findTags(item.arrTag).then((res) => {
            item.userNameTags = res.data.usersArr;
            setArrTags(res.data.usersArr);
          });

          setIsLoading(false);
        } catch {
          window.location.reload();
        }
      };

      fetchData();
    } else {
      if (item.arrTag.length !== 0) {
        setArrTags(item.userNameTags);
      } else {
        setArrTags([]);
      }
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!modalEditPhotoPostModal) {
      item = postStore.post;
      if (item.userNameTags !== undefined) {
        if (item.arrTag.length !== 0) {
          setArrTags(item.userNameTags);
        } else {
          setArrTags([]);
        }
      }
    }
  }, [modalEditPhotoPostModal]);

  useEffect(() => {
    if (commentStore.deleted) {
      if (commentStore.postId === item._id) {
        setCommentsArr(commentStore.commentArr);
        if (countComments - commentStore.comment.arrComments.length - 1 < 0) {
          setCountComments(0);
        } else {
          setCountComments(
            countComments - commentStore.comment.arrComments.length - 1
          );
        }

        commentStore.postId = "";
        commentStore.comment = {};
        commentStore.commentArr = [];
        commentStore.deleted = false;
      }
    }
  }, [modalDeleteCommentModal]);

  useEffect(() => {
    if (!modalShowLikesPost) {
      if (postStore.countLikes === 0) {
        setLike(false);
        setCountLikes(0);
      } else {
        setCountLikes(postStore.countLikes);
      }

      postStore.postLike = {};
      postStore.like = false;
      postStore.countLikes = Number;
    }
  }, [modalShowLikesPost]);

  return (
    <>
      {!isLoading ? (
        <div className="modalFullPostGetCard">
          <CardHeader
            avatar={
              <ProfilePhoto
                item={item}
                setModalDeletePostModal={setModalDeletePostModal}
                setModalEditPhotoPostModal={setModalEditPhotoPostModal}
                user={user}
                setStatusFollow={setStatusFollow}
              />
            }
            action={
              <IconOptionsButton
                item={item}
                setModalDeletePostModal={setModalDeletePostModal}
                setModalEditPhotoPostModal={setModalEditPhotoPostModal}
              />
            }
            title={
              <ProfileUserName
                item={item}
                setModalDeletePostModal={setModalDeletePostModal}
                setModalEditPhotoPostModal={setModalEditPhotoPostModal}
                user={user}
                setStatusFollow={setStatusFollow}
              />
            }
            subheader={createdAt}
          />
          {item.description !== item.shortDescription ? (
            <>
              {!expanded ? (
                <ShowMore item={item} setExpanded={setExpanded} />
              ) : (
                <ShowLess
                  item={item}
                  expanded={expanded}
                  setExpanded={setExpanded}
                />
              )}
            </>
          ) : (
            <p className="modalFullPostGetCardDescription">
              {item.description}
            </p>
          )}

          <div className="modalFullPostGetCardDivPhoto">
            <img
              className="modalFullPostGetCardPhoto"
              src={item.postPhoto}
              alt="Post photo"
            />
          </div>

          <LikeModal
            item={item}
            like={like}
            countLikes={countLikes}
            setModalShowLikesPost={setModalShowLikesPost}
          />

          {item.location !== "" ? (
            <div>
              <h6 className="modalFullPostGetCardLocationText">
                <LocationOnIcon sx={{ mt: "-4px", mr: "10px" }} />
                {item.location}
              </h6>
            </div>
          ) : null}

          {arrTags.length > 0 ? (
            <div
              className={
                item.location !== ""
                  ? "modalFullPostGetCardDivUsersTag"
                  : "modalFullPostGetCardDivUsersTag2"
              }
            >
              <PeopleIcon sx={{ mt: "-3.5px" }} />

              {arrTags.map((item2) => {
                return (
                  <UserTagLinkButton
                    item={item}
                    item2={item2}
                    key={item2._id}
                  />
                );
              })}
            </div>
          ) : null}

          <hr className="modalFullPostCardHrActionButtons" />
          <div className="modalFullPostGetCardDivActionButtons">
            <Like
              item={item}
              countLikes={countLikes}
              setCountLikes={setCountLikes}
              like={like}
              setLike={setLike}
              setModalPostDeleted={setModalPostDeleted}
              setModalAllComments={setModalAllComments}
            />
            <Comments countComments={countComments} inputRef={inputRef} />
            <Share />
          </div>

          <hr className="modalFullPostCardHrActionButtons" />

          <div id="modalFullPostScrollComments">
            <CardCreateComment
              item={item}
              inputRef={inputRef}
              commentsArr={commentsArr}
              setCommentsArr={setCommentsArr}
              countComments={countComments}
              setCountComments={setCountComments}
              setModalPostDeleted={setModalPostDeleted}
              modalCommentDeletedInCreate={modalCommentDeletedInCreate}
            />

            <GetComment
              item={item}
              commentsArr={commentsArr}
              setCommentsArr={setCommentsArr}
              countComments={countComments}
              setCountComments={setCountComments}
              modalDeleteCommentModal={modalDeleteCommentModal}
              setModalDeleteCommentModal={setModalDeleteCommentModal}
              modalDeleteCommentOnCommentModal={
                modalDeleteCommentOnCommentModal
              }
              setModalDeleteCommentOnCommentModal={
                setModalDeleteCommentOnCommentModal
              }
              setModalShowLikesComment={setModalShowLikesComment}
              modalCommentDeleted={modalCommentDeleted}
              setModalCommentDeleted={setModalCommentDeleted}
              setModalPostDeleted={setModalPostDeleted}
              modalCommentDeletedInCreate={modalCommentDeletedInCreate}
              setModalCommentDeletedInCreate={setModalCommentDeletedInCreate}
              user={user}
              setStatusFollow={setStatusFollow}
            />
          </div>
        </div>
      ) : (
        <Card sx={{ height: "550px" }}>
          <Box sx={{ display: "flex", mt: "220px" }}>
            <CircularProgress sx={{ margin: "auto" }} />
          </Box>
        </Card>
      )}
    </>
  );
};

export default BodyPost;
