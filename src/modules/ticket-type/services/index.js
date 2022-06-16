import axios from "axios";

export const getTicketType = (eventId) => {
  return axios.get(`/events/${eventId}/ticket-types`);
};
export const createTicketType = (eventId, data) => {
  return axios.post(`/events/${eventId}/ticket-types`, data);
};
export const updateTicketType = (eventId, ticketTypeId, data) => {
  return axios.put(`/events/${eventId}/ticket-types/${ticketTypeId}`, data);
};
export const deleteTicketType = (eventId, ticketTypeId) => {
  return axios.delete(`/events/${eventId}/ticket-types/${ticketTypeId}`);
};
