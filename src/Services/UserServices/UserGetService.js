import http from "../httpService";
import JWTDecode from "jwt-decode";
import { userStore } from "../../Store/User/UserStore";
import { findMyFollow } from "../FollowServices/FollowGetService";
import { findMyBlock } from "../BlockServices/BlockGetServices";
import { findMyPostArrays } from "../PostArraysServices/PostArraysGetService";
const URL = process.env.REACT_APP_SERVER_URL;
http.setHeaders("token", getJWT());

export function getJWT() {
  return localStorage.getItem("token");
}

export const findUserById = async () => {
  try {
    const token = JWTDecode(localStorage.getItem("token"));
    const user = await http.get(`${URL}/user/get/find_by_id/${token._id}`);
    const follow = await findMyFollow();
    const block = await findMyBlock();
    const postArray = await findMyPostArrays()
    userStore.isLogin = true;
    userStore.user.arrBlockMe = block.data.arrBlockMe;
    userStore.user.arrFollowers = follow.data.arrFollowers;
    userStore.user.arrFollowing = follow.data.arrFollowing;
    userStore.user.arrFollowersRequest = follow.data.arrFollowersRequest;
    userStore.user.arrFollowingRequest = follow.data.arrFollowingRequest;
    userStore.user.arrMyBlock = block.data.arrMyBlock;
    userStore.user.arrMyUserLike = user.data.arrMyUserLike;
    userStore.user.bio = user.data.bio;
    userStore.user.countMylike = user.data.countMylike;
    userStore.user.countPost = user.data.countPost;
    userStore.user.dateOfBirth = user.data.dateOfBirth;
    userStore.user.email = user.data.email;
    userStore.user.firstName = user.data.firstName;
    userStore.user.fullName = user.data.fullName;
    userStore.user.gender = user.data.gender;
    userStore.user.isAdmin = user.data.isAdmin;
    userStore.user.lastName = user.data.lastName;
    userStore.user.myPostPhotoLength = postArray.data.arrMyPhoto.length 
    userStore.user.myPostVideoLength = postArray.data.arrMyVideo.length
    userStore.user.myPostTextLength = postArray.data.arrMyTextPost.length
    userStore.user.phone = user.data.phone;
    userStore.user.photo = user.data.photo;
    userStore.user.public = user.data.public;
    userStore.user.userName = user.data.userName;
    userStore.user.verify = user.data.verify;
    userStore.user._id = token._id;
  } catch (err) {
    return null;
  }
};

export const findUserByEmail = async(email) =>
  await http.get(`${URL}/user/get/find_by_email/${email}`);

export const findUserByUserName = async(userName) =>
  await http.get(`${URL}/user/get/find_by_user_Name/${userName}`);

export const findFollowers = async(userName, start, end, follow, flag) =>
  await http.get(
    `${URL}/user/get/find_followers/${userName}/?start=${start}&end=${end}&follow=${follow}&flag=${flag}`
  );

export const findByName = async(firstName, lastName, userName, fullName, skip, limit) =>
  await http.get(
    `${URL}/user/get/find_by_Name/?firstName=${firstName}&lastName=${lastName}&userName=${userName}&fullName=${fullName}&skip=${skip}&limit=${limit}`
  );

export const findUsersForTags = async(userName, limit) =>
  await http.get(
    `${URL}/user/get/find_for_tag/?userName=${userName}&limit=${limit}`
  );

  export const findUsersFormMyFollowers = async(limit) =>
  await http.get(
    `${URL}/user/get/find_form_my_followers/?limit=${limit}`
  );

export const findTags = async(arrUsers) =>
  await http.get(`${URL}/user/get/find_tags/?arrUsers=${arrUsers}`);


  export const findForTagCommennt = async(userName, limit) =>
  await http.get(`${URL}/user/get/find_tag_comment/?userName=${userName}&limit=${limit}`);