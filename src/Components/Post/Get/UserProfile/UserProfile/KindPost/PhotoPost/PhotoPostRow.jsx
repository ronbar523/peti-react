import React, { useCallback, useEffect, useState } from "react";
import { findUserPosts } from "../../../../../../../Services/PostServices/PostGetService";
import { Box, CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import ModalReload from "./Modals/ModalReload";
import BodyPost from "../../../../HomePage/BodyPost/BodyPost";

const PhotoPostRow1 = ({
  postArrays,
  postArr,
  setPostArr,
  setModalAllComments,
  modalAllComments,
  modalDeleteComment,
  setModalDeleteComment,
  modalDeleteCommentOnComment,
  setModalDeleteCommentOnComment,
  modalShowLikesPost,
  setModalShowLikesPost,
  modalShowLikesComment,
  setModalShowLikesComment,
  setModalPostDeleted,
  modalCommentDeletedInCreate,
  setModalCommentDeletedInCreate,
  user,
  setStatusFollow,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [morePosts, setMorePosts] = useState(true);
  const [isLoadingMorePhotos, setIsLoadingMorePhotos] = useState(false);

  useEffect(() => {
    if (isLoading && postArr.length === 0) {
      getPhotoPost();
    }
    setIsLoading(false);
  }, []);

  const getPhotoPost = useCallback(async () => {
    try {
      setIsLoadingMorePhotos(true);
      const id = postArrays._id;
      const postKind = "PhotoPost";
      const skip = postArr.length;
      let limit = postArr.length + 6;
      setTimeout(async () => {
      await findUserPosts(id, postKind, skip, limit).then((res) => {
        if (postArr.length !== 0) {
          const arr = res.data.userPostsArr;
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
          setPostArr(postArr.concat(res.data.userPostsArr));
        }
      });
      setIsLoadingMorePhotos(false);
    }, 500);
    } catch {
      window.location.reload();
    }
  }, [postArr]);

  return (
    <>
      {!isLoading ? (
        <div className="userProfilePhotoPostDiv">
          <InfiniteScroll
            dataLength={postArr.length}
            next={getPhotoPost}
            hasMore={morePosts}
          >
            {postArr.map((item) => {
              return (
                <BodyPost
                  key={item._id}
                  item={item}
                  setModalAllComments={setModalAllComments}
                  modalAllComments={modalAllComments}
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
                  modalCommentDeletedInCreate={modalCommentDeletedInCreate}
                  setModalCommentDeletedInCreate={
                    setModalCommentDeletedInCreate
                  }
                  user={user}
                  setStatusFollow={setStatusFollow}
                />
              );
            })}
          </InfiniteScroll>
        </div>
      ) : (
        <ModalReload />
      )}

      {isLoadingMorePhotos ? (
        <Box sx={{ display: "flex", mt: 2.5, mb: 2.5 }}>
          <CircularProgress sx={{ margin: "auto" }} />
        </Box>
      ) : null}
    </>
  );
};

export default PhotoPostRow1;
