import React, { useCallback, useState } from "react";
import { postStore } from "../../../../../Store/Post/PostSotre";
import { deletePost } from "../../../../../Services/PostServices/PostDeleteService";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Delete = ({
  setModalDeletePost,
  postArr,
  setPostArr,
  totalPosts,
  setTotalPosts,
}) => {
  const [isLoadingDelete, setIsLodingDelete] = useState(false);

  const deletePostFunction = useCallback(async () => {
    try {
      setIsLodingDelete(true);
      await deletePost(postStore.post._id);

      for (let x = 0; x < postArr.length; x++) {
        if (postArr[x]._id === postStore.post._id) {
          let arrPost = postArr;
          arrPost.splice(x, 1);
          setPostArr(arrPost);
          break;
        }
      }

      if (totalPosts !== undefined) {
        setTotalPosts(totalPosts - 1);
      }

      postStore.post = {};
      document.body.style.overflow = "visible";

      setModalDeletePost(false);
    } catch (err) {
      if (err.response.status === 410) {
        for (let x = 0; x < postArr.length; x++) {
          if (postArr[x]._id === postStore.post._id) {
            let arrPost = postArr;
            arrPost.splice(x, 1);
            setPostArr(arrPost);
            break;
          }
        }

        if (totalPosts !== undefined) {
          setTotalPosts(totalPosts - 1);
        }

        postStore.post = {};
        document.body.style.overflow = "visible";
        setModalDeletePost(false);
      }
    }
  }, [postArr]);

  return (
    <>
      {!isLoadingDelete ? (
        <Button
          variant="outlined"
          color="error"
          sx={{
            float: "left",
            marginRight: "5px",
            marginTop: "7px",
            marginBottom: "9px",
            textTransform: "unset",
            height: "36px",
            width: 70,
          }}
          onClick={() => deletePostFunction()}
        >
          Delete
        </Button>
      ) : (
        <LoadingButton
          variant="outlined"
          sx={{
            float: "left",
            marginRight: "5px",
            marginTop: "7px",
            marginBottom: "9px",
            height: "36px",
            width: 70,
          }}
          loading={isLoadingDelete}
          disabled
        ></LoadingButton>
      )}
    </>
  );
};

export default Delete;
