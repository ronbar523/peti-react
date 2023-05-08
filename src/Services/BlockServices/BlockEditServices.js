import http from "../httpService";
const URL = process.env.REACT_APP_SERVER_URL;

export const blockUser = async (id) =>
  await http.patch(`${URL}/block/edit/block_user/${id}`);

export const removeBlockUser = async (id) =>
  await http.patch(`${URL}/block/edit/remove_block_user/${id}`);

export const removeAllBlockUser = async () =>
  await http.patch(`${URL}/block/edit/remove_all_block_user`);
