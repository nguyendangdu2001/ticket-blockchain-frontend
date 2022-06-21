import axios from "axios";

export const getMarkets = () => {
  return axios.get("/market");
};
export const getMarket = (marketId) => {
  return axios.get(`/market/${marketId}`);
};
export const getMyMarkets = () => {
  return axios.get("/market/my-market");
};
export const blockCheck = (data) => {
  return axios.post("/on-chain-listener/check", data);
};
