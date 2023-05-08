import React, { useCallback, useEffect, useState } from "react";
import "../../../../Css/Post/Get/HomePage/homePagePostCard.css";
import { findPosts } from "../../../../Services/PostServices/PostGetService";
import BodyPost from "./BodyPost/BodyPost";
import { Box, CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

const CardPost = ({
  postArr,
  setPostArr,
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
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [morePosts, setMorePosts] = useState(true);
  const [isLoadingMorePhotos, setIsLoadingMorePhotos] = useState(false);

  useEffect(() => {
    if (isLoading) {
      getPhotoPost();
    }
    setIsLoading(false);
  }, []);

  const getPhotoPost = useCallback(async () => {
    try {
      setIsLoadingMorePhotos(true);
      const skip = postArr.length;
      const liimt = postArr.length + 2;
      setTimeout(async () => {
      await findPosts(skip, liimt).then((res) => {
        if (postArr.length !== 0) {
          const arr = res.data.postsArr;
          const arr2 = [];

          for (let x = 0; x < arr.length; x++) {
            let flag = false;
            for (let y = 0; y < postArr.length; y++) {
              if (postArr[y]._id === arr[x]._id) {
                flag = true;
                break;
              }
            }
            if (!flag) {
              arr2.push(arr[x]);
            }
          }

          setPostArr(postArr.concat(arr2));
        } else {
          setPostArr(postArr.concat(res.data.postsArr));
        }

        if (res.data.postsArr.length < 2) {
          setMorePosts(false);
        }
        setIsLoadingMorePhotos(false);
      });
    }, 1000);
    } catch {
      window.location.reload();
    }
  }, [postArr]);

  return (
    <>
      {!isLoading ? (
        <div className="mt-3">
          <InfiniteScroll
            dataLength={postArr.length}
            next={getPhotoPost}
            hasMore={morePosts}
          >
            {postArr.map((item) => {
              return (
                <BodyPost
                  key={item._id}
                  postArr={postArr}
                  setPostArr={setPostArr}
                  item={item}
                  setModalDeletePost={setModalDeletePost}
                  setModalEditPhotoPost={setModalEditPhotoPost}
                  modalEditPhotoPost={modalEditPhotoPost}
                  modalAllComments={modalAllComments}
                  setModalAllComments={setModalAllComments}
                  modalDeleteComment={modalDeleteComment}
                  setModalDeleteComment={setModalDeleteComment}
                  modalDeleteCommentOnComment={modalDeleteCommentOnComment}
                  setModalDeleteCommentOnComment={
                    setModalDeleteCommentOnComment
                  }
                  modalShowLikesPost={modalShowLikesPost}
                  setModalShowLikesPost={setModalShowLikesPost}
                  modalShowLikesComment={modalShowLikesComment}
                  setModalShowLikesComment={setModalShowLikesComment}
                  setModalPostDeleted={setModalPostDeleted}
                  setModalCommentDeleted={setModalCommentDeleted}
                  modalCommentDeleted={modalCommentDeleted}
                  modalCommentDeletedInCreate={modalCommentDeletedInCreate}
                  setModalCommentDeletedInCreate={
                    setModalCommentDeletedInCreate
                  }
                />
              );
            })}
          </InfiniteScroll>
        </div>
      ) : null}

      {isLoadingMorePhotos && postArr.length > 0 ? (
        <Box sx={{ display: "flex", mt: 2.5, mb: 2.5 }}>
          <CircularProgress sx={{ margin: "auto" }} />
        </Box>
      ) : null}
    </>
  );
};

export default CardPost;
