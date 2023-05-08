import  http from "../httpService";
const URL = process.env.REACT_APP_SERVER_URL;

export const findMyPostArrays = async () => await http.get(`${URL}/post_arrays/get/find_my`);

export const findUserPostArrays = async (id) => await http.get(`${URL}/post_arrays/get/find_user/${id}`);


