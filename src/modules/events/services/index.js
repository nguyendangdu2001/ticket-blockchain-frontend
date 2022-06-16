import { ticketContract } from "@config/web3";
import axios from "axios";

export const getEvents = () => {
  return axios.get("/events");
};

export const createEvent = (data) => {
  return axios.post(`/events`, data);
};
export const updateEvent = (eventId, data) => {
  return axios.put(`/events/${eventId}`, data);
};
export const deleteEvent = (eventId) => {
  return axios.delete(`/events/${eventId}`);
};

export const getEvent = (id) => {
  return axios.get(`/events/${id}`);
};

export const getMyEvent = () => {
  return axios.get(`/events/my-event`);
};
