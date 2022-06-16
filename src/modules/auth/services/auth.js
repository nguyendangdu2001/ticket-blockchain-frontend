// import AUTH_API from "@config/axios/auth";
import { web3 } from "@config/web3";
import axios from "axios";
export const login = (requestData) => {
  console.log(requestData);
  return axios.post("/auth/local", requestData);
};
export const googleLogin = (requestData) => {
  console.log(requestData);
  return axios.post("/auth/google", requestData);
};
export const facebookLogin = (requestData) => {
  console.log(requestData);
  return axios.post("/auth/facebook", requestData);
};
export const register = (requestData) => {
  return axios.post("/auth/register", requestData);
};
export const reset_password = (requestData) => {
  return axios.post("/auth/reset-password", requestData);
};
export const getProfile = () => {
  return axios.get("/users/profile");
};
export const logout = (requestData) => {
  console.log(requestData);
  return axios.post("/auth/logout", requestData);
};
export const refeshToken = async (publicAddress) => {
  const { data: nonce } = await axios.get(`/auth/nonce/${publicAddress}`);
  const signature = await web3.eth.personal.sign(
    `I am signing my one-time nonce: ${nonce?.nonce}`,
    publicAddress
  );
  const { data: jwt } = await axios.post(`/auth/refresh-token`, {
    publicAddress,
    signature,
  });
  return jwt;
};
