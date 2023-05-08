import React from "react";
import { postStore } from "../../../../../../../../Store/Post/PostSotre";

const PhotoPostBody = ({ item, setModalAllComments }) => {

  const showPost = () => {
    setModalAllComments(true);
    postStore.post = item;
  };
  return (
    <div className="col-4 col-md-4 col-lg-4 mx-0 mb-4 d-inline ">
      <button className="myProfilePhotoPostButton" onClick={() => showPost()}>
        <img className="myProfilePhotoPostImgButton" src={item.postPhoto} />
      </button>
    </div>
  );
};

export default PhotoPostBody;
