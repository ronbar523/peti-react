import React, { useEffect } from "react";
import { userStore } from "../../../../../../../../../Store/User/UserStore";
import SendLike from "./Buttons/SendLike";
import RemoveLike from "./Buttons/RemoveLike";

const Like = ({ commentItem2, countLikes, setCountLikes, like, setLike, setModalPostDeleted,
  setModalCommentDeleted }) => {
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const arrLikes = commentItem2.arrLikes;

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
          commentItem2={commentItem2}
          countLikes={countLikes}
          setCountLikes={setCountLikes}
          setLike={setLike}
          setModalPostDeleted={setModalPostDeleted}
          setModalCommentDeleted={setModalCommentDeleted}
        />
      ) : (
        <SendLike
          commentItem2={commentItem2}
          countLikes={countLikes}
          setCountLikes={setCountLikes}
          setLike={setLike}
          setModalPostDeleted={setModalPostDeleted}
          setModalCommentDeleted={setModalCommentDeleted}
        />
      )}
    </>
  );
};

export default Like;
