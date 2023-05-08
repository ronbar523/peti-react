import http from "../httpService";
const URL = process.env.REACT_APP_SERVER_URL;


export const createComment = async (postId, commentId, requestBody) => await http.post(`${URL}/comment/post/create_comment/${postId}/${commentId}`, requestBody)
