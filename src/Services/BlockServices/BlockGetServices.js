import http from "../httpService";
const URL = process.env.REACT_APP_SERVER_URL;

export const findMyBlock = () => http.get(`${URL}/block/get/find_my`);

export const findMyBlockUser = (skip, limit) => http.get(`${URL}/block/get/find_my_block/?skip=${skip}&limit=${limit}`);

export const filterMyBlockUser = (filter) => http.get(`${URL}/block/get/filter_my_block/?filter=${filter}`);
