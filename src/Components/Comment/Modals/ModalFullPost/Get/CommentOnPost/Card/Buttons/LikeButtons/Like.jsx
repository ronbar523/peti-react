import React, { useEffect } from "react";
import { userStore } from "../../../../../../../../../Store/User/UserStore";
import RemoveLike from "./Buttons/RemoveLike";
import SendLike from "./Buttons/SendLike";

const Like = ({ commentItem, like, setLike, countLikes, setCountLikes, setModalCommentDeleted, setModalPostDeleted }) => {
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const arrLikes = commentItem.arrLikes;

        for (let x = 0; x < arrLikes.length; x++) {
          if (arrLikes[x] === userStore.user._id) {
            setLike(true);
            break;
          }
        }
      } catch {
        window.location.reload();
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {like ? (
        <RemoveLike
          commentItem={commentItem}
          countLikes={countLikes}
          setCountLikes={setCountLikes}
          setLike={setLike}
          setModalCommentDeleted={setModalCommentDeleted}
          setModalPostDeleted={setModalPostDeleted}
        />
      ) : (
        <SendLike
          commentItem={commentItem}
          countLikes={countLikes}
          setCountLikes={setCountLikes}
          setLike={setLike}
          setModalCommentDeleted={setModalCommentDeleted}
          setModalPostDeleted={setModalPostDeleted}
        />
      )}
    </>
  );
};

export default Like;
