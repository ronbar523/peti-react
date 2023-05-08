import http from "../httpService";
const URL = process.env.REACT_APP_SERVER_URL;


export const sendLike = async (commentId, postId, commentMainId) => http.patch(`${URL}/comment/edit/send_like/${commentId}/${postId}/${commentMainId}`);

export const removeLike = async (commentId, postId, commentMainId) => http.patch(`${URL}/comment/edit/remove_like/${commentId}/${postId}/${commentMainId}`);

export const editComment = async (commentId, postId, commentMainId, requestBody) => http.patch(`${URL}/comment/edit/edit_comment/${commentId}/${postId}/${commentMainId}`, requestBody);

