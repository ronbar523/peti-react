import http from "../httpService";
const URL = process.env.REACT_APP_SERVER_URL;

export const deleteMyUser = async () => {
  await http.patch(
    `${URL}/user/delete/delete_my_user`
  );
  localStorage.removeItem("token");
};
