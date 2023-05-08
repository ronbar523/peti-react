import React, { useEffect, useState } from "react";
import { userStore } from "../../../../../Store/User/UserStore";
import { postStore } from "../../../../../Store/Post/PostSotre";
import { commentStore } from "../../../../../Store/Comment/CommentStore";
import { findPostById } from "../../../../../Services/PostServices/PostGetService";
import { findTags } from "../../../../../Services/UserServices/UserGetService";
import { Card, CardHeader } from "@mui/material";
import CardCreateComment from "../../../../Comment/Create/CommentOnPost/CardCreateComment";
import GetComment from "../../../../Comment/Get/CommentOnPost/GetComment";
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
  setModalDeletePost,
  setModalEditPhotoPost,
  modalEditPhotoPost,
  modalAllComments,
  setModalAllComments,
  modalDeleteComment,
  setModalDeleteComment,
  modalDeleteCommentOnComment,
  setModalDeleteCommentOnComment,
  modalShowLikesPost,
  setModalShowLikesPost,
  modalShowLikesComment,
  setModalShowLikesComment,
  setModalPostDeleted,
  setModalCommentDeleted,
  modalCommentDeleted,
  modalCommentDeletedInCreate,
  setModalCommentDeletedInCreate,
  user,
  setStatusFollow,
  modalEditProfilePhoto,
  modalEditUserName,
  modalEditName
}) => {
  const [expanded, setExpanded] = useState(false);
  const [createdAt, setCreatedAt] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [arrTags, setArrTags] = useState([]);
  const [commentsArr, setCommentsArr] = useState([]);
  const [like, setLike] = useState(false);
  const [countLikes, setCountLikes] = useState(item.arrLikes.length);
  const [countComments, setCountComments] = useState(
    item.arrComments.length + item.arrCommentsForComments.length
  );

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
    if (!modalAllComments && !modalEditPhotoPost) {
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
    }
  }, [modalAllComments, modalEditPhotoPost]);

  useEffect(() => {
    if (!modalEditPhotoPost) {
      if (item.userNameTags !== undefined) {
        if (item.arrTag.length !== 0) {
          setArrTags(item.userNameTags);
        } else {
          setArrTags([]);
        }
      }
    }
  }, [modalEditPhotoPost]);

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
  }, [modalDeleteComment]);

  useEffect(() => {
    if (
      !modalAllComments &&
      Object.keys(postStore.post).length !== 0 &&
      postStore.postDeletedId === ""
    ) {
      if (postStore.post._id === item._id) {
        setIsLoading(true);

        const fetchData = async () => {
          try {
            await findPostById(postStore.post._id).then((res) => {
              item = res.data;
            });
            setCountComments(
              item.arrComments.length + item.arrCommentsForComments.length
            );
            setCountLikes(item.arrLikes.length);
            const arrLikes = item.arrLikes;
            setLike(false);
            for (let x = 0; x < arrLikes.length; x++) {
              if (userStore.user._id === arrLikes[x]) {
                setLike(true);
                break;
              }
            }

            setIsLoading(false);
            postStore.post = {};
          } catch {
            window.location.reload();
          }
        };

        fetchData();
      }
    }
  }, [modalAllComments]);

  useEffect(() => {
    if (!modalShowLikesPost && Object.keys(postStore.postLike).length !== 0) {
      if (postStore.postLike._id === item._id) {
        if (postStore.countLikes > 0) {
          setCountLikes(postStore.countLikes);
        } else {
          setLike(false);
          setCountLikes(0);
        }
      }

      postStore.postLike = {};
      postStore.like = false;
      postStore.countLikes = Number;
    }
  }, [modalShowLikesPost]);

  return (
    <>
      {!isLoading ? (
        <Card className="homePagePostCard">
          <CardHeader
            avatar={
              <ProfilePhoto
                item={item}
                setModalDeletePost={setModalDeletePost}
                setModalEditPhotoPost={setModalEditPhotoPost}
                user={user}
                setStatusFollow={setStatusFollow}
                modalEditProfilePhoto={modalEditProfilePhoto}
                modalEditUserName={modalEditUserName}
                modalEditName={modalEditName}
              />
            }
            action={
              <IconOptionsButton
                item={item}
                setModalDeletePost={setModalDeletePost}
                setModalEditPhotoPost={setModalEditPhotoPost}
              />
            }
            title={
              <ProfileUserName
                item={item}
                setModalDeletePost={setModalDeletePost}
                setModalEditPhotoPost={setModalEditPhotoPost}
                user={user}
                setStatusFollow={setStatusFollow}
                modalEditProfilePhoto={modalEditProfilePhoto}
                modalEditUserName={modalEditUserName}
                modalEditName={modalEditName}
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
            <p className="homePagePostCardDescription">{item.description}</p>
          )}

          <div className="homePagePostCardDivPhoto">
            <img
              className="homePagePostCardPhoto"
              src={item.postPhoto}
              alt="Post photo"
            />
          </div>

          <LikeModal
            item={item}
            countLikes={countLikes}
            setModalShowLikesPost={setModalShowLikesPost}
            like={like}
          />

          {item.location !== "" ? (
            <div>
              <h6 className="homePagePostCardLocationText">
                <LocationOnIcon sx={{ mt: "-4px", mr: "10px" }} />
                {item.location}
              </h6>
            </div>
          ) : null}

          {arrTags.length > 0 ? (
            <div
              className={
                item.location !== ""
                  ? "homePagePostCardDivUsersTag"
                  : "homePagePostCardDivUsersTag2"
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

          <hr className="homePagePostCardHrActionButtons" />
          <div className="homePagePostCardDivActionButtons">
            <Like
              item={item}
              like={like}
              setLike={setLike}
              countLikes={countLikes}
              setCountLikes={setCountLikes}
              modalAllComments={modalAllComments}
              setModalPostDeleted={setModalPostDeleted}
            />
            <Comments
              item={item}
              countComments={countComments}
              setModalAllComments={setModalAllComments}
              modalEditUserName={modalEditUserName}
              modalEditProfilePhoto={modalEditProfilePhoto}
            />
            <Share />
          </div>

          <hr className="homePagePostCardHrActionButtons" />

          <CardCreateComment
            item={item}
            commentsArr={commentsArr}
            setCommentsArr={setCommentsArr}
            countComments={countComments}
            setCountComments={setCountComments}
            modalCommentDeleted={modalCommentDeleted}
            setModalPostDeleted={setModalPostDeleted}
            modalCommentDeletedInCreate={modalCommentDeletedInCreate}
            modalAllComments={modalAllComments}
          />

          <GetComment
            item={item}
            commentsArr={commentsArr}
            setCommentsArr={setCommentsArr}
            countComments={countComments}
            setCountComments={setCountComments}
            modalAllComments={modalAllComments}
            setModalDeleteComment={setModalDeleteComment}
            modalDeleteCommentOnComment={modalDeleteCommentOnComment}
            modalCommentDeletedInCreate={modalCommentDeletedInCreate}
            setModalDeleteCommentOnComment={setModalDeleteCommentOnComment}
            modalShowLikesComment={modalShowLikesComment}
            setModalShowLikesComment={setModalShowLikesComment}
            setModalPostDeleted={setModalPostDeleted}
            modalCommentDeleted={modalCommentDeleted}
            setModalCommentDeleted={setModalCommentDeleted}
            setModalCommentDeletedInCreate={setModalCommentDeletedInCreate}
            user={user}
            setStatusFollow={setStatusFollow}
            modalEditUserName={modalEditUserName}
            modalEditProfilePhoto={modalEditProfilePhoto}
            modalEditName={modalEditName}
            
          />
        </Card>
      ) : null}
    </>
  );
};

export default BodyPost;
