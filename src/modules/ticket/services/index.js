import { ticketContract } from "@config/web3";
import axios from "axios";

export const buyTicket = (ticketTypeId) => {
  return axios.post("/tickets", { ticketTypeId });
};
export const scanTicket = (eventId, ticketId) => {
  return axios.post(`/tickets/scan`, { ticketId, eventId });
};
export const getTicket = () => {
  return axios.get("/tickets/my-ticket");
};
