import axios from "axios";

export const getMyEvent = (id) => {
  return axios.get(`user/events`);
};
export const getMyTicket = (id) => {
  return axios.get(`user/tickets`);
};
