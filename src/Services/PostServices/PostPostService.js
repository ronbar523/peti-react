import http from "../httpService";
const URL = process.env.REACT_APP_SERVER_URL;


export const createPost = async (requestBody) => 
    http.post(`${URL}/post/post/create_post`, requestBody)
