import http from "../httpService";
const URL = process.env.REACT_APP_SERVER_URL;

export const getCommentByPostId = async (postId, skip, limit) =>
  await http.get(
    `${URL}/comment/get/find_by_post_id/${postId}/?skip=${skip}&limit=${limit}`
  );

export const getCommentByCommentId = async (postId, commentId, skip, limit) =>
  await http.get(
    `${URL}/comment/get/find_by_comment_id/${postId}/${commentId}/?skip=${skip}&limit=${limit}`
  );

export const findLikes = async (postId, commentId, commentMainId, firstTime, skip, limit) =>
  http.get(
    `${URL}/comment/get/find_likes/${postId}/${commentId}/${commentMainId}/?firstTime=${firstTime}&skip=${skip}&limit=${limit}`
  );

export const findLikesAfterFilter = async (postId, commentId, commentMainId, filter) =>
  http.get(
    `${URL}/comment/get/find_likes_after_filter/${postId}/${commentId}/${commentMainId}/?filter=${filter}`
  );
