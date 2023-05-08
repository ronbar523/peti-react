import http from "../httpService";
const URL = process.env.REACT_APP_SERVER_URL;

export const verifyUser = async (email, verifySecureNumber) =>
  await http.patch(
    `${URL}/user/edit/verify?email=${email}&verifySecureNumber=${verifySecureNumber}`
  );

export const changeUserName = async (requestBody) =>
  await http.patch(`${URL}/user/edit/change_user_name`, requestBody);

export const changeNameUser = async (requestBody) =>
  await http.patch(`${URL}/user/edit/change_name`, requestBody);

export const changeProfileUserPhoto = async (requestBody) =>
  await http.patch(`${URL}/user/edit/change_profile_photo`, requestBody);

export const changeBio = async (requestBody) =>
  await http.patch(`${URL}/user/edit/change_bio`, requestBody);

export const changePassword = async (password) =>
  await http.patch(`${URL}/user/edit/change_password`, password);

export const changeEmail = async (email) =>
  await http.patch(`${URL}/user/edit/change_email`, email);

export const changePublic = async (status) =>
  await http.patch(`${URL}/user/edit/change_public/?status=${status}`);

export const forgetPassword = async (requestBody) =>
  await http.patch(`${URL}/user/edit/forget_password`, requestBody);

export const resetPassword = async (
  email,
  passowrdSecureNumber,
  requestBody
) => {
  const {
    data: { token },
  } = await http.patch(
    `${URL}/user/edit/reset_password/?email=${email}&passowrdSecureNumber=${passowrdSecureNumber}`,
    requestBody
  );
  localStorage.setItem("token", token);
};

export const sendUserLike = async (userName) =>
  await http.patch(`${URL}/user/edit/send_like/${userName}`);
