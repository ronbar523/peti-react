import React, { useCallback, useEffect, useState } from "react";
import { findMyPosts } from "../../../../../../../Services/PostServices/PostGetService";
import { Box, CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import ModalReload from "./Modals/ModalReload";
import "../../../../../../../Css/Post/Get/UserProfile/MyProfile/MyProfilePhotoPost.css";
import PhotoPostBody from "./Body/PhotoPostBody";

const PhotoPostTable = ({ setModalAllComments, postArr, setPostArr, modalEditUserName, modalEditProfilePhoto, modalEditName }) => {
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
      const postKind = "PhotoPost";
      const skip = postArr.length;
      let limit = postArr.length + 6;
      setTimeout(async () => {
      await findMyPosts(postKind, skip, limit).then((res) => {
        if (postArr.length !== 0) {
          const arr = res.data.myPostsArr;
          const arr2 = [];
          for (let x = 0; x < arr.length; x++) {
            let flag = false;
            for (let y = 0; y < postArr.length; y++) {
              if (postArr[y]._id === arr[x]._id) {
                flag = true;
                break;
              }
            }
            if(!flag){
              arr2.push(arr[x])
            }
          }
          setPostArr(postArr.concat(arr2));
        } else {
          setPostArr(postArr.concat(res.data.myPostsArr));
        }
        if (res.data.myPostsArr.length < 6) {
          setMorePosts(false);
        }
        setIsLoadingMorePhotos(false);
      });
    }, 500);
    } catch {
      window.location.reload();
    }
  }, [postArr]);

  return (
    <>
      {!isLoading ? (
        <div className="myProfilePhotoPostDiv">
          <InfiniteScroll
            dataLength={postArr.length}
            next={getPhotoPost}
            hasMore={morePosts}
          >
            {postArr.map((item) => {
              return (
                <PhotoPostBody
                  key={item._id}
                  item={item}
                  setModalAllComments={setModalAllComments}
                  modalEditUserName={modalEditUserName}
                  modalEditProfilePhoto={modalEditProfilePhoto}
                  modalEditName={modalEditName}
                />
              );
            })}
          </InfiniteScroll>
        </div>
      ) : (
        <ModalReload />
      )}

      {isLoadingMorePhotos  ? (
        <Box sx={{ display: "flex", mt: 2.5, mb: 2.5 }}>
          <CircularProgress sx={{ margin: "auto" }} />
        </Box>
      ) : null}
    </>
  );
};

export default PhotoPostTable;
