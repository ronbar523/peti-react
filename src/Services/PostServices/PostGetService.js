import http from "../httpService";
const URL = process.env.REACT_APP_SERVER_URL;

export const findMyPosts = async (postKind, skip, limit) =>
  http.get(
    `${URL}/post/get/find_my_post/?postKind=${postKind}&skip=${skip}&limit=${limit}`
  );

export const findUserPosts = async (id, postKind, skip, limit) =>
  http.get(
    `${URL}/post/get/find_user_post/${id}/?postKind=${postKind}&skip=${skip}&limit=${limit}`
  );

export const findPosts = async (skip, limit) =>
  http.get(`${URL}/post/get/find_post/?skip=${skip}&limit=${limit}`);

export const findPostById = async (id) =>
  http.get(`${URL}/post/get/find_post_by_id/${id}`);

export const findLikes = async (id, firstTime, skip, limit) =>
  http.get(
    `${URL}/post/get/find_likes/${id}/?firstTime=${firstTime}&skip=${skip}&limit=${limit}`
  );

export const findLikesAfterFilter = async (id, filter) =>
  http.get(`${URL}/post/get/find_likes_after_filter/${id}/?filter=${filter}`);
