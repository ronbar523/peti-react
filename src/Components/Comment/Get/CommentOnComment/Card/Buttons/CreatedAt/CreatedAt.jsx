import React, { useState, useEffect } from "react";

const CreatedAt = ({commentItem2}) => {
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    let dateNow = Date.now();
    let createdBefore = (dateNow - commentItem2.createdAt) / 1000;
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
  }, []);

  return (
    <button className="homePageCommentGetCreatedAt2">
      <p className="homePageCommentGetCreatedAtText2">{createdAt}</p>
    </button>
  );
};

export default CreatedAt;
