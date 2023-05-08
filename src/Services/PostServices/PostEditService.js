import http from "../httpService";
const URL = process.env.REACT_APP_SERVER_URL;


export const editPost = async (id, requestBody) => http.patch(`${URL}/post/edit/edit_post/${id}`, requestBody);

export const removeMyTag = async (id) => http.patch(`${URL}/post/edit/remove_my_tag/${id}`);

export const sendLike = async (id) => http.patch(`${URL}/post/edit/send_like/${id}`);

export const removeLike = async (id) => http.patch(`${URL}/post/edit/remove_like/${id}`);
