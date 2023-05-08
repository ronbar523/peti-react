import http from "../httpService";
const URL = process.env.REACT_APP_SERVER_URL;

export const deleteComment = async (postId, commentId) =>
  http.delete(`${URL}/comment/delete/delete_comment/${postId}/${commentId}`);

export const deleteCommentOnComment = async (
  postId,
  commentMainId,
  commentId
) =>
  http.delete(
    `${URL}/comment/delete/delete_comment_on_comment/${postId}/${commentMainId}/${commentId}`
  );
