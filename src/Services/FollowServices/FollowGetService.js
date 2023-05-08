import http from "../httpService";
const URL = process.env.REACT_APP_SERVER_URL;

export const findMyFollow = async () =>
  await http.get(`${URL}/follow/get/find_my`);

export const findFollowById = async (id) =>
  await http.get(`${URL}/follow/get/find_by_id/${id}`);

export const findFollowByUserName = async (UserName) =>
  await http.get(`${URL}/follow/get/find_by_user_name/${UserName}`);

export const findFollowers = async (id, firstTime, skip, limit) =>
  await http.get(
    `${URL}/follow/get/find_followers/${id}/?firstTime=${firstTime}&skip=${skip}&limit=${limit}`
  );

export const findFollowing = async (id, firstTime, skip, limit) =>
  await http.get(
    `${URL}/follow/get/find_following/${id}/?firstTime=${firstTime}&skip=${skip}&limit=${limit}`
  );

export const findMyFollowers = async (firstTime, skip, limit) =>
  await http.get(
    `${URL}/follow/get/find_my_followers/?firstTime=${firstTime}&skip=${skip}&limit=${limit}`
  );

export const findMyFollowing = async (skip, limit) =>
  await http.get(
    `${URL}/follow/get/find_my_following/?skip=${skip}&limit=${limit}`
  );

export const findMyLengthFollow = async () =>
  await http.get(`${URL}/follow/get/find_my_length_follow`);

export const findLengthFollow = async (id) =>
  await http.get(`${URL}/follow/get/find_length_follow/${id}`);

export const findMyRequestFollow = async (skip, limit) =>
  await http.get(
    `${URL}/follow/get/find_my_request/?skip=${skip}&limit=${limit}`
  );

export const findMyFollowersAfterFilter = async (filter) =>
  await http.get(`${URL}/follow/get/filter_my_followers/?filter=${filter}`);

export const findFollowersAfterFilter = async (id, filter) =>
  await http.get(`${URL}/follow/get/filter_followers/${id}/?filter=${filter}`);

  export const findFollowingAfterFilter = async (id, filter) =>
  await http.get(`${URL}/follow/get/filter_following/${id}/?filter=${filter}`);

export const findMyFollowingAfterFilter = async (filter) =>
  await http.get(`${URL}/follow/get/filter_my_following/?filter=${filter}`);

export const findMyFollowersRequestAfterFilter = async (filter) =>
  await http.get(
    `${URL}/follow/get/filter_my_followers_request/?filter=${filter}`
  );
