import http from "../httpService";
const URL = process.env.REACT_APP_SERVER_URL;


export const deletePost = async (id) => http.delete(`${URL}/post/delete/delete_post/${id}`);
