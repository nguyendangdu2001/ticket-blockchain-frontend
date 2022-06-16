import { logout, updateToken } from "@modules/auth/slices";
import axios from "axios";
import { store } from "@app/store";
import { refeshToken } from "@modules/auth/services/auth";
let BASE_URL = "http://localhost:5000/";
let BASE_URL_EMBED = "http://localhost:8000/";
let BASE_URL_WS = "http://localhost:5000/";
let BASE_URL_JS_EMBED = "http://localhost:5000/";
let API_IMGBB_KEY = "ef456e4869f97e66128f272ec46b4d34";
if (import.meta.NODE_ENV === "production") {
  BASE_URL = "https://livechat.nnnhan2804.online/";
  BASE_URL_EMBED = "https://embed.nnnhan2804.online/";
  BASE_URL_WS = "https://livechat.nnnhan2804.online/";
  BASE_URL_JS_EMBED = "https://livechat.nnnhan2804.online/";
}
export {
  BASE_URL,
  BASE_URL_WS,
  BASE_URL_EMBED,
  BASE_URL_JS_EMBED,
  API_IMGBB_KEY,
};
axios.defaults.baseURL = `${BASE_URL}api`;
axios.defaults.withCredentials = true;

export const configAxios = () => {
  axios.interceptors.request.use(
    (config) => {
      if (!config.headers.Authorization) {
        const token = store.getState().auth?.token;
        console.log(token);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }

      return config;
    },
    (error) => Promise.reject(error)
  );
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalConfig = error.config;
      const url = originalConfig.url;

      if (error.response && url !== "/auth/refresh" && url !== "/auth/login") {
        //@ts-ignore
        if (error.response.status === 401) {
          //@ts-ignore
          try {
            const publicAddress = store.getState().auth.account;
            if (!publicAddress) return Promise.reject(error);
            const jwt = await refeshToken(publicAddress);
            store.dispatch(updateToken(jwt));
            originalConfig.headers["Authorization"] = `Bearer ${jwt}`;
            return axios(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(error);
    }
  );
};
