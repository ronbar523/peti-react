import React, { useCallback, useEffect, useState } from "react";
import "../../../../../../../Css/Post/Get/UserProfile/UserProfile/UserPhotoPost.css";
import { findUserPosts } from "../../../../../../../Services/PostServices/PostGetService";
import { Box, CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import ModalReload from "./Modals/ModalReload";
import PhotoPostBody from "./Body/PhotoPostBody";

const PhotoPostTable = ({
  postArrays,
  postArr,
  setPostArr,
  setModalAllComments,
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
      if (postArrays.arrMyPhoto.length <= limit) {
        limit = postArrays.arrMyPhoto.length;
        setMorePosts(false);
      }
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
            {postArr.map((item, index) => {
              return (
                <PhotoPostBody
                  key={index}
                  item={item}
                  setModalAllComments={setModalAllComments}
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

export default PhotoPostTable;
