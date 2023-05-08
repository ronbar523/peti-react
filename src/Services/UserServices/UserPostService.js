import { userStore } from "../../Store/User/UserStore";
import http from "../httpService";
const URL = process.env.REACT_APP_SERVER_URL;

export const crateNewUser = (user) =>
  http.post(`${URL}/user/post/register`, user);

export const loginUser = async (user) => {
  const {
    data: { token },
  } = await http.post(`${URL}/user/post/login`, user);
  localStorage.setItem("token", token);
};

export const logout = () => {
  localStorage.removeItem("token");
  userStore.isLogin = false;
  userStore.user.arrBlockMe = [];
  userStore.user.arrFollowers = [];
  userStore.user.arrFollowing = [];
  userStore.user.arrMyBlock = [];
  userStore.user.arrMyUserLike = [];
  userStore.user.bio = "";
  userStore.user.countMylike = 0;
  userStore.user.countPost = 0;
  userStore.user.dateOfBirth = "";
  userStore.user.email = "";
  userStore.user.firstName = "";
  userStore.user.fullName = "";
  userStore.user.gender = "";
  userStore.user.isAdmin = false;
  userStore.user.lastName = "";
  userStore.user.phone = "";
  userStore.user.photo = "";
  userStore.user.public = false;
  userStore.user.userName = "";
  userStore.user.verify = false;
  userStore.user_id = "";

  window.location = "/";
};

export const uploadPhoto = async (photo) =>
  await http.post(`${URL}/user/post/upload_photo`, photo);

export const resendVerifyMail = async () =>
  await http.post(`${URL}/user/post/resend_verify_mail`);

export const resendForgetPassword = async (email) =>
  await http.post(`${URL}/user/post/resend_forget_password/${email}`);
