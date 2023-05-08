import React, { useEffect, useState } from "react";
import { userStore } from "../../../../../../../../Store/User/UserStore";
import SendLike from "./Like/SendLike";
import RemoveLike from "./Like/RemoveLike";

const Like = ({
  item,
  countLikes,
  setCountLikes,
  like,
  setLike,
  setModalPostDeleted,
  setModalAllComments,
}) => {
  useEffect(() => {
    if (userStore.isLogin) {
      const arrLikes = item.arrLikes;
      for (let x = 0; x < arrLikes.length; x++) {
        if (userStore.user._id === arrLikes[x]) {
          setLike(true);
          break;
        }
      }
    }
  }, []);

  return (
    <>
      {like ? (
        <RemoveLike
          item={item}
          setLike={setLike}
          countLikes={countLikes}
          setCountLikes={setCountLikes}
          setModalPostDeleted={setModalPostDeleted}
          setModalAllComments={setModalAllComments}
        />
      ) : (
        <SendLike
          item={item}
          setLike={setLike}
          countLikes={countLikes}
          setCountLikes={setCountLikes}
          setModalPostDeleted={setModalPostDeleted}
          setModalAllComments={setModalAllComments}
        />
      )}
    </>
  );
};

export default Like;
