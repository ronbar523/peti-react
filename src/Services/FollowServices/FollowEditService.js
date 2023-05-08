import http from "../httpService";
const URL = process.env.REACT_APP_SERVER_URL;


export const sendFollow = async (id) => await http.patch(`${URL}/follow/edit/send_follow/${id}`)

export const removeFollow = async (id) => await http.patch(`${URL}/follow/edit/remove_follow/${id}`)

export const removeFollowers = async (id) => await http.patch(`${URL}/follow/edit/remove_followers/${id}`)

export const removeFollowRequest = async (id) => await http.patch(`${URL}/follow/edit/remove_follow_request/${id}`);

export const acceptFollowRequest = async (id) => await http.patch(`${URL}/follow/edit/accept_follow_request/${id}`);

export const acceptAllFollowRequest = async (countRequest) => await http.patch(`${URL}/follow/edit/accept_all_follow_request/?countRequest=${countRequest}`);

export const rejectFollowRequest = async (id) => await http.patch(`${URL}/follow/edit/reject_follow_request/${id}`);

export const rejectAllFollowRequest = async (countRequest) => await http.patch(`${URL}/follow/edit/reject_all_follow_request/?countRequest=${countRequest}`);

