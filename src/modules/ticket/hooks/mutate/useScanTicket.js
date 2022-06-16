import { scanTicket } from "@modules/ticket/services";
import { useMutation } from "react-query";

const useScanTicket = (eventId) => {
  return useMutation(async (ticketId) => {
    const { data } = await scanTicket(eventId, ticketId);
    return data;
  });
};

export default useScanTicket;
